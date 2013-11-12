Posts = new Meteor.Collection('posts');

Posts.allow({
   update: ownsPost,
   remove: ownsPost
 });

Posts.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following fields:
    return (_.without(fieldNames, 'author', 'exploreId', 'postAsType', 'postAsId', 'name', 'body', 'dateTime', 'location', 'file', 'fileType', 'fileSize', 'lastCommentTime', 'lastUpdated', 'eventPhoto', 'retinaEventPhoto', 'numDownloads', 'children', 'flagged', 'lastDownloadTime').length > 0);
  }
});

//ADD EVENTS TO INDEX
var events = Posts.find({postType: "event"}, {fields: {'name': 1, '_id': 1}});
events.forEach(function(event) {
  Meteor.call("addEventToIndex", event._id, event.name);
});
//ADD DISCUSSIONS TO INDEX
var discussions = Posts.find({postType: "discussion"}, {fields: {'name': 1, '_id': 1}});
discussions.forEach(function(discussion) {
  Meteor.call("addDiscussionToIndex", discussion._id, discussion.name);
});
//ADD FILES TO INDEX IF THEY HAVE A BUBBLEID
var files = Posts.find({postType: "file", bubbleId: {$exists: true}}, {fields: {'name': 1, '_id': 1}});
files.forEach(function(file) {
  Meteor.call("addFileToIndex", file._id, file.name);
});


Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.users.findOne(Meteor.userId());

    if(typeof postAttributes.bubbleId != 'undefined'){
      var postWithSameName = Posts.findOne({name: postAttributes.name, bubbleId: postAttributes.bubbleId});
    }
    else{
      var postWithSameName = Posts.findOne({name: postAttributes.name, exploreId: postAttributes.exploreId}); 
    }
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");
    
    // ensure the post has all of its fields filled in
    if ( postAttributes.postType == 'discussion' && (!postAttributes.name || !postAttributes.body) ) {
      throw new Meteor.Error(422, 'Please fill in all fields');
    } else if ( postAttributes.postType == 'event' && (!postAttributes.name || !postAttributes.body || !postAttributes.location || !postAttributes.dateTime) ) {
      throw new Meteor.Error(422, 'Please fill in all fields');
    } else if ( postAttributes.postType == 'file' && (!postAttributes.name || !postAttributes.file) ) {
      throw new Meteor.Error(422, 'Please fill in all fields');
    }

    // check that there are no previous posts with the same title
    if (postAttributes.title && postWithSameName) {
      throw new Meteor.Error(302, 
        'This post has already been created', 
        postWithSameName._id);
    }

    if(!postAttributes.attendees){
      postAttributes.attendees = [];
    }

    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'postAsType', 'postAsId', 'postType', 'name', 'body', 'file', 'fileType', 'fileSize', 'dateTime', 'location', 'bubbleId', 'exploreId', 'attendees', 'eventPhoto', 'numDownloads', 'parent', 'children', 'lastDownloadTime'), {
      userId: user._id,
      author: user.name, 
      submitted: new Date().getTime(),
      lastUpdated: new Date().getTime(),
      lastCommentTime: new Date().getTime(),
      commentsCount: 0,
      flagged: false,
      viewList: [user._id],
      viewCount: 1
    });

    post._id = Posts.insert(post);
    createPostUpdate(post);

    if(postAttributes.postType == "file")
    {
      Meteor.call("addFileToIndex", post._id, postAttributes.name);
    } else
    if(postAttributes.postType == "discussion") {
      Meteor.call("addDiscussionToIndex", post._id, postAttributes.name);
    } else
    if(postAttributes.postType == "event") {
      Meteor.call("addEventToIndex", post._id, postAttributes.name);
    }

    return post;
  },

  deletePost: function(postId) {
    Updates.update({postId: postId}, {$set: {read: true}});
    var post = Posts.findOne(postId);
    Posts.remove(postId);
    if(Meteor.userId() != post.userId) {
      createPostDeletedUpdate(post.userId, postId);
    }
  },

  incViewCount: function(postId) {
    var user = Meteor.users.findOne(Meteor.userId());
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login");
    Posts.update({
      _id: postId, 
      viewList: {$nin: [Meteor.userId()]}
    }, {
      $addToSet: {viewList: Meteor.userId()},
      $inc: {viewCount: 1}
    });
  },

  tagBubble: function(postId, bubbleId) {
    var user = Meteor.users.findOne(Meteor.userId());
    var bubble = Bubble.findOne({bubbleId:bubbleId});
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to add a Bubble to this post");
    
    Posts.update({
      _id: postId
    }, {
      $addToSet: {bubble: bubble._id}
    });
  },

  attendEvent: function(post,callback){
    //Meteor.subscribe('findPostsById',[postId]);
    //post = Posts.findOne({_id: postId});
    console.log("Post? ", post);
    username = Meteor.userId();
    postId = post.id;
    if (!_.contains(post.attendees,username)) {
      //Logs the action that user is doing
      /*Meteor.call('createLog', 
        { action: 'click-eventGoing' }, 
        window.location.pathname, 
        function(error) { if(error) { throwError(error.reason); }
      });*/

      Posts.update({_id:postId},
      {
        $addToSet: {attendees:username}
      });
      //Create an update for user who are in the event
      createNewAttendeeUpdate(postId);
    }else{
      //Logs the action that user is doing
      /*Meteor.call('createLog', 
        { action: 'click-eventNotGoing' }, 
        window.location.pathname, 
        function(error) { if(error) { throwError(error.reason); }
      });*/

      Posts.update({_id:postId},
      {
        $pull: {attendees:username}
      });
    }
    return postId;
  },
  getNumOfEvents: function(bubbleId, postType ) {
    return Posts.find({'bubbleId': bubbleId, 'postType': postType}).count();
  }
});

createPost = function(postAttributes){
  Meteor.call('post', postAttributes, function(error, post) {
    if (error) {
      // display the error to the user
      throwError(error.reason);
    } else {
        if(typeof postAttributes.bubbleId != 'undefined'){
          //Meteor.Router.to('postPageBackbone', post.bubbleId, post._id);
          Meteor.Router.to('postPage', post.bubbleId, post._id);
        }
        else{
          //Meteor.Router.to('explorePostPageBB', post.exploreId, post._id);
          Meteor.Router.to('explorePostPage', post.exploreId, post._id);
        }
    }
  });
}

createPostWithAttachments = function(postAttributes, fileList){
  Meteor.call('post', postAttributes, function(error, post){
    if (error) {
      // display the error to the user
      throwError(error.reason);
    } else {
      var filepostIds = [];
      for (var i = 0, f; f = fileList[i]; i++) {
        var reader = new FileReader();
        reader.onload = (function(f){
          return function(e) {
            
            var attributes = {
              name: escape(f.name),
              file: e.target.result,
              fileType: f.type,
              postType: 'file',
              numDownloads: 0,
              lastDownloadTime: new Date().getTime(),
              author: postAttributes.author,
              //bubbleId: Session.get('currentBubbleId'),
              parent: post._id   //This needs to be set to the ID of the post created above.
            };
            if(typeof postAttributes.bubbleId != 'undefined'){
              attributes.bubbleId = postAttributes.bubbleId;
            }
            else{
              attributes.exploreId = postAttributes.exploreId;
            }
            var parentid = post._id;
            Meteor.call('post', attributes, function(error, newPost){
              if(error){
                throwError(error.reason);
              }
              else{
                //filepostIds.push(id);
                var parentPost = Posts.findOne({_id: parentid});
                var childPosts = parentPost.children;
                if(childPosts == null){
                  childPosts = [];
                }
                childPosts.push(newPost._id);
                console.log(childPosts);
                var updatedProperties = {
                  children: childPosts
                };

                console.log('Attaching: ', parentid, updatedProperties);
                Posts.update(parentid, {$set: updatedProperties}, function(error){
                  if(error){
                    throwError(error.reason);
                  }
                });
              }
            });
          }
        })(f);
        reader.readAsDataURL(f);
      }

      if(typeof postAttributes.bubbleId != 'undefined'){
        //Meteor.Router.to('postPageBackbone', post.bubbleId, post._id);
        Meteor.Router.to('postPage', post.bubbleId, post._id);
      }
      else{
        //Meteor.Router.to('explorePostPageBB', post.exploreId, post._id);
        Meteor.Router.to('explorePostPage', post.exploreId, post._id);
      }

    }
  });
}




updatePostWithAttachments = function(id, postAttributes, fileList){
  var discussionPost = Posts.findOne({_id: id});
  console.log("DISCUSSION POST: ", discussionPost); 
  var newChildren = [];

  for(var i=0; i < discussionPost.children.length; i++){
    if(postAttributes.children.indexOf(discussionPost.children[i]) == -1){
      Posts.remove({_id: discussionPost.children[i]});
    }
    else{
      newChildren.push(discussionPost.children[i]);
    }
  }

  console.log('New children after pruning: ', newChildren);

  Posts.update(discussionPost._id, {$set: {'children': newChildren}}, function(error){
    if(error){
      throwError(error.reason);
    }
  });

  for (var i = 0, f; f = fileList[i]; i++) {
    var reader = new FileReader();
    reader.onload = (function(f){
      return function(e) {
        
        var attributes = {
          name: escape(f.name),
          file: e.target.result,
          fileType: f.type,
          postType: 'file',
          numDownloads: 0,
          lastDownloadTime: new Date().getTime(),
          //bubbleId: Session.get('currentBubbleId'),
          parent: discussionPost._id   //This needs to be set to the ID of the post created above.
        };
        console.log('Updating: ', postAttributes);
        if(typeof postAttributes.bubbleId != 'undefined'){
          attributes.bubbleId = postAttributes.bubbleId;
        }
        else{
          attributes.exploreId = postAttributes.exploreId;
        }
        var parentid = discussionPost._id;
        Meteor.call('post', attributes, function(error, newPost){
          if(error){
            throwError(error.reason);
          }
          else{
            //filepostIds.push(id);
            var parentPost = Posts.findOne({_id: parentid});
            var childPosts = parentPost.children;
            if(childPosts == null){
              childPosts = [];
            }
            childPosts.push(newPost._id);
            console.log('Newborns: ', childPosts);
            var updatedProperties = {
              children: childPosts,
              body: postAttributes.body,
              name: postAttributes.name
            };
            Posts.update(parentid, {$set: updatedProperties}, function(error){
              if(error){
                console.log('Error: ', error);
                throwError(error.reason);
              }
              else{
                console.log('Successfully updated');
              }
            });
          }
        });
      }
    })(f);
    reader.readAsDataURL(f);
  }

  if(fileList.length == 0){
    if(typeof discussionPost.bubbleId != 'undefined'){
      Posts.update(discussionPost._id, {$set: postAttributes}, function(error){
        if(error){
          console.log('Error: ', error);
          throwError(error.reason);
        }
        else{
          console.log('Successfully updated bubble post');
            Meteor.Router.to('postPage', discussionPost.bubbleId, discussionPost._id);
        }
      });
    }
    else if(typeof discussionPost.exploreId != 'undefined'){
      Posts.update(discussionPost._id, {$set: postAttributes}, function(error){
        if(error){
          console.log('Error: ', error);
          throwError(error.reason);
        }
        else{
          console.log('Successfully updated');
          //explorePageDep.changed();
          Meteor.Router.to('explorePostPage', discussionPost.exploreId, discussionPost._id);
        }
      });
    }
  }

}

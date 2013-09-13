//the events past 4 hours will not be listed on the event page
referenceDateTime = moment().add('hours',-4).valueOf();

Template.bbExplorePage.created = function(){
  //var currentExploreId = window.location.pathname.split("/")[2];
  var currentExploreId = "hKPb7ZohcmJEFR78W";

  ExploreUser = Backbone.Model.extend({
    url: function() {
      return "/2013-09-11/users/"+this.id;
    }
  });
  ExploreUsers = Backbone.Collection.extend({
    model: ExploreUser,
    url: function() {
      return "/2013-09-11/users/";
    }
  });

  ExploreBubble = Backbone.Model.extend({
    url: function() {
      return "/2013-09-11/bubbles/"+this.id;
    }
  });
  ExploreBubbles = Backbone.Collection.extend({
    model: ExploreBubble,
    url: function() {
      return "/2013-09-11/bubbles/";
    }
  });

  ExplorePost = Backbone.Model.extend({
    url: function() {
      return "/2013-09-11/posts/"+this.id;
    }
  });
  ExplorePosts = Backbone.Collection.extend({
    model: ExplorePost,
    url: function() {
      return "/2013-09-11/explores/"+currentExploreId+"/posts";
    },
    parse: function(response) {
      console.log("Parse response: ", response);
      exploreusers = new ExploreUsers();
      explorebubbles = new ExploreBubbles();
      retVal = [];
      //response.posts.each(post)
      _.each(response.posts, function(post)
      {
        console.log("POST: ", post);
        if(post.postAsType === "user")
        {
          var tmp = new ExploreUser({id: post.postAsId}).fetch({"async": false});
          exploreusers.add(tmp);
        }
        if(post.postAsType === "bubble")
        {
          var tmp = new ExploreBubble({id: post.postAsId}).fetch({"async": false});
          explorebubbles.add(tmp);
        }
        retVal.push(post);
      })
      return retVal;
    }
  });

  exploreposts = new ExplorePosts();
  exploreposts.fetch({"async": false, "success": function(collection, response) {
    console.log("success");
    console.log("Post Collection: ", collection);
    console.log("Post Response: ", response);
  }});

  Session.set("isLoading", true);
  max_scrolltop = 100;
  virtualPage = 0;
  //console.log('Explore Page Created');
  postIds = [];
  Meteor.subscribe('currentExplorePostIds', currentExploreId, function(){
    console.log('Explore Page Created: ', currentExploreId, Posts.find({exploreId: currentExploreId}).fetch());


    //TODO: Sort discussion explores by lastUpdated
    //TODO: Sort event explores by dateTime: 1

    var params_find     =  {exploreId: currentExploreId};


    var currentExplore  =  Explores.findOne({_id: currentExploreId});
    var inputPostType   =  currentExplore.exploreType;

    if (inputPostType == 'event') {
      params_find.dateTime  =  {$gt: moment().add('hours',-4).valueOf()}
      var params_sort       =  {dateTime:     1}
    } else if (inputPostType == 'file') {
      var params_sort       =  {lastDownloadTime: -1}
    } else {
      var params_sort       =  {lastCommentTime:  -1}
    }

    posts = Posts.find(params_find, {sort: params_sort}).fetch();


    postIds = _.pluck(posts, "_id");
    virtualPagePostIds = postIds.slice(0, 10);
  });
}


Template.bbExplorePage.rendered = function(){
  var currentExploreId = window.location.pathname.split("/")[2];
  console.log('Explore Page Rendered: ', currentExploreId, Posts.find({exploreId: currentExploreId}).fetch());
  //var posts = Posts.find({exploreId: currentExploreId}).fetch();
  //var postIds = _.pluck(posts, "_id");
  //Meteor.subscribe('findExplorePostsById', virtualPagePostIds);
  Meteor.subscribe('currentExplorePostIds', currentExploreId, function(){
    console.log('Explore Page Created: ', currentExploreId, Posts.find({exploreId: currentExploreId}).fetch());
    posts = Posts.find({exploreId: currentExploreId}).fetch()
    postIds = _.pluck(posts, "_id");
    virtualPagePostIds = postIds.slice(0, 10)
    Meteor.subscribe('findExplorePostsById', virtualPagePostIds, function() {
      Session.set("isLoading", false);
      console.log("DONE");
    });
  });
  //console.log('Post Ids: ', postIds);

  $("#main").scroll(function(){
    console.log('Scrolltop, mainheight, documentheight, windowheight: ', $("#main").scrollTop(), $("#main").height(), $(document).height(), $(window).height());
      if($("#main").scrollTop() > max_scrolltop){
        //console.log('Pre paginating: ', virtualPage, $("#main").scrollTop(), $("#main").height(), $(document).height());
        //console.log('Scrolling: ', virtualPage, userIds.slice(oldpage*10, page*10));
        max_scrolltop = $("#main").scrollTop() + 200;
        virtualPage = virtualPage + 1;
        //var pageUserIds = userIds.slice((page)*5, (page+1)*5);
        //Meteor.subscribe('findUsersById', pageUserIds);
        var virtualPagePostIds = postIds.slice((virtualPage)*10, (virtualPage+1)*10);
        Meteor.subscribe('findExplorePostsById', virtualPagePostIds);
        //console.log('Paginating: ', (virtualPage)*10, (virtualPage+1)*10);
        //console.log('Explore post Ids: ', virtualPagePostIds);
        //console.log('End of Page');
      }
      
    });

}

Template.bbExplorePage.helpers({ 
  currentExplore: function(){
    var currentExploreId = Session.get('currentExploreId');
    var currentExplore = Explores.findOne({_id: currentExploreId});
    return currentExplore;
  },

  //Get posts assigned to this bubble
  eventsCount: function() {
    return Meteor.call('getNumOfEvents','event');
  },
  discussionsCount: function() {
    return Posts.find({bubbleId:Session.get('currentBubbleId'), postType:'discussion'}).count() - 3;
  },
  filesCount: function() {
    return Posts.find({bubbleId:Session.get('currentBubbleId'), postType:'file'}).count() - 3;
  },

  // check if there are more posts to view
  hasMoreEvents: function() {
    var num = Posts.find({bubbleId:Session.get('currentBubbleId'), postType:'event', dateTime: {$gt: referenceDateTime}}).count() - 3;
    if (num > 0){
      return true;
    }else{
      return false;
    }
  },
  hasMoreDiscussions: function() {
    var num = Posts.find({bubbleId:Session.get('currentBubbleId'), postType:'discussion'}).count() - 3;
    if (num > 0){
      return true;
    }else{
      return false;
    }
  },
  hasMoreFiles: function() {
    var num = Posts.find({bubbleId:Session.get('currentBubbleId'), postType:'file'}).count() - 3;
    if (num > 0){
      return true;
    }else{
      return false;
    }
  },

  // return only latest 3 posts
  filePosts: function() {
    return Posts.find({bubbleId:Session.get('currentBubbleId'), postType:'file'},{limit: 3}).fetch();
  },

  posts: function() {

    var currentExploreId      =  Session.get('currentExploreId');
    var currentExplore        =  Explores.findOne({_id: currentExploreId});

    var params_find           =  {exploreId: currentExploreId};
    var inputPostType         =  currentExplore.exploreType;

    if (inputPostType == 'event') {
      params_find.dateTime    =  {$gt: moment().add('hours',-4).valueOf()}
      var params_sort         =  {dateTime:     1}
    } else if (inputPostType  == 'file') {
      var params_sort         =  {lastDownloadTime: -1}
    } else {
      var params_sort         =  {lastCommentTime:  -1}
    }

    var posts = Posts.find(params_find, {sort: params_sort}).fetch();


    var validPostIds = [];
    for(var i=0; i < posts.length; i++) {
      var postAsId = posts[i].postAsId;
      
      if((Bubbles.find({_id: postAsId}).count() > 0) || (Meteor.users.find({_id: postAsId}).count() > 0)){
        validPostIds.push(posts[i]._id);
      }
    }


    params_find._id     =  {$in: validPostIds};

    var posts_filtered  =  Posts.find(params_find, {sort: params_sort}).fetch();

    return posts_filtered;
  }
});

Template.bbExplorePage.events({
  'btn .clear-updates': function() {
    Meteor.call('clearUpdates', Session.get('currentBubbleId'));
  }
});
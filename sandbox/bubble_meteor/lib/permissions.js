ownsUpdate = function(userId, doc) {
	return doc && doc.invokerId === userId;
}

ownsProfile = function(userId, profile) {
	return '4' == Meteor.user().userType || userId === profile._id;
}

ownsPost = function(userId, doc) {
	var bubble = Bubbles.findOne(doc.bubbleId);
	return ('3' == Meteor.user().userType 
		|| doc.author == Meteor.user().username
		|| _.contains(bubble.users.admins,Meteor.userId()));
}

ownsComment = function(userId, doc) {
  var post = Posts.findOne(doc.postId);
  var bubble = Bubbles.findOne(post.bubbleId);
  if (bubble) {
    var admins = bubble.users.admins;
    if(Meteor.userId()) {
      var userId = Meteor.userId();
      if('3' == Meteor.user().userType 
        || userId == post.userId 
        || userId == doc.userId 
        || _.contains(admins, userId)) {
        return true;
      }else{
        return false;
      }
    }
  }
}

ownsBubble = function(userId, doc, onChange) {
  return _.contains('3' == Meteor.user().userType 
    || doc.users.admins, Meteor.userId());
}


ownsExplore = function(userId, doc){
  return true;
}

exploreAdmin = function(userId, doc){
  var explore = Explore.findOne(doc._id);
  return ('3' == Meteor.user().userType);
}

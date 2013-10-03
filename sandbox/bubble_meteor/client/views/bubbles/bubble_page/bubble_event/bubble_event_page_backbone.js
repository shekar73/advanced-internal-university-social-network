Template.bubbleEventPageBackbone.created = function(){
  Session.set("isLoading", true);

  bubbleDep = new Deps.Dependency;

  //Session.set("isLoading", true);
 //var bubble = Bubbles.findOne( Session.get('currentBubbleId') );

  currentBubbleId = window.location.pathname.split("/")[2];

  mybubbles = new BubbleData.MyBubbles({
    bubbleId: currentBubbleId,
    limit: 10,
    fields: ['title', 'profilePicture', 'category', 'bubbleType'],

    events: {
      limit: 10,
      fields: ['name', 'author', 'submitted', 'postType', 'bubbleId', 'dateTime', 'commentsCount', 'attendees']
    },

    discussions: {
      limit: 1,
      fields: ['name', 'author', 'submitted', 'postType', 'bubbleId', 'dateTime', 'commentsCount']
    },

    files: {
      limit: 1,
      fields: ['name', 'author', 'submitted', 'postType', 'bubbleId', 'dateTime', 'commentsCount']
    },

    members: {
      limit: 1,
      fields: ['username', 'name', 'profilePicture']
    },

    admins: {
      limit: 1,
      fields: ['username', 'name', 'profilePicture']
    },

    applicants: {
      limit: 1,
      fields: ['username', 'name', 'profilePicture']
    },

    invitees: {
      limit: 1,
      fields: ['username', 'name', 'profilePicture']
    },

    callback: function(){
      console.log('Bubbledata changed');
      bubbleDep.changed();
      Session.set('isLoading', false);
    }
  });
}


Template.bubbleEventPageBackbone.rendered = function(){
var currentUrl  =  window.location.pathname;
var urlArray    =  currentUrl.split("/");
var currentBubbleId  =  urlArray[2];
eventsHandle = Meteor.subscribe('events', currentBubbleId, function() {
    Session.set("isLoading", false);
  });

  if(currentBubbleId != window.location.pathname.split("/")[2])
  {
    console.log('Bubble chenged');
    currentBubbleId = window.location.pathname.split("/")[2];

    var isMemberAjax = $.ajax({url: '/2013-09-11/ismember?bubbleid=' + currentBubbleId + '&userid=' + Meteor.userId()});
    var isAdminAjax = $.ajax({url: '/2013-09-11/isadmin?bubbleid=' + currentBubbleId + '&userid=' + Meteor.userId()});
    if(isMemberAjax.responseText == 'False' && isAdminAjax.responseText == 'False'){
      Meteor.Router.to('bubblePublicPage', bubble._id);
    }

    mybubbles = new BubbleData.MyBubbles({
      bubbleId: currentBubbleId,
      limit: 10,
      fields: ['title', 'profilePicture', 'category', 'bubbleType'],

      events: {
        limit: 10,
        fields: ['name', 'author', 'submitted', 'postType', 'bubbleId', 'dateTime', 'commentsCount', 'attendees']
      },

      discussions: {
        limit: 1,
        fields: ['name', 'author', 'submitted', 'postType', 'bubbleId', 'dateTime', 'commentsCount']
      },

      files: {
        limit: 1,
        fields: ['name', 'author', 'submitted', 'postType', 'bubbleId', 'dateTime', 'commentsCount']
      },

      members: {
        limit: 1,
        fields: ['username', 'name', 'profilePicture']
      },

      admins: {
        limit: 1,
        fields: ['username', 'name', 'profilePicture']
      },

      applicants: {
        limit: 1,
        fields: ['username', 'name', 'profilePicture']
      },

      invitees: {
        limit: 1,
        fields: ['username', 'name', 'profilePicture']
      },

      callback: function(){
        console.log('Bubbledata changed');
        bubbleDep.changed();
        Session.set('isLoading', false);
      }
    });
  }

}




Template.bubbleEventPageBackbone.helpers({
  //Get posts assigned to this bubble
  getEventPosts: function() {
    var currentUrl  =  window.location.pathname;
    var urlArray    =  currentUrl.split("/");
    var currentBubbleId  =  urlArray[2];

    return mybubbles.Events.getJSON();

    //return Posts.find({bubbleId: currentBubbleId, postType: 'event', dateTime: {$gt: moment().add('hours',-4).valueOf()}}, {/*limit: eventsHandle.limit(),*/ sort: {dateTime: 1} });
  },

  postPropertiesBackboneEvent: function(){
    bubbleDep.depend();
    var eventPosts = mybubbles.Events.getJSON();
    var topEventPosts = eventPosts.slice(0, 3);
    return {
      'posts': topEventPosts,
      'postType': 'event',
      'word1': 'upcoming'
    }
  },

  getCurrentBubbleBackbone: function(){
    var bubble = mybubbles.bubbleInfo.toJSON();
    return bubble;
  }
  
});
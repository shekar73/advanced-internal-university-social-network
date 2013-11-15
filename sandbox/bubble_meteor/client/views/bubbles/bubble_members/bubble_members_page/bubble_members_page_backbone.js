// Private helpers
// TODO: Fix me. It is not possible to access template instance from template helper in Meteor,
// so we will use global state for now
var state = {
  mybubbles: null
};

function fetchData(bubbleId) {
  Session.set('isLoading', true);

  console.log('----- LOADING!')

  var mybubbles = state.mybubbles = new BubbleDataNew.MyBubbles({
    bubbleId: bubbleId,
    fields: ['title', 'profilePicture', 'category', 'bubbleType'],

    members: {
      limit: 10,
      fields: ['username', 'name', 'profilePicture', 'userType'],
      load: true
    },

    admins: {
      limit: 10,
      fields: ['username', 'name', 'profilePicture', 'userType'],
      load: true
    },

    applicants: {
      limit: 10,
      fields: ['username', 'name', 'profilePicture', 'userType'],
      load: true
    },

    invitees: {
      limit: 10,
      fields: ['username', 'name', 'profilePicture', 'userType'],
      load: true
    },

    callback: function(bubble) {
      Session.set('isLoading', false);

      console.log('----- LOADED!')

      if (mybubbles === state.mybubbles)
        Session.set('bubbleInfo', bubble);
    }
  });
}

function refreshData(collection) {
  collection.refresh(function() {
    Session.set('isLoading', false);
  });
}

// Template helpers
Template.bubbleMembersPageBackbone.helpers({
	getCurrentBubbleBackbone: function(){
    return Session.get('bubbleInfo');
	},
	adminsObj: function() {
		return state.mybubbles.Admins;
	},
	membersObj: function() {
		return state.mybubbles.Members;
	},
	inviteesObj: function() {
		return state.mybubbles.Invitees;
	},
	applicantsObj: function() {
		return state.mybubbles.Applicants;
	},
	isSuperBubble: function() {
    var bubbleInfo = Session.get('bubbleInfo');

    if (bubbleInfo)
      return bubbleInfo.bubbleType === 'super';

    return false;
	}
});

Template.bubbleMembersPageBackbone.created = function() {
  var currentBubbleId = Session.get('currentBubbleId');

  // TODO: Fix me or remove me?
  Meteor.subscribe("findBubblesById", [currentBubbleId], function(){
      console.log("Current Bubble Id: ", currentBubbleId);
      var users = Bubbles.findOne({_id: currentBubbleId}).users;
      if(typeof rejectList == 'undefined'){
        rejectList = [];
      }
      rejectList = rejectList.concat(users.admins, users.members,users.applicants);
      rejectList.push(Meteor.userId());
      Session.set("selectList", users.invitees);
  });

  this.watch = Meteor.autorun(function() {
    fetchData(Session.get('currentBubbleId'));
  });
};

Template.bubbleMembersPageBackbone.rendered = function() {
  $('#bubble-members-page').off('bubbleRefresh').on('bubbleRefresh', function(e) {
    function refresh() {
      var sections = e.sections;

      if (!sections || !sections.length) {
        Session.set('isLoading', false);
        return;
      }

      console.log('REFRESHING', sections);

      for (var i in sections) {
        var section = sections[i];

        switch (section) {
          case 'admins':
            refreshData(state.mybubbles.Admins);
            break;
          case 'members':
            refreshData(state.mybubbles.Members);
            break;
          case 'invitees':
            refreshData(state.mybubbles.Invitees);
            break;
          case 'applicants':
            refreshData(state.mybubbles.Applicants);
            break;
          case 'bubble':
            state.mybubbles.reloadBubble(function(bubble) {
              Session.set('bubbleInfo', bubble);
              Session.set('isLoading', false);
            });
            break;
        }
      }
    }

    // TODO: Fix race condition
    Session.set('isLoading', true);
    if (e.timeout) {
      Meteor.setTimeout(refresh, e.timeout);
    } else {
      refresh();
    }
  });
};

Template.bubbleMembersPageBackbone.destroyed = function() {
  this.watch.stop();
};

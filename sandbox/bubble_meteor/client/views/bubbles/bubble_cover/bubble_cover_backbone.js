Template.bubbleCoverBackbone.rendered = function(){
  console.log("Cover Rendered");
};

Template.bubbleCoverBackbone.created = function() {
  console.log("Cover Created");
};


Template.bubbleCoverBackbone.helpers({
  hasBeenInvited: function() {
    if (this.users)
      return _.contains(this.users.invitees, Meteor.userId());

    return false;
  },

	hasApplied: function() {
    if (this.users)
      return _.contains(this.users.applicants, Meteor.userId());

    return false;
	},

	hasJoinedBubble: function() {
    if (this.users) {
      var userId = Meteor.userId();
      return _.contains(this.users.members, userId) || _.contains(this.users.admins, userId);
    }

    return false;
	},

  isAdminBackbone: function() {
    if (this.users)
      return _.contains(this.users.admins, Meteor.userId());
  },

  isSuperBubbleBackbone: function(){
    return this.bubbleType === 'super';
  },

  getBubbleUsersCountBackbone: function(){
    if (this.users)
      return this.users.admins.length + this.users.members.length;

    return 0;
  }
});

Template.bubbleCoverBackbone.events({
  'click #bubble-pic': function() {
    var bubbleInfo = Session.get('bubbleInfo');
    var isAdmin = BubbleDataNew.Helpers.isAdmin(bubbleInfo, Meteor.userId());
    var isMember = BubbleDataNew.Helpers.isMember(bubbleInfo, Meteor.userId());

    var imgSrc = $('#bubble-pic').attr('src');
    if (imgSrc === '/img/Bubble-Profile.jpg' && isAdmin) {
      Meteor.Router.to('bubbleEdit', Session.get('currentBubbleId'));
    } else
    if (isMember) {
      Meteor.Router.to('bubblePageBackbone', Session.get('currentBubbleId'));
    }
  },
  'click .invite-accept': function() {
    Meteor.call('acceptInvitation', this._id);
  },
  'click .invite-deny': function() {
    Meteor.call('removeInvitee', this._id);
  },
  'click .join-apply': function() {
    //Google Analytics
    _gaq.push(['_trackEvent', 'Bubble', 'Join Bubble', this.title]);
    Meteor.call('sendApplicantEmail', Meteor.userId(), this._id);
    Meteor.call('joinBubble', Session.get('currentBubbleId'));
  },
  'click .cancel-apply': function() {
    //Google Analytics
    _gaq.push(['_trackEvent', 'Bubble', 'Cancel Application', this.title]);
    Meteor.call('cancelJoinBubble', Session.get('currentBubbleId'));
  }
});


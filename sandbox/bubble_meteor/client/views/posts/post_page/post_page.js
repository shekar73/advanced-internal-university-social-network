Template.postPage.helpers({
    isFlagged: function() {
      if (this.flagged)
        return true;
      else
        return false;
    }
});

Template.postPage.events({
  'click .btn-flag': function() {
    //Google Analytics
    _gaq.push(['_trackEvent', 'Flagging', 'Flag', +this.name]);

    if (confirm("Flagging a post will report it to Bubble moderators as inappropriate. Are you sure you want to flag this post?")) {
      var flagAttributes = {
        postId: this._id,
        bubbleId: this.bubbleId,
        invokerId: Meteor.userId(),
        invokerName: Meteor.user().username,
      }
      Meteor.call('createFlag',flagAttributes);
    }
  }
});

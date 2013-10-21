Template.imGoing.rendered = function(){
  if(typeof goingDep === "undefined")
    goingDep = new Deps.Dependency;
}

Template.imGoing.helpers({
    mainWords : function() {
      goingDep.depend();
      console.log(">im-going", this);
      if (_.contains(this.attendees,Meteor.userId()))
        return "not going"
      else
        return "i'm going"
    }
});

Template.imGoing.events({
    'click .im-going': function(event) {
      // Disable the parent button
        event.stopPropagation();

      // Add/remove the user to/from list of attendees
      console.log("CLICK IM GOING: ", this);
      if(typeof this.id !== "undefined")
      {
        var that = this;
        Meteor.call('attendEvent',this,function(err,res){
          if(!err)
          {
            var section = window.location.pathname.split("/")[1];
            var subsection = window.location.pathname.split("/")[3];
            if(section === "explore")
            {
              console.log("Toggle Going: ",that);
              
              es.toggleGoing(res,Meteor.userId(),function(){
                console.log("Toggle Callback");
                explorePageDep.changed();
              });
              /*
              if(subsection === "posts")
                exploreDep.changed();
              else
                Meteor.Router.to('explorePostPageBB',that.exploreId,that.id);
              */
            }
            if(section === "mybubbles")
            {
              console.log("Toggle Going: ",that);
              /*
              mybubbles.Events.toggleGoing(res,Meteor.userId(),function(){
                console.log("Toggle Callback");
                bubbleDep.changed();
              });
              */
              if(subsection === "posts")
                bubbleDep.changed();
              else
                Meteor.Router.to('postPageBackbone',that.bubbleId,that.id);
            }
          }
        });
      }

      // Track action on Google Analytics
        _gaq.push(['_trackEvent', 'Post', 'Attending Event', this.name]);
    }
});


Template.imGoingSmall.helpers({
    mainWords : function() {
      console.log(">im-going", this);
      if (_.contains(this.attendees,Meteor.userId()))
        return "not going"
      else
        return "i'm going"
    }
});

Template.imGoingSmall.events({
    'click .im-going': function(event) {
      // Disable the parent button
        event.stopPropagation();

      // Add/remove the user to/from list of attendees
      if(typeof this.id !== "undefined")
      {
        var that = this;
        Meteor.call('attendEvent',this,function(err,res){
          if(!err)
          {
            var section = window.location.pathname.split("/")[1];
            if(section === "explore")
            {
              console.log("Toggle Going: ",that);
              /*
              es.toggleGoing(res,Meteor.userId(),function(){
                console.log("Toggle Callback");
                explorePageDep.changed();
              });
              */
              Meteor.Router.to('explorePostPageBB',that.exploreId,that.id);
            }
            if(section === "mybubbles")
            {
              console.log("Toggle Going: ",that);
              /*
              mybubbles.Events.toggleGoing(res,Meteor.userId(),function(){
                console.log("Toggle Callback");
                bubbleDep.changed();
              });
              */
              Meteor.Router.to('postPageBackbone',that.bubbleId,that.id);
            }
          }
        });
      }
      // Track action on Google Analytics
        _gaq.push(['_trackEvent', 'Post', 'Attending Event', this.name]);
    }
});

Template.bubbleInvitation.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var currentBubbleId = Session.get('currentBubbleId');
    
    var bubbleProperties = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      lastUpdated: new Date().getTime()
    }
    
    Bubbles.update(currentBubbleId, {$set: bubbleProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        createBubbleNotification(Bubbles.findOne(currentBubbleId));
        Meteor.Router.to('bubblePage', currentBubbleId);
      }
    });
  },
});


Template.bubbleInvitation.rendered = function() {

  //Format the searchfield when the textbox is changed
  $(".search-text").change(function(){
    var searchText = $(".search-text").val();
    $(".search-field").val(searchText);
  });

}

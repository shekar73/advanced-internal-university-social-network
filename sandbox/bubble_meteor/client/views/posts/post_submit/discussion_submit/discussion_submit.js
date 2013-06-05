Template.discussionSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    
    var post = {
      name: $(event.target).find('[name=name]').val(),
      body: $(event.target).find('[name=body]').val()
    }
    
    Meteor.call('post', post, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        
        // if the error is that the post already exists, take us there
        if (error.error === 302)
          Meteor.Router.to('postPage', error.details)
      } else {
        Meteor.Router.to('postPage', id);
      }
    });
  }
});
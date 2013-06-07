Bubbles = new Meteor.Collection('bubbles');

Meteor.methods({
	bubble: function(bubbleAttributes){
		var user = Meteor.user(),
			bubbleWithSameName = Bubbles.findOne({title:bubbleAttributes.title});

		// ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");
    
    // ensure the post has a title
    if (!bubbleAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a headline');

    // check that there are no previous bubbles with the same title
    if (bubbleAttributes.title && bubbleWithSameName) {
      throw new Meteor.Error(302, 
        'This bubble has already been created', 
        bubbleWithSameName._id);
    }

    var bubble = _.extend(_.pick(bubbleAttributes, 'title', 'description'), {
    	userId: user._id,
    	author: user.username,
    	submitted: new Date().getTime(),
      lastUpdated: new Date().getTime(),
      members: []
    }),

    bubbleId = Bubbles.insert(bubble);

    return bubbleId;
	}

	
})

getCurrentBubble = function() {
  return Bubbles.findOne(Session.get('currentBubbleId'));
}

getAllBubbles = function() {
  return bubbles.find();
}
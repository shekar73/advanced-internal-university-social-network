// Include the models
  var mongoose      =  require('mongoose')
    , Notification  =  mongoose.model('Notification')


// Define main functions
  // Create a notification
    exports.create = function (req, res, next) {
      var bubble = req.bubble

      var notification = new Notification({
          subscriptions: bubble.subscriptions
        , description: 'testing notifications again' //req.description //TODO: assemble the descriptions for the notifications somewhere
        , creator: req.user.id
        , bubble: bubble.id
      })

      console.log(bubble.subscriptions)  // TESTING

      notification.save(function(err){
        if (err) {
          console.log("error creating notification: " + err)
        } else {
          next()
        }
      })
    }









// Old posts.js functions. TODO: Delete these when finished writing notifications controller
  // View a list of posts in a bubble
    exports.list = function(req, res) {
      res.render('posts/'+req.view_list, {
          rendered_sidebar: req.rendered_sidebar
        , bubble_section: req.bubble_section
        , title: req.bubble.name
        , bubble: req.bubble
      })
    }


  // View a post
    exports.show = function(req, res) {
      res.render('posts/' + req.view_post, {
          change_post_image: req.change_post_image
        , rendered_sidebar: req.rendered_sidebar
        , bubble_section: req.bubble_section
        , format_date_bottom_count: 0
        , format_date_top_count: 0
        , comments: req.comments
        , title: req.post.name
        , bubble: req.bubble
        , post: req.post
      })
    }

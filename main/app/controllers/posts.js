// Include the models
  var mongoose  =  require('mongoose')
    , Bubble    =  mongoose.model('Bubble')
    , Event     =  mongoose.model('Event')
    , Deal      =  mongoose.model('Deal')
    , Talk      =  mongoose.model('Talk')
    , _         =  require('underscore')


// Define main functions
  // Redirect a user to another section of a bubble  --  TODO move this function to the bubbles.js controller
    exports.redirect = function(req, res) {
      var bubble = req.bubble

      if (bubble.num_events > 0) {
        res.redirect('/bubbles/'+bubble._id+'/event')
      } else if (bubble.num_deals > 0) {
        res.redirect('/bubbles/'+bubble._id+'/deal')
      } else if (bubble.num_talks > 0) {
        res.redirect('/bubbles/'+bubble._id+'/talk')
      } else {
        res.redirect('/bubbles/'+bubble._id+'/event')
      }
    }


  // View a list of posts in a bubble
    exports.list = function(req, res) {
      // Initialize bubble and post parameters
        var bubble_section  =  req.bubble_section
        var bubble          =  req.bubble

      // Render the view
        res.render(bubble_section+'s/new', {bubble: req.bubble }, function(err, new_post) {
          res.render('bubbles/list', {
              rendered_sidebar: req.rendered_sidebar
            , bubble_section: bubble_section
            , title: req.bubble.name
            , bubble: req.bubble
            , new_post: new_post
          })
        })
    }


  // View a subset of a list of posts in a bubble
    exports.list_pagelet = function(req, res) {
      // Define the bubble parameters
        var bubble_section  =  req.bubble_section
        var skip            =  req.params.skip
        var bubble          =  req.bubble

      // Initialize query parameters
        var query_parameters_find      =  req.query_parameters_find
        var query_parameters_sort      =  req.query_parameters_sort
        query_parameters_find.bubbles  =  req.bubble._id
        Post                           =  req.Post
 
      // Find some posts the current bubble has
        Post
          .find(query_parameters_find)
          .sort(query_parameters_sort)
          .limit(20)
          .skip(skip)
          .exec(function (err, posts) {
            // Render the view
              res.render('bubbles/list_pagelet', {
                  bubble_section: bubble_section
                , format_date_bottom_count: skip
                , format_date_top_count: skip
                , bubble: bubble
                , posts: posts
              })
           })
    }


  // Create a post
    exports.create = function (req, res) {
      var bubble = req.bubble
      Post = req.Post

      bubble.save(function (err) {
        var post = new Post(req.body)
        post.bubbles.addToSet(bubble._id)
        post.creator = req.user._id

        post.save(function(err){
          if (err) {
            console.log("error creating post: " + err)
          } else {
            res.redirect('/bubbles/'+bubble._id+'/'+req.post_type+'/view/'+post._id)
          }
        })

      })
    }


  // View a post
    exports.show = function(req, res) {
      var post_type = req.bubble_section
      var bubble    = req.bubble
      var post      = req.post
       
      res.render('includes/post_description', {
        post: post
      }, function(err, post_description) {
        res.render('includes/post_widget', {
            format_date_bottom_count: 0
          , bubble_section: post_type
          , format_date_top_count: 0
          , bubble: bubble
          , post: post
        }, function(err, post_widget) {
          res.render('bubbles/show_post', {
              change_post_image: req.change_post_image
            , rendered_sidebar: req.rendered_sidebar
            , post_description: post_description
            , bubble_section: post_type
            , post_widget: post_widget
            , comments: req.comments
            , title: post.name
            , bubble: bubble
            , post: post
          })
        })
      })
    }

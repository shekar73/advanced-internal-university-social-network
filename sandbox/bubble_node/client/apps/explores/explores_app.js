App.module('ExploresApp', function(ExploresApp, App, Backbone, Marionette, $, _){

  ExploresApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'explore': 'enterExplore',
      'explore/:id': 'showExplore'
    }
  });

  var API = {
    enterExplore: function(){
      App.vent.trigger("sidebar:change", "explore")
      App.navigate('explore/1', {trigger: true});
    },

    showExplore: function(id){
      new ExploresApp.List.Controller();
    }
  };

  App.addInitializer(function(){
    router = new ExploresApp.Router({controller: API});
  });

});
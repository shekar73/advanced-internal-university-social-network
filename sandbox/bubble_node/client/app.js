// Move into a dynamic js file with server-injected vars
$(function() {
	App.start() // pass vars in here
});

//Backbone-Marionette App goes here
window.App = (function(Backbone, Marionette, $, _){

	var App = new Backbone.Marionette.Application();

	App.addRegions({
		headerRegion: '#header_region',
		sidebarRegion: '#sidebar_region',
		mainRegion: '#main_region'
	});

	App.reqres.setHandler('default:region', function() {
		return App.mainRegion;
	});

	App.addInitializer(function() {
		App.module("HeaderApp").start()
		App.module("SidebarApp").start()
	});

	App.on("initialize:after", function(){
		App.startHistory()
	});

	return App;
})(Backbone, Marionette, $, _);
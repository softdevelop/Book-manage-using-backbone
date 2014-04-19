var app = app || {};
/*
//add routing
var BooksRouter = Backbone.Router.extend({
	routes: {
		"filter/:type": "urlFilter"
	},

	urlFilter: function (type) {
		directory.filterType = type;
		directory.trigger("change:filterType");
	}
});
*/

Backbone.emulateHTTP = true;
Backbone.emulateJSON = true;
$(function() {
	$( '#releaseDate' ).datepicker({ dateFormat: 'yy-mm-dd' });
	var directory = new app.LibraryView();
    Backbone.history.start();
});

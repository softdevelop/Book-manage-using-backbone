var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		id: '',
		coverImage: 'img/placeholder.png',
		title: 'No title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	},
	//url: 'api/books/query.php',
	url: function () {
		return "api/books/query.php?id=" + this.get("id");
		//return "api/contacts/insert.php?id=" + this.cid;
	},
});

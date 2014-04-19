var app = app || {};

app.Library = Backbone.Collection.extend({
	model: app.Book,
	url: 'api/books/query.php',
	//url: '/research/js/backbone/backbone-fundamentals-gh-pages/practicals/exercise-2/site/api/books',
	//url: 'api/books/',
	//localStorage: new Backbone.LocalStorage("todos-backbone"),
});

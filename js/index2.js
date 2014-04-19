Backbone.emulateHTTP = true;
Backbone.emulateJSON = true;

var Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.png',
		title: 'No title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	},
	//url: 'api/books/',
	url: function () {
		return "api/books/query.php?id=" + this.get("id");
		//return "api/contacts/insert.php?id=" + this.cid;
	},
	idAttribute: '_id'
});

var Library = Backbone.Collection.extend({
	model: Book,
	//url: '/research/js/backbone/backbone-fundamentals-gh-pages/practicals/exercise-2/site/api/books',
	//url: 'api/books/',
	//localStorage: new Backbone.LocalStorage("todos-backbone"),
});

var BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	//template: $( '#bookTemplate' ).html(),
    template: _.template($("#bookTemplate").html()),

	events: {
		'click .view': 'viewBook',
		'click .edit': 'editBook',
		'click .delete': 'deleteBook',
	},

	viewBook: function(e) {
		e.preventDefault();
		alert("view");
	},

	editBook: function(e) {
		e.preventDefault();
		alert("edit");
	},

	deleteBook: function() {
		//Delete model
		this.model.destroy();

		//Delete view
		this.remove();
	},

	render: function() {
		//tmpl is a function that takes a JSON object and returns html
		//var tmpl = _.template( this.template );
		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		//this.$el.html( tmpl( this.model.toJSON() ) );
		
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var LibraryView = Backbone.View.extend({
	el: $( '#books' ),

	initialize: function() {
		//console.log(books);
		this.collection = new Library(books);
		//this.collection.fetch();
		this.render();

		//this.listenTo( this.collection, 'add', this.renderBook );
		//this.listenTo( this.collection, 'reset', this.render );
        //this.collection.on("remove", this.removeContact, this);
	},

	events: {
		'click #add': 'addBook',
	},

	addBook: function( e ) {
		e.preventDefault();

		var formData = {};

		$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != "" )
			{
				if( el.id === 'keywords' ) {
					formData[ el.id ] = [];
					_.each( $( el ).val().split( ' ' ), function( keyword ) {
						formData[ el.id ].push({ 'keyword': keyword });
					});
				} else if( el.id === 'releaseDate' ) {
					//formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
					formData[ el.id ] = $( '#releaseDate' ).val();
				} else {
					formData[ el.id ] = $( el ).val();
				}
			}
		});

		this.collection.create( formData );
	},

	// render library by rendering each book in its collection
	render: function() {
        this.$el.find("div.bookContainer").remove();
		/*
		this.collection.each(function( item ) {
			this.renderBook( item );
		}, this );
		*/
		_.each(this.collection.models, function (item) {
			this.renderBooks(item);
		}, this);
	},

	// render a book by creating a BookView and appending the
	// element it renders to the library's element
	renderBook: function( item ) {
		var bookView = new BookView({
			model: item
		});
		this.$el.append( bookView.render().el );
	},
	renderBooks: function (item) {
		var bookView = new BookView({
			model: item
		});
		this.$el.append(bookView.render().el);
	},
});

$(function() {
	$( '#releaseDate' ).datepicker({ dateFormat: 'yy-mm-dd' });
	var directory = new LibraryView();
    Backbone.history.start();
});

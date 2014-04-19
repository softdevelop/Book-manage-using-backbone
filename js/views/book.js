var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: $( '#bookTemplate' ).html(),

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
		var tmpl = _.template( this.template );

		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html( tmpl( this.model.toJSON() ) );

		return this;
	}
});

/*
$(document).ready(function () {
	$('#thumbnail-selector').on("change", function () {
		uploadThumbnail(this);
	});
});

function uploadThumbnail(input) {
	$('#thumbnail-selector').attr("disabled", "disabled");
	if (input.files && input.files[0]) {
		var readerThumbnail = new FileReader();
		readerThumbnail.onload = function (e) {
			var data_type=input.files[0].type;
			var thumbnail="";

			if (data_type.indexOf("image") != -1) {
				thumbnail = '<img src="' + e.target.result + '" style="width:200px"/>';
			}
			
			$('.fileupload-preview.thumbnail').empty().prepend(thumbnail);  //.removeClass('hide')
		}

		readerThumbnail.readAsDataURL(input.files[0]);

		var file = input.files[0];
		var formdata = new FormData();
		formdata.append("thumbnail", file);
		formdata.append("_token", $('#upload input[name="_token"]').val());

		var ajax = new XMLHttpRequest();
		//ajax.upload.addEventListener("progress", progressHandler, false);
		ajax.addEventListener("load", completeHandlerThumbnail, false);
		ajax.addEventListener("error", errorHandlerThumbnail, false);
		ajax.open("POST", "{{ action('MediaController@uploadThumbnail') }} ");
		ajax.send(formdata);
	}
}

function completeHandlerThumbnail(event) {
	$('#thumbnail-selector').removeAttr("disabled");
	var response = JSON.parse(event.target.responseText);
	if (response.success) {
		var filename = response.file.replace('/uploads/thumbnail/', '');
		$('.control-group').removeClass('has-error').addClass('has-success');
		$('#upload input[name="thumbnail"]').val(filename);
		$('.thumbnailUpload').empty();
	} else {
		$('.control-group').removeClass('has-success').addClass('has-error');
		$('.thumbnailUpload').empty().html(response.message);
	}
}
function errorHandlerThumbnail(event) {
	console.log(event);
	var response = JSON.parse(event.target.responseText);
	alert(response.message);
	//$("status").innerHTML = "Upload Failed";
}
*/
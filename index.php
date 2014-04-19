<?php include_once "api/books/getallbook.php"; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8"/>
		<title>Backbone.js Library</title>
		<link rel="stylesheet" href="css/screen.css">
		<link rel="stylesheet" href="css/cupertino/jquery-ui-1.10.0.custom.css">
	</head>
	<body>
		<div id="books">
			<form id="addBook" action="#">
				<div>
					<label for="coverImage">CoverImage: </label><input id="coverImage" type="file" />
					<label for="title">Title: </label><input id="title" type="text" />
					<label for="author">Author: </label><input id="author" type="text" />
					<label for="releaseDate">Release date: </label><input id="releaseDate" type="text" />
					<label for="keywords">Keywords: </label><input id="keywords" type="text" />
					<button id="add">Add</button>
				</div>
			</form>
		</div>
		<script id="bookTemplate" type="text/template">
			<a class="view" href="#"><img src="<%= coverImage %>"/></a>
			<ul>
				<li><a class="view" href="#"><%= title %></a></li>
				<li><%= author %></li>
				<li><%= isNaN(releaseDate) ? releaseDate : $.format.date(new Date(Number(releaseDate)), 'MMMM yyyy') %></li>
				<li><% _.each( keywords, function( keyobj ) {%> <%= keyobj.keyword %><% } ); %></li>
			</ul>
			<button class="delete">Delete</button>
			<button class="edit">Edit</button>
		</script>
		<script src="js/jquery-1.9.0.js"></script>
		<script src="js/lib/jquery-ui-1.10.0.custom.js"></script>
		<script src="js/lib/jquery-dateFormat-1.0.js"></script>
		<script src="js/underscore.js"></script>
		<script src="js/backbone.js"></script>
		<!--script src="js/lib/backbone.localStorage-min.js"></script-->
        <script>
            var books = <?php echo getAllBooks() ?>;
        </script>
		<script src="js/index.js"></script>
	</body>
</html>

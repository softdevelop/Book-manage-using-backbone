<?php
include_once "config.php";
function getAllBooks() {
	$connect =  mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
	if(mysqli_connect_error())
	{
		echo "Failed to connect to MySQL". mysqli_connect_error();exit();
	}

	$query = "SELECT * FROM books";
	$results = mysqli_query($connect,$query);
	$arr = array();
	while($row = mysqli_fetch_array($results)) {
		$arr[] = array(
			'id'			=>	$row['id'],
			'title'			=>	$row['title'],
			'author'		=>	$row['author'],
			'releaseDate'	=>	$row['release_date'],
			'keywords'		=>  $row['keywords']
		);
	}
	return json_encode($arr);
}
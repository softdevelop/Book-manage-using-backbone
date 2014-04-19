<?php
include_once "config.php";
$connect =  mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
if(mysqli_connect_error())
{
	echo "Failed to connect to MySQL". mysqli_connect_error();exit();
}
$method = (isset($_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'])) ? $_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'] : $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id'])? $_GET['id'] : false;
if($method == 'DELETE') {
	$query = "DELETE FROM books WHERE id=".$id;
	$insert_result = mysqli_query($connect,$query);
	echo $insert_result;
} else if($method == 'PUT') {
	$data = json_decode($_POST['model']);
	
	if($data) {
		$title = $data->title;
		$author = $data->author;
		$releaseDate = $data->releaseDate;
		//$keywords = $data->keywords;
		$keywords = "";
		foreach ($data->keywords as $keyword) {
			$keywords .= $keyword->keyword . " ";
		}
		$action = "";
		if($id) {
			$query = "UPDATE books SET title='$title', author='$author', release_date='$releaseDate', keywords='$keywords' WHERE id = '$id'";
			$action = "UPDATE";
		} else {
			$query = "INSERT INTO books(title,author,release_date,keywords) VALUES ('$title','$author','$releaseDate','$keywords')";
			$action = "INSERT";
		}
		$insert_result = mysqli_query($connect,$query);
		echo $action.$insert_result;
	} else {
		echo "error";
	}
} else {
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
	echo json_encode($arr);
}
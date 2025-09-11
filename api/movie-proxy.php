<?php
session_start();

if (!isset($_SESSION['isLoggedIn']) || $_SESSION['isLoggedIn'] !== true) {
  http_response_code(403);
  die("Access denied");
}

$movie = $_GET['file'] ?? '';
$allowed = ['movie1.m3u8', 'series-s01e01.m3u8'];

if (in_array($movie, $allowed)) {
  header('Content-Type: application/vnd.apple.mpegurl');
  readfile('/path/to/movies/' . $movie);
}
?>

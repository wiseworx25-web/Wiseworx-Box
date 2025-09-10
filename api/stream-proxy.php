<?php
session_start();
if (!isset($_SESSION['isLoggedIn']) || $_SESSION['isLoggedIn'] !== true) {
  http_response_code(403);
  die("Access denied");
}

$stream = $_GET['file'] ?? '';
$allowed = ['sabc.m3u8', 'movie1.m3u8'];

if (in_array($stream, $allowed)) {
  header('Content-Type: application/vnd.apple.mpegurl');
  readfile('/path/to/streams/' . $stream);
}
?>

<?php

$servername = 'localhost';
$dbname = 'memory_db';
$username = 'memory_db';
$password = 'oclock2021';

// Create connection
$mysqli = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($mysqli -> connect_error) {
    die("Connection failed: " . $mysqli ->connect_error);
}

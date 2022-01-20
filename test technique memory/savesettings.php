<?php

include('config/dbconnect.php'); // on insère la connexion à la base
$dbconnecttwo = $mysqli; //

$user_score = $dbconnecttwo  -> real_escape_string($_POST['user_score']);

$sql = "INSERT INTO mdb_users (user_score,user,date)
VALUES ('$user_score','current user', CURDATE()) ON DUPLICATE KEY UPDATE    
date=CURDATE()"; // Requête d'insertion dans la base

if ($dbconnecttwo -> query($sql) === TRUE) {
    echo "Page saved!";
} else {
    echo "Error: " . $sql . "<br>" . $dbconnecttwo -> error;
}
$dbconnecttwo -> close(); // On ferme la connexion à la base
?>
<?php

include('config/dbconnect.php'); // on insère la connexion à la base
$dbconnectone = $mysqli;

// fetch query
    function fetch_data(){
        global $dbconnectone;
        $query= $dbconnectone->query('SELECT * FROM mdb_users ORDER BY user_score DESC LIMIT 5'); // Requête de sélection des 5 1ers scores dans la base
                
            if($query){
                $row= $query->fetch_all(MYSQLI_ASSOC);
            
                return $row;  
            }else{
                $dbconnectone -> close();  // On ferme la connexion à la base
            }
    }

    $fetchData= fetch_data();
    show_data($fetchData);

    /** Function d'affichage de la data **/

    function show_data($fetchData){
        echo '<ul>';
            if(count($fetchData) > 0){
                foreach($fetchData as $data){ 
                    echo "<li>".$data['user_score']."</li>";  
                }
            }else{    
                echo "No Data Found"; 
            }
        echo "</ul>";
    }

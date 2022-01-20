<?php

include('config/dbconnect.php');
$dbconnectone = $mysqli;

// fetch query
    function fetch_data(){
        global $dbconnectone;
        $query= $dbconnectone->query('SELECT * FROM mdb_users ORDER BY user_score DESC LIMIT 5');
                
            if($query){
                $row= $query->fetch_all(MYSQLI_ASSOC);
            
                return $row;  
            }else{
                $dbconnectone -> close(); 
            }
    }

    $fetchData= fetch_data();
    show_data($fetchData);

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

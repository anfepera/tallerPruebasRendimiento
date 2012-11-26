<?php
//show_source('insertar.php');

$connection = mysql_connect("localhost", "root", "anfepera") or die("Connection Failed" . mysql_error());
mysql_select_db("anfepera", $connection) or die("Error loading the DataBase" . mysql_error());


$cadena = "DELETE FROM registro_viajes;";
$rs  = mysql_query($cadena); //      



    $cadena2="error";
    
  
    
    
      if(mysql_affected_rows()>1)
    {
       $cadena2="ok" ;
    }
    echo json_encode($cadena2);

?>



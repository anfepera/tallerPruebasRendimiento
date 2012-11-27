
<?php


$connection = mysql_connect("localhost", "root", "anfepera") or die("Connection Failed" . mysql_error());
mysql_select_db("anfepera", $connection) or die("Error loading the DataBase" . mysql_error());






    for ($i=1;$i<=15000;$i++)
    {
       
        $cadena = "INSERT INTO registro_viajes(hora,minutos,nombreEstacionOrigen,nombreEstacionDestino) values  ('23:00',60,'san pascual','torre de cali');";
          
        $rs  = mysql_query($cadena); //       
       
    }
     $cadena="error";
 
    if(mysql_affected_rows()==1)
    {
         $cadena="ok";
    }
    
    echo json_encode($cadena);
        

?>



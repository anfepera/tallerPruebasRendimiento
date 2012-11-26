
<?php
$valor= $_POST['valor'];
$respuesta = "error";

$consulta = "SELECT * FROM registro_viajes where documentoPasajero= '$valor'";
$mysql_host = "localhost";
$mysql_database = "anfepera";
$mysql_user = "root";
$mysql_password ="anfepera";

$link = mysql_connect($mysql_host, $mysql_user, $mysql_password);
$bool = mysql_select_db($mysql_database, $link);
if ($bool === False) {

    print "can't find $mysql_database";
}

$resultado = mysql_query($consulta, $link) or die('No pudo conectarse:' . mysql_error());





$registros = array();

while ($fila = mysql_fetch_object($resultado)) {
$registros[] = array(
        'documentoPasajero' => $fila->documentoPasajero,
        'fecha' => $fila->fecha,
        'hora' => $fila->hora,
        'minutos' => $fila->minutos,
        'nombreEstacionOrigen' => $fila->nombreEstacionOrigen,
        'nombreEstacionDestino' => $fila->nombreEstacionDestino,
    );
}

if(sizeof($registros)>0)
{
	$respuesta= json_encode($registros);
}

echo json_encode($respuesta);

?>
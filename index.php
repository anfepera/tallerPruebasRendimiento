<!DOCTYPE html>
<html>
    <head>
        <script type='text/javascript' src='jquery-1.8.2.min.js'></script>
        <script type='text/javascript' src='Ajax.js'></script>
        
        <link href="estilo.css" rel="stylesheet" type="text/css">

        
    </script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <form>
            <div style="margin-left: 35%;margin-top: 7%;">

                <input type="button" value="Consultar" onclick="obtenerRegistros()"/>
                <input type="button" value="Eliminar" onclick="eliminar()"/>
                <input type="button" value="Insertar" onclick="insertar()"/>
                <label id="respuesta" style="margin-left: 10%; font-size: 20px; color: green">  </label>
            </div>
            <div id="resultados" class="resultados">
                <table  id="miTabla" border="0" cellpadding="0" cellspacing="0"  width="80%"class="scrollTable">
                    <thead class="fixedHeader">
                        <tr>
                            <th>Documento</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Minutos</th>
                            <th>Estacion Origen</th>
                            <th>Estacion Destino</th>
                        </tr>
                    </thead>
                    <tbody id="contenidoTabla" class="scrollContent">
                    </tbody>


                </table>

            </div>


        </form>

    </body>
</html>

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var $cadena="";

function insertar()
{
    document.getElementById('respuesta').textContent = 'Insertando  datos ....';
    
    
               
    var x;
    x=$(document);
    x.ready(enviar);
    function enviar()
    {
        $.ajax({
            async:true,
            type: "POST",
            dataType: "html",
            contentType: "application/x-www-form-urlencoded",
            url:"insertar.php",
                   
            beforeSend:inicioEnvio,
            success:llegada,
            timeout:20000,
            error:problemas
        }); 
        return false;
    }
    function inicioEnvio()
    {
                    
                    
    }
    function llegada(datos)
    {
        //        alert(datos);
        if(eval(datos)=="error")
        {
            //            alert('Error al insertar datos'); 
            document.getElementById('respuesta').textContent = 'Error al insertar datos';
                    
        }
                   
        else if (eval(datos)=="ok") 
        {
            //            alert('Datos Insertados  correctamente');
            document.getElementById('respuesta').textContent = 'Datos Insertados  correctamente';
        }
        else{
                
            alert('NO se');
        }
           
              
           
           
        
            
   
                    
    }
    function problemas()
    {
        document.getElementById('respuesta').textContent = 'Problemas';
    }
                
               
}


function eliminar()
{
    document.getElementById('respuesta').textContent = 'Eliminando datos ....';
    
    
               
    var x;
    x=$(document);
    x.ready(enviar);
    function enviar()
    {
        $.ajax({
            async:true,
            type: "POST",
            dataType: "html",
            contentType: "application/x-www-form-urlencoded",
            url:"eliminar.php",
                        
            beforeSend:inicioEnvio,
            success:llegada,
            timeout:10000,
            error:problemas
        }); 
        return false;
    }
    function inicioEnvio()
    {
                    
                    
    }
    function llegada(datos)
    {
                  
        if(eval(datos)=="ok")
        {
          
            document.getElementById('respuesta').textContent = 'Se eliminaron los registros de la tabla registro_viajes';
        }
        else if(eval(datos)=="error")
        {
                
            document.getElementById('respuesta').textContent = 'Error al eliminar';
        }
        else{
               
            alert('REsultado desconocido');
        }
    //          
           
        
            
   
                    
    }
    function problemas()
    {
        document.getElementById('respuesta').textContent = 'Problemas';
    }
                
               
}





function consultar(valor)
{
    
    document.getElementById('respuesta').textContent = 'cargando datos ....';    
    var x;
    x=$(document);
    x.ready(enviar);
    function enviar()
    {
        $.ajax({
            async:true,
            type: "POST",
            dataType: "html",
            contentType: "application/x-www-form-urlencoded",
            url:"consultar.php",
            data:"valor="+valor,            
            beforeSend:inicioEnvio,
            success:llegada,
            timeout:30000,
            error:problemas
        }); 
        return false;
    }
    function inicioEnvio()
    {
        
                    
    }
    function llegada(datos)
    {
//        alert(datos);
       
        var dataJson = eval(datos);
        alert(dataJson);
        //        alert('lo que llego de la bd '+dataJson[0].documentoPasajero +'  '+dataJson[0].nombreEstacionOrigen);
        if(dataJson=="error")
        {
             
            document.getElementById('respuesta').textContent = 'No se encontraron registros en la BD';
                
        }
        else if(eval(datos)=="")
        {
            document.getElementById('respuesta').textContent = 'No se encontraron registros en la BD';
        }
        
        
        else {
        
            var dataJson = eval(datos);
   
            $cadena +="<tr>"; 
            $cadena +="<td>"+dataJson[0].documentoPasajero+"</td>";
            $cadena +="<td>"+dataJson[0].fecha+"</td>";
            $cadena +="<td>"+dataJson[0].hora+"</td>";
            $cadena +="<td>"+dataJson[0].minutos+"</td>";
            $cadena +="<td>"+dataJson[0].nombreEstacionOrigen+"</td>";
            $cadena +="<td>"+dataJson[0].nombreEstacionDestino+"</td>";
            $cadena += "</tr>";
            //         
            $("#miTabla").append($cadena);
            $cadena=""; 
        }
             
            
    //                    document.getElementById("miTabla").innerHTML=cadena;  
    //                    $("#miTabla").append(cadena);
                    
    }
    function problemas()
    {
        document.getElementById('respuesta').textContent = 'Problemas';
    }
                
               
}




function obtenerRegistros()
{
    //    
    //    document.getElementById('contenidoTabla').innerHTML='';

   
    for( i=1;i<=10;i++)
    {
        consultar(i);
            
            
    }
    document.getElementById('respuesta').textContent = 'Datos cargados correctamente';
}
            


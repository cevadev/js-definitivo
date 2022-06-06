<?php
// echo "Hola respuesta desde el servidor";
// var_dump -> permite imprimir objetos
// $_FILES -> crear un array con la info del archivo que se sube
// var_dump($_FILES);

// la accion de subir el archivo al servidor se ejecutara cuando la variable $_FILES exista
// isset() -> funcion que evalua si una variale existe, le pasamos el argumento file que corresponde al nombre
// de la propiedad que agregamos al objeto formData
if(isset($_FILES["file"])){
    // variables php para almacenar informacion como: name, error, temporal_name
    $name = $_FILES["file"]["name"]; // accedemos a la propiedad name del objeto $_FILES
    $file = $_FILES["file"]["tmp.name"];
    $error = $_FILES["file"]["error"];
    $destination = "./files-uploaded/$name";

    // funcion php que retorna un boolean
    $upload = move_uploaded_file($file, $destination);

    // validamos si se realizo exitosamente la funcion move...
    if($upload){
        $res = array(
            "err" => false,
            "status" => http_response_code(200),
            "statusText" => "Archivo $name subido con exito",
        );
    }
    else{
        $res = array(
            "err" => true,
            "status" => http_response_code(400),
            "statusText" => "Error al subir el archivo $name",
        );
    }

    // imprimimos la respuesta en formato json
    echo json_encode($res);
}
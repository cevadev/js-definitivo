<?php
/**cuando enviamos datos por medio de POST se crea la variable $_POST, precisamente desde el html
 * con el metodo fetch() la peticion que hacemos es mediante POST
 */
if(isset($_POST)){
    error_reporting(0);
    /** almacenamos en variables los datos del formulario */
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];

    $to = "ceva_19@hotmail.com";
    // HTTP_POST contiene el dominio de la pagina desde la que se ejecuta la pagina
    $domain = $_SERVER["HTTP_HOST"];
    $subject_mail = "Contacto desde el formulario del sitio $domain";
    $message = "
        <p>
            Datos enviados desde el formulario del sitio <b>$domain</b>
        </p>
        <ul>
            <li>Nombre: <b>$name</b></li>
            <li>Email: <b>$email</b></li>
            <li>Subject: $subject</li>
            <li>Comentarios: $comments</li>
        </ul>
    ";

    $headers = "MIME-Version: 1.0\r\n"."Content-type:text/html; charset=uft-8\r\n"."From: Envio automatico No Responder 
                <no-reply@$domain>";

    // Funcion php envia un email
    $send_email = mail($to, $subject_mail, $message, $headers);

    if($send_email){
        $res = [
            "err" => false,
            "message" => "Tus datos han sido enviados"
        ];
    }
    else{
        $res = [
            "err" => true,
            "message" => "Error al enviar tus datos, intenta nuevamente"
        ];
    }
    /** habilitamos los cors en el servidor */
    header("Access-Control-Allow-Origin:*"); /*permite recibir peticiones de cualquier dominio */
    /** especificamos que las peticiones provengan de un solo dominio */
    /* header("Access-Control-Allow-Origin:https://johnmircha.com"); */
    header("Content-type: application/json");
    echo json_encode($res);
    exit;
}
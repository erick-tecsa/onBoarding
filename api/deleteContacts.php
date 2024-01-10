<?php

    header("Content-type: text/html; charset=utf-8");
    date_default_timezone_set('America/Sao_Paulo');

    $mysql_host = "localhost";
    $mysql_user = "root";
    $mysql_pass = "root";
    $mysql_data = "contato";
    $mysql_port = 3306;

    function sql($a) {
        global $mysql_host;
        global $mysql_user;
        global $mysql_pass;
        global $mysql_data;
        global $mysql_port;
        
        $con = mysqli_connect($mysql_host, $mysql_user, $mysql_pass, $mysql_data, $mysql_port);
        mysqli_query($con,"SET NAMES 'utf8'");
        // mysqli_query($con,"SET time_zone='America/Sao_Paulo'");
    
        $retorno = mysqli_query($con,$a);
        
        return $retorno;
        mysqli_close($con);
    }

    $rawData = file_get_contents("php://input");
    $decodedJson = json_decode($rawData, true);
    $id = $decodedJson['id'];

    $dataLog = sql("DELETE FROM contatos WHERE id = $id");

    echo $dataLog;
?>
<?php
header("Content-Type:application/json");
include('prac.php');
if(!empty($_GET['no'])){
    $number=$_GET['no'];
    $country= values($number);
    if(empty($country)){
        response(200,"data not found",NULL);
    }else{
        response(200,"data found",$country);
    }
}else{
    response(200,"invalid details",NULL);
}

function response($status,$status_message,$data){
    header("HTTP/1.1 $status $status_message");
    $response['status']=$status;
    $response['status_message']=$status_message;
    $response['data']=$data;
    $json_data=json_encode($response);
    echo $json_data;
}
?>
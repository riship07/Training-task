<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $r =array(23,45,34,78,13,56);
    function maxim($r){
         $l=count($r);
         $m=$r[0];
         for($i=0;$i<$l;$i++){
             
             if($r[$i+1]>$m){
                $m=$r[$i+1]; 
             }
         }
         echo $m;
    }
  maxim($r)  
?>
</body>
</html>
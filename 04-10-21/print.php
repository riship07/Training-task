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
    $txt1 = "Learn PHP";
    $txt2 = "W3Schools.com";
    $x = 10;
    $y = 40;
   
   //$r = echo "hi"; //this give me error because echo have no any return type but print have.
   //echo $p
    $r = print $x + $y; echo "<br>";
    echo $r;   // print 1 because print has only one return value 1.
?> 
</body>
</html>
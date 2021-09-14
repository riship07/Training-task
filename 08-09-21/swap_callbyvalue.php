<?php
$a = 15;
$b = 27;


function swap($a,$b){
 $temp = $a;
 $a = $b;
 $b = $temp;                   // if we want swaping of a and b limited to function then call by value is efficient.
 echo $a;
 echo $b;
} 
swap($a,$b);
?>
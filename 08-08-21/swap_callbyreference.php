<?php
$a = 15;
$b = 27;


function swap(&$a,&$b){
 $temp = $a;
 $a = $b;
 $b = $temp;                   // if we want swaping of a and b not limited to function then call by reference is efficient.
 
} 
swap($a,$b);
echo $a;
echo $b;
?>
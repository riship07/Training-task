<?php
function largest($x, $y, $z=500) {
  $max = $x;

  if ($x >= $y && $x >= $z)
    $max = $x;
  if ($y >= $x && $y >= $z)
    $max = $y;
  if ($z >= $x && $z >= $y)
    $max = $z;
  
  echo "Largest number is: $max\n";
}

largest(100, 50, 25);
largest(50, 50);
?>
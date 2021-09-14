<?php
  class main{
       function reverce(&$no){   //call by reference
        $length= strlen((string)$no);
        $rev =0;
        for($i=0;$i<$length;$i++){
          $a=$no%10;
          $rev=($rev*10)+$a;
          $no=$no/10;
        }
        return $rev;
            
     }
  }
    $no = 345;
    $obj = new main();
    echo $obj->reverce($no);
    echo "after function called value of no changed to";
    echo $no;
      
  ?>
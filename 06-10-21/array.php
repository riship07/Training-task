<?php
   $arr = array(23,45,6,7,89);

   function update($arr){
       for($i=0;$i<count($arr);$i++){
           $arr[$i]+=10;
       }
       echo $arr;
   }

   update($arr);
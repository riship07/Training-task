<?php
   class Rishi {
      private $num;
      public function __construct($no){
         $this -> num = $no;
      }
      public function calc(){
         return $this -> num;
      }
   }
   class patel implements Rishi {
      private $no1;
      private $no2;
      public function __construct($num1, $num2){
         $this ->no1  = $num1;
         $this ->no2 = $num2;
      }
      public function calc(){
         return $this -> no1 * $this -> no2;
      }
   }
   $mycirc = new Rishi(3);
   $myrect = new Patel(3,4);
   echo $mycirc->calc();
   echo $myrect->calc();
?>
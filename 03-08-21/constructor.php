<?php
   class Rishi{
      public function __construct(){
         echo "I am in parent"."\n";
      }
   }
   class patel extends Rishi{
      public function __construct(){
         parent::__construct();
         echo "I am in child";
      }
   }
$obj = new patel();
?>
in php,
we use parent::__construct() to initialize parent constructor in child class .<?php
   class grandpa{
      public function __construct(){
         echo "I am in Tutorials Point"."\n";
      }
   }
   class papa extends grandpa{
      public function __construct(){
         parent::__construct();
         echo "I am not in Tutorials Point";
      }
   }
$obj = new papa();
?>
if child class have no any constructor and parent class is not private then it automatically initialize parent constructor 
whenever we create a object of child class.
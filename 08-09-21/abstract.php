<?php
abstract class rishi {
 
  abstract function main($name);
  abstract function patel();
  public function bharat(){
      echo "bharat";
  }
  
}

class Child extends rishi {
  public function main($name) {
   echo $name;
  }
  public function patel(){
   echo "patel";
  }
}
$obj = new Child();
echo $obj->main("rishi");
echo $obj->patel();
echo $obj->bharat();

?>
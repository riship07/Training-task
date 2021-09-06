<?php
class rishi
{
  protected $x = 1000 ; 
  protected $y = 100 ;
  private function sum()
  {
      echo $this->x + $this->y;
  }
  function div()
  {
   echo $this->x / $this->y ;

  }
}	
class child extends rishi
{
   function sub()
   {
      echo $this->x - $this->y;
   }
}

$obj = new child();
$obj->div();
$obj->sub();

$obj->sum(); 
// give fatal error 
?>

<?php
class main {
    public $color;
    public $price;
    function car($color,$price){
       $clr = $color;
       $this->prc = $price;
       echo ($clr.$this->prc);
    }   
  }

  $maruti = new main();
  $maruti -> car("white",4000);
  
  $XUV = new main();
  $XUV -> car("sblue",7000);
?> 
    
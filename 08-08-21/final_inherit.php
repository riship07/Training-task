<?php
  final class BaseClass{
     function sum($no1,$no2){
         $sum1 = $no1+$no2;
         echo $sum1;
         }
      }
   class ChildClass extends BaseClass{
      function sum($no1,$no2){                    
                                            //Class ChildClass may not inherit from final class (BaseClass)
         $mult=$no1*$no2;
         echo $mult;
         }
      }
   $obj= new ChildClass();
   $obj->sum(5,10);
?>
<?php
   class BaseClass{
      final function sum($no1,$no2){
         $sum1 = $no1+$no2;
         echo $sum1;
         }
      }
   class ChildClass extends BaseClass{
      function sum($no1,$no2){                    
                                            //   it will give PHP Fatal error: Cannot override final method of BaseClass::function_name()
         $mult=$no1*$no2;
         echo $mult;
         }
      }
   $obj= new ChildClass();
   $obj->sum(5,10);
?>
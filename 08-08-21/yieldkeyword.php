<?php
 $name1 = "rishi";
 $surname1 = "patel";
 class fullname{
   
   function main($name,$surname){
       $this->fname=$name;
       $this->lname=$surname;
       yield $this->fname;
       yield $this->lname;
   }
   function main1($name,$surname){
    $this->fname=$name;
    $this->lname=$surname;
    return $this->fname; // we can return value only once.
 }
}
 $obj = new fullname();
 $a=$obj->main($name1,$surname1);
 echo $obj->main1($name1,$surname1);
 foreach($a as $b){
     echo $b;
 }
?>

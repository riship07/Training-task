
<?php
interface main{
  public function rishi();
}
interface main1{
  public function rishi(); 
}

class patel implements main,main1 {
  public function rishi() {          //only one function of any interface will execute.
    echo "called once";
  }
}

$obj = new patel();
$obj->rishi();
?>
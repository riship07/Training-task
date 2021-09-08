
<?php
interface ParentInterface{
    public function rishi();
}

// interface main implements ParentInterface{
//     public function patel();                      we can not impliments interfaces because in interfaces there is nothing to be implement
                                                    //  we can use extend 
// }
interface main extends ParentInterface{
    public function patel();
}
class patel1 implements main{
  public function rishi() {        
      echo "rishi";
  }
  public function patel(){
      echo "patel";
  }
}

$obj = new patel1();
$obj->rishi();
$obj->patel();
?>
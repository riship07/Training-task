
<?php
class main {
    static function name() {
      return "RISHI";
    }
  }
  
class child extends main {
    public $Name;
    public function __construct() {
      $this->Name = parent::name();
    }
  }
  
  $obj = new child();
  echo $obj->Name;

  function add() {
    static $no = 0;
    $no++;
    return $no;
  }
  
  echo add();
  echo add(); 
  echo add();
?>
  

<?php
class Base {
    function __construct() {
        echo "In BaseClass constructor";
    }
}

class Sub extends Base {
    function main(){
         echo "after base constructor";
    }
}
$obj = new Sub();
$obj->main();

?>

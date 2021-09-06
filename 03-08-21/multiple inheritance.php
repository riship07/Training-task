<?php


class rishi {
 function f1() {
	echo "Hello";
}
}


trait patel {
 function f2() {
	echo "welcome to";
}
}

class example extends rishi {
use patel;
 function result() {
	echo "PHP";
}
}

$test = new example();
$test->f1();
$test->f2();
$test->result();
?>

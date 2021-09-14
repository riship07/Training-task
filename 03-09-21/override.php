<?php

class R {
		function rishi() {
		echo "Parent";
	}
}
class P extends R {
	function rishi() {
		echo "Child";
	}
}
$p = new R;
$c= new P;
$p->rishi();

$c->rishi();
?>

<?php

class rishi
{
	
	Public $name;
	function __construct()
	{
		$this->name = "rishi";
			}	
	function details()
	{
		echo $this->name." : ";
		echo "Your name".$this->name."\n";
	}
}

$obj= new rishi();
$obj->details();
	


?>
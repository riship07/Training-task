<?php

class rishi
{
	
	Public $name;
	function __construct($name)
	{
		$this->name =$name;
        echo "const".$this->name;
			}	
	function details()
	{
		echo $this->name." : ";
		echo "Your name".$this->name."\n";
	}
}

$obj= new rishi("Rishi");
$obj->details();
	


?>

<?php

class rishi
{
	
	Public $name;
    function __construct1()
    {
        echo "DEFAULT";
    }
	function __construct2($name)
	{
        echo "params";
		$this->name=$name;
	}	
	function details()
	{
		echo $this->name." : ";
		echo "Your name".$this->name."\n";
	}
}
	
$obj= new rishi("Rishi");
$obj->details();
$obj1=new rishi();	


?>

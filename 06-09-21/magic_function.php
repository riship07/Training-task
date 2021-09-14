<?php
class rishi{
    private $name;
    private $sur;
 
    public function __construct($fname, $lname) 
    {
        $this->name = $fname;
        $this->sur = $lname;
    }
    public function __set($name, $value) 
    {
        echo "properties name=".$name."and value".$value."<br>" ;
    }
    public function __get($name) 
    {
        if($name === "patel")
        {
            return $this->name;
        }
        else{
            echo "error <br>";
        }
    }
    public function __toString()
    {
        return 'Student name: '.$this->name. 'Student surname: '.$this->sur."<br>";
    }
    public function __call($methodName, $arguments) 
    {
        echo $methodName;
        echo $arguments;
    }
    public function __isset($name) 
    {
        return isset($this->$name);
    }
}
 
$obj= new rishi('rishi', 'patel');
$obj->ff = 5000;
echo $obj->patel;
echo $obj;
$obj->hii("welcome");

?>
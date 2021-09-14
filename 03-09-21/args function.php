
<?php
function rishi()
{   
    $sum = 0;
    foreach (func_get_args() as $args){
        $sum=$sum+$args;
    }
    echo $sum;
}

rishi(1, 2, 3);
rishi(3,4);
?>

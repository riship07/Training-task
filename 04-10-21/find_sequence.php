<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function sequence($arr)
    {
        $count = count($arr) - 2;
        $result=[];
        for ($i = 0; $i < $count; $i++) 
        {
            if ($arr[$i] + $arr[$i+1] + $arr[$i+2] == 0)
            {
                array_push($result, "{$arr[$i]} + {$arr[$i+1]} + {$arr[$i+2]} = 0");
            }
        }
        return $result;
    }
    $num= array(-1,0,1,2,-1,-4);
    $r =sequence($num);
    print_r ($r);
   
?>
</body>
</html>
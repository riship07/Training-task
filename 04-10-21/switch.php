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
      $age=readline("Enter Age");
      switch ($age) {
          case $age<20:
              echo "Teenage";
              break;
          case $age>20 && $age<45:
              echo "Young";
              break;
          case $age>45:
              echo "end is near";
              break;
      }
      ?>
</body>
</html>

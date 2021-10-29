<?php
  function values($no){
      $rp=array(
          678=>"brazil",
          567=>"india",
          123=>"spain",
          809=>"japan",
          125=>"china",
          900=>"korea"
      );
      foreach($rp as $key=>$value){
          if($key == $no){
              return $value;
              break;
          }
      }
  }
  
  ?>
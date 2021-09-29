interface bharat {
    obj: Shape;
    x?: number;
    y?: number;
  }
   
  function rishi(opts: bharat) {
      console.log(obj);
      console.log(opts.x);
      console.log(opts.y);
      
      
      
  }
  type Shape={
     r:number
  }
  var obj:Shape = { r:60}
 
  rishi({ obj});
  rishi({ obj, x: 100 });
  rishi({ obj, y: 100 });
  rishi({ obj, x: 100, y: 100 });
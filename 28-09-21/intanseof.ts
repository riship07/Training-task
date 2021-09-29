function rishi(x: Date | number) {
    if (x instanceof Date) {   
     
      console.log(x.toLocaleDateString());
    } 
    else {
        console.log(x);
        
    }
  }
  var today=new Date()
  rishi(today)
  rishi(4000)
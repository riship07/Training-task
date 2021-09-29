interface rishi0 {
    color: string;
  }
   
  interface rishi9 {
    radius: number;
  }
   
  interface bharat7 extends rishi0, rishi9 {
     str: string;
  }
   
  const cc: bharat7 = {
    color: "red",
    radius: 42,
    str: "welcomes"
  };

  console.log(cc.color);
  console.log(cc.radius*2*3.14);
  console.log(cc.str);
  
  
  
interface patel {
    id: number;
  }
  function main(x: patel | "auto") {
    
  }
  main({ id: 100 });
  main("auto");       //literal type  : "auto"
  main("automatic");  //gives error
type DescribableFunction = {
    description: string;
    fn(someArg: number): boolean;
  };
  function doSomething(newObj: DescribableFunction) {
    console.log(newObj.description + " returned " + fn(-6));
  }
 
        
  
var fn=(x:number):boolean=>{ return x>0; }
var newObj: DescribableFunction = {
      description: "Hello",
      fn
  }

  doSomething(newObj);
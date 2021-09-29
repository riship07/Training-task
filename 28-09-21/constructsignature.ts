type SomeConstructor = {
    new (s: string): any;          //constructor type
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }

  class main{
      constructor(t:string){
          console.log("hiiiiii");
          
      }
  }
  var i = fn(main)
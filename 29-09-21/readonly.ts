interface one {
    name: string;
    age: number;
  }
   
interface two {
    readonly name: string;
    readonly age: number;
  }
   
  var a: one = {
    name: "Person McPersonface",
    age: 42,
  };
   

  var b: two = a;
   
  console.log(b.age); 
  a.age++;
  // b.age++;      this give me a error because it is readonly propertie.
  console.log(b.age);
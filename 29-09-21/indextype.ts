type Person = { age: number; name: string; ready: boolean };

type Age = Person["age"];   
var rpp:Age = 699;
console.log(rpp);

const MyArray = [
    { name: "rishi", age: "21" },
    { name: "bharat", age: 23 },
    { name: "ketan", age: 22 },
  ];
   
  type rishi7 = typeof MyArray[1];
  var rs:rishi7 = {          //rishi7 is of type {name:string,age:number}
      name:"sohil",
      age:24
  }      
  console.log(rs.name);
  
  
  
  type rp1 = typeof MyArray[0]["age"];  //rp1 is of type string.
  var rs1:rp1= "welcom";
  console.log(rs1);
  

  
       
  
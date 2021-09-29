interface Circle {
    kind: "Circle";
    radius: number;
  }
   
  interface Square {
    kind: "Square";
    Length: number;
  }

function getArea(shape:Circle | Square) {
  switch (shape.kind) {
    case "Circle":
      return Math.PI * shape.radius ** 2;
    case "Square":
      return shape.Length ** 2;
    default:
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
      console.log("hi");
      
  }
}

var obj:Square ={kind:"Square",Length:50}
var ri =getArea(obj)
console.log(ri);



var s = "hello";

var rp = typeof s;
console.log(rp);

function f() {
    return { x: 10, y: 3 };
  }
type P = ReturnType<typeof f>;   //here we can not direct assign ReturnType(f()) because
                                 //ReturnType expect type not value,
var bharat3:P={
    x:9,
    y:5
}

console.log(bharat3.y);

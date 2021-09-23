"use strict";
var a = 1000
var b:number = 2000
var c:string                    //in strict mode it give you this error because strictNullcheck
                                //strict.ts:9:20 - error TS2454: Variable 'c' is used before being assigne
                                //9 console.log(typeof(c))
                                //Found 1 error.
var r:number = a+b

console.log(r)
console.log(typeof(c))          //undefined







// var x :any= 3.14;       
// myFunction();

// function myFunction() {
//   "use strict";
//   var y = 3.14;   
// }
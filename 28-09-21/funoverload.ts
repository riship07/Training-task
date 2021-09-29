

// function add(a:string, b:string):string;

// function add(a:number, b:number):number;
// function add(a:any , b:any):any{    
// return a+b;
// }



// var r =add("Hello ", "Steve"); 
// var p =add(10, 20);
// console.log(r);
// console.log(p);
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);


 



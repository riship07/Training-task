type rishi2 = { [n: number]: string };

type A = keyof rishi2;     //A is of type number 

var bharat:A=900;

console.log(bharat);

type bharat1 = { [k: string]: boolean };  //here M is of type number|string because in javascript arr["0"] and arr[0] is same.

type M = keyof bharat1;
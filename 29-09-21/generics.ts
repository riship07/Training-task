

function get<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = get<number>([100, 200, 300]);
let myStrArr = get<string>(["Hello", "World"]);

myNumArr.push(400); 
myStrArr.push("Hello TypeScript"); 

console.log(myNumArr);
console.log(myStrArr);



//myNumArr.push("Hi");    give error beacause it is a number type array
//myStrArr.push(500);     give error beacause it is a string type array


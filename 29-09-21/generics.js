function get(items) {
    return new Array().concat(items);
}
var myNumArr = get([100, 200, 300]);
var myStrArr = get(["Hello", "World"]);
myNumArr.push(400);
myStrArr.push("Hello TypeScript");
console.log(myNumArr);
console.log(myStrArr);
//myNumArr.push("Hi");    give error beacause it is a number type array
//myStrArr.push(500);     give error beacause it is a string type array

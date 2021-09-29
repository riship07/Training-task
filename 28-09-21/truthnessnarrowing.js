function main(obj, obj1) {
    if (obj1) {
        return "The number is " + obj1 + " now!";
    }
    else if (obj) { //truthness narrowing
        return "there is no " + obj;
    }
    else {
        return "there is no number :(";
    }
}
var r = main(45);
console.log(r);
var h = main(76, 89);
console.log(h);

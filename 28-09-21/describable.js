function doSomething(newObj) {
    console.log(newObj.description + " returned " + fn(-6));
}
var fn = function (x) { return x > 0; };
var newObj = {
    description: "Hello",
    fn: fn
};
doSomething(newObj);

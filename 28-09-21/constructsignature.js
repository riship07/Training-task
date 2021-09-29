function fn(ctor) {
    return new ctor("hello");
}
var main = /** @class */ (function () {
    function main(t) {
        console.log("hiiiiii");
    }
    return main;
}());
var i = fn(main);

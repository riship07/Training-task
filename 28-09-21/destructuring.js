function main(_a) {
    var a = _a.a, b = _a.b;
    console.log(a + b);
}
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
sum({ a: 10, b: 20, c: 30 });
main({ a: 10, b: 20 });

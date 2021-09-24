function start(arg) {
    if (typeof arg === "string") {
        return commonCase(arg);
    }
    else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(",");
    }
    else if (typeof arg === "function") {
        return commonCase(arg());
    }
    else {
        return commonCase(arg.s);
    }
    function commonCase(s) {
        return s;
    }
}
var arr = ["20", "bottle"];
function exp() {
    return "hello world";
}
var obj = { s: "foo" };
var c = start("rishi");
var p = start(obj);
var r = start(arr);
var b = start(exp());
console.log(c);
console.log(r);
console.log(b);
console.log(p);

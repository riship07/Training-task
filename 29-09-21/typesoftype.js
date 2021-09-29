function area(s) {
    if (s.kind == "square") {
        return s.size * s.size;
    }
    else if (s.kind == "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind == "circle") {
        return 3.14 * s.radius * 2;
    }
    else {
        var _exhaustiveCheck = s;
        //Argument of type 'Circle' is not assignable to parameter of type 'never'.
    }
}
var square = {
    kind: "square",
    size: 200
};
var circle = {
    kind: "circle",
    radius: 56
};
console.log(area(square));
console.log(area(circle));

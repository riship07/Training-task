function getArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "Square":
            return Math.pow(shape.Length, 2);
        default:
            var exhaustiveCheck = shape;
            return exhaustiveCheck;
            console.log("hi");
    }
}
var obj = { kind: "Square", Length: 50 };
var ri = getArea(obj);
console.log(ri);

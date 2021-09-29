interface Square {
    kind: "square";
    size: number;
    }
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
    }
interface Circle {
    kind: "circle";
    radius: number;
    }
type Shape1 = Square | Rectangle | Circle;
    function area(s: Shape1) {
        if (s.kind=="square") {
        return s.size * s.size;
        }
         else if (s.kind == "rectangle") {
        return s.width * s.height;
        } 
        else if (s.kind=="circle"){
        return 3.14*s.radius*2;
        }
        else {
        const _exhaustiveCheck: never = s;
        //Argument of type 'Circle' is not assignable to parameter of type 'never'.
        }
    }
var square: Shape1={
    kind:"square",
    size:200,
    }
var circle: Shape1={
    kind:"circle",
    radius:56
}
console.log(area(square));
console.log(area(circle));

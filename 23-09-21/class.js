var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.name = a;
        this.price = b;
    }
    return Car;
}());
var specs = /** @class */ (function (_super) {
    __extends(specs, _super);
    function specs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    specs.prototype.display = function () {
        console.log("Name :" + this.name);
        console.log("Price :" + this.price);
    };
    return specs;
}(Car));
var obj = new specs("BMW", 500000);
var obj1 = new specs("maruti", 50000);
obj1.display();
obj.display();

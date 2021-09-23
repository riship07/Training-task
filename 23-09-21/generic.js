var rishi = /** @class */ (function () {
    function rishi() {
    }
    rishi.prototype.patel = function (name, price) {
        this.name = name;
        this.price = price;
    };
    rishi.prototype.display = function () {
        console.log("Name :" + this.name);
        console.log("Price :" + this.price);
    };
    return rishi;
}());
var obj = new rishi();
obj.patel("BMW", 500000);
obj.display();
var obj1 = new rishi();
obj1.patel("maruti", "50000");
obj1.display();

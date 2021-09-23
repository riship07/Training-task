var Walkable = /** @class */ (function () {
    function Walkable() {
        this.num = 100;
    }
    Walkable.prototype.walk = function () {
        console.log("can Walk...");
    };
    return Walkable;
}());
var Swimmable = /** @class */ (function () {
    function Swimmable() {
    }
    Swimmable.prototype.swim = function () {
        console.log("can swim...");
    };
    return Swimmable;
}());
var Flyable = /** @class */ (function () {
    function Flyable() {
    }
    Flyable.prototype.fly = function () {
        console.log("can fly...");
    };
    return Flyable;
}());
var Fish = /** @class */ (function () {
    function Fish() {
        this.swimmable = new Swimmable();
    }
    return Fish;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.walkable = new Walkable();
        this.swimmable = new Swimmable();
        this.flyable = new Flyable();
    }
    Bird.prototype.dis = function () {
        console.log(this.walkable.num);
    };
    return Bird;
}());
console.log("Fish");
var nemo = new Fish();
nemo.swimmable.swim();
console.log("Bird");
var tweety = new Bird();
tweety.walkable.walk();
tweety.swimmable.swim();
tweety.flyable.fly();
tweety.dis();

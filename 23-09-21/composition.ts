class Walkable {
   num:number = 100
    walk() {
      console.log("can Walk...");
    }
  }
  
  class Swimmable {
  
    swim() {
      console.log("can swim...");
    }
  }
  
  class Flyable {
  
    fly() {
      console.log("can fly...");
    }
  }
  
  class Fish {
  
    swimmable;
  
    constructor() {
      this.swimmable = new Swimmable();
    }
  }
  
  class Bird {
  
    walkable;
    swimmable;
    flyable;
  
    constructor() {
      this.walkable = new Walkable();
      this.swimmable = new Swimmable();
      this.flyable = new Flyable();
    }
    dis(){
      console.log(this.walkable.num)
    }
  }
  
  console.log("Fish")
  var nemo = new Fish();
  nemo.swimmable.swim();
  
  console.log("Bird")
  var tweety = new Bird();
  tweety.walkable.walk();
  tweety.swimmable.swim();
  tweety.flyable.fly();
  tweety.dis();
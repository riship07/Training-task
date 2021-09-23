class Car { 
    price:number;
    name:string; 
    constructor(a:string,b:number) { 
       this.name = a 
       this.price = b
    }  
}
 class specs extends Car{
    display(){
        console.log("Name :"+this.name)
        console.log("Price :"+this.price)
    }
 }
 var obj = new specs("BMW",500000)
 var obj1 = new specs("maruti",50000) 
 obj1.display()
 obj.display()
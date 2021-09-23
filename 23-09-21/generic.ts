class rishi<T,U>  
{   
     name: T;  
     price: U;  
    patel(name: T, price: U) {   
        this.name = name;  
        this.price = price;  
    }  
    display(){
        console.log("Name :"+this.name)
        console.log("Price :"+this.price)
    }
}  
var obj = new rishi<string, number>();  
obj.patel("BMW", 500000);  
obj.display();  
var obj1 = new rishi<string, string>();  
obj1.patel("maruti", "50000");  
obj1.display();  
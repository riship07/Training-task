interface rishi { 
    firstName:any, 
    lastName:string, 
    fuc: ()=>string 
 } 
 
 var customer:rishi = { 
    firstName:"bharat",
    lastName:"chauhan", 
    fuc: ():string =>{
        return "Welcome to addweb"
    } 
 } 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.fuc())  
 
 
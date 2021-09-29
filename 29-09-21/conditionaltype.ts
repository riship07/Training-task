type bharat5 ={
    id: number ;
  }
type rishi6 ={
    name: string ;
  }

  type rp0<T extends number | string> = T extends number? bharat5: rishi6;

  function main7<T extends number | string>(rp7: rp0<T>): void {  
    console.log(typeof(rp7));
    console.log(rp7);
    }
   
  var rs3 = main7({name:"rishi"})
     

   
  var rs4 = main7({id:89});
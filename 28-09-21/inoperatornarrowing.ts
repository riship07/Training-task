type patel = {id : number};
type rishi = { code : string};
type bharat = { fun: () => void; };
 
function main(name: patel | rishi | bharat) {
  if ("code" in name) {
      console.log(name);
     }
  else if("id" in name){
       
      console.log(name);
      console.log("id");
      
  }
  else{
      console.log("error");
      
  }
}
main({id : 11})
main({code : "sher"})

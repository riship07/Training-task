function main(obj: number , obj1?:number) {      //optional parameter
  
  if (obj1) {             
      return `The number is ${obj1} now!`;
    }
    else if(obj){                                  //truthness narrowing obj1 will be assign as true if
        return `there is no ${obj}`;              // obj1 is there.
    } 
    else{
    return "there is no number :(";
    }
  }

  var r = main(45)
  console.log(r);
  var h = main(76,89)
  console.log(h);
  
  
  
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
   
 
  const q = longest([1, 2], [1, 2, 3]);
  
  const w = longest("alice", "bob");
                                            
  //const notOK = longest(10, 100);                                  // Error! Numbers don't have a 'length' property
  console.log(q);
  console.log(w);
  
  
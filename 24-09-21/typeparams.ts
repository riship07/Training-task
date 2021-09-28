function firstish<T extends obj>(no: T): void{
    console.log(no.length)
    
  }
  interface obj{
      length : number
  }
  var i = firstish<string>("rishipatel")

  
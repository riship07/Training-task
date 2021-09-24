function start(arg: string | string[] | (() => string) | { s: string }): string
 {
    
    if (typeof arg === "string") {
      return commonCase(arg);
    } else if (Array.isArray(arg)) {
      return arg.map(commonCase).join(",");
    } else if (typeof arg === "function") {
      return commonCase(arg());
    } else {
      return commonCase(arg.s);
    }
   
    function commonCase(s: string): string {
      
      return s;
    }
  }
  var arr : string[] = ["20","bottle"]
  function exp() : string{
    return "hello world";
  }
  interface bharat {
    s: string;
  }

  var obj: bharat = { s: "foo" };
  var c =start("rishi")
  var p =start(obj)
  var r =start(arr)
  var b =start(exp())
  console.log(c)                    //arg: string | string[] | (() => string) | { s: string }
  console.log(r)                    //arg: "rishi"| arr      |  exp()         | obj
  console.log(b)
  console.log(p)
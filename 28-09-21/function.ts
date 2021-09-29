function main(fn: (a: string) => void) {
    fn("hiiiiiiiiiii");
  }
   
  function printc(s: string) {
    console.log(s);
  }
   
  main(printc);
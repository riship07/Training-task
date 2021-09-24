const bharat = [];
bharat.push(1);
bharat.push("string");
bharat.push(2);
bharat.push({ patel: "rishi" });

bharat.map(bharat[0])    //here map expect function as a argument and bharat[0] is not a function
                         //but due to bharat is of any type , it will not give me a error or warning when i compile with tsc
                         //but it give me a error when i run same js file with using node.
                         
var b = bharat[0] + bharat[1]  //here variable b type initialize as any because bharat[0] and bharat[1] type are any.

console.log(b);

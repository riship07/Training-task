function main2(arr: any[], cbfun: (obj: any, no?: number) => void) {
    for (var i = 0; i < arr.length; i++) {
      cbfun(arr[i], i);
    }
  }
  function cbfun(arrr){
       console.log(arrr);
       console.log(" ");
}
var rp:number[]=[2,3,4,5,6]
main2(rp,cbfun)
function arr(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  
  var a = arr(10,10,20,30,40,50);

  console.log(a);
  
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    arr1.push(...arr2);

    console.log(arr1);
    
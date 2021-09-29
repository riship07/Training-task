function rishi(x, y) {
    if (x === y) { // if x=y then obviously type of x and y are string so ,we can assign string method to them
        var r = x.toUpperCase();
        var p = y.toLowerCase(); //here x===y will be true, this is called equility narrowing.
        console.log(r);
        console.log(p);
    }
    else {
        console.log(x);
        console.log(y);
    }
}
rishi("bharat", "bharat");
rishi("riShi", "PATel");

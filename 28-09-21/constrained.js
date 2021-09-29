function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
var q = longest([1, 2], [1, 2, 3]);
var w = longest("alice", "bob");
//const notOK = longest(10, 100);                                  // Error! Numbers don't have a 'length' property
console.log(q);
console.log(w);

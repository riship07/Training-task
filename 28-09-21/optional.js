function printName(obj) {
    console.log(obj.first.toUpperCase());
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    else {
        console.log(obj.first.toUpperCase());
    }
}
printName({ first: "rishi", last: "patel" });
printName({ first: "rishi" });

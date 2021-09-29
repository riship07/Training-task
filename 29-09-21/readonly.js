var a = {
    name: "Person McPersonface",
    age: 42
};
var b = a;
console.log(b.age);
a.age++;
// b.age++;      this give me a error because it is readonly propertie.
console.log(b.age);

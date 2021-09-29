;
var person = {
    name: 'hii',
    age: 0,
    func: function (com) {
        return com + " " + this.name + ". and year " + this.age + " old.";
    }
};
person.name = 'bharat';
person.age = 20;
console.log(person.func("Hi"));

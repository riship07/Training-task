interface Person {
    name: string;
    age: number;
    func(com: string): string;
};
const person: Person = {
    name: 'hii',
    age: 0,
    func (com: string) { 
        return `${com} ${this.name}. and year ${this.age} old.`;                
    }
};
person.name = 'bharat';
person.age = 20;
console.log(person.func(`Hi`))
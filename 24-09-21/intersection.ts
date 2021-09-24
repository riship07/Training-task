interface Student {
    id: string;
    age: number;
}

interface Employee {
    companyId: string;
}

type A = Student & Employee;

let x: A = {
    age :15,
    companyId : 'CID007',
    id : 'ID007'
};



console.log(x.companyId);
console.log(x.age);


type person ={
    name: string;
    weight:number;
};
type animal ={
    name: string;
    brid: string;
    weight: number;
};
const Animal: animal={
    name: "sunny",
    weight:30,
    brid:"lab"
};
// const Person: person={
//     name: "sunny",
//     weight:30,
//     // brid:"lab"
// };
// const Animal : animal = Person;     //give me error because Property 'brid' is missing in type 'person' but required in type 'animal'


console.log(Animal.name);

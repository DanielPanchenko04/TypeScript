interface Person {
    name: string;
    age: number;
    address?: string;
}

const person: Person = {
    name: "Daniel",
    age: 20,
    address:"Street 9"
}

function printPersonInfo(p: Person){
    console.log('Name: ${p.name}');
    console.log('Age: ${p.age}');
    console.log('Address: ${p.address ? p.address : "Not specified"}');
}

printPersonInfo(person);
 
 

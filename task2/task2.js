 
"use strict";
const person = {
    name: "Daniel",
    age: 20,
    address: "Street 9"
};
function printPersonInfo(p) {
    console.log('Name: '.concat(p.name));
    console.log('Age: '.concat(p.age));
    console.log('Address: '.concat(p.address ? p.address : "Not specified"));
}
printPersonInfo(person);

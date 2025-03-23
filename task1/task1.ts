 
let str: string;
let num: number;
let bool: boolean;
let arr: Array<string>;
let obj: object;

type User = {
    name:string;
    age:number;
};

let user: User;

user = {
    name: "Daniel",
    age: 20,
};

function userInformation(user: User): string{
    return 'Name: ' + user.name + ', Age: ' + user.age;
}

console.log(userInformation(user))

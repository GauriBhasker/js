//singleton object is created when made using constructor. (singleton: single object of a type)
//Object.create     (using constructor)
//not created when made using object literals


//symbol
const sym = Symbol("key1")
const user1 ={}   ///empty object

const user2 = {
    name: "Arun",
    age: 21,
    [sym]: "mykey1",
    hobbies:["dancing", "singing"]
}

// console.log(user2.name);
// console.log(user2.age);
// console.log(user2.hobbies);

console.log(user2["hobbies"]);
console.log(user2[sym]);

user2.name = "Aditya"

console.log(user2.name);

// Object.freeze(user2)

user2.age = 678

console.log(user2);

//function

user2.greet = function(){
    console.log(`Hello ${this.name}`);
}

console.log(user2.greet());

const obj = new Object()
obj.name = "Reena"

console.log(obj);

const newuser = {
    name: "Arunita",
    age: 34,
}
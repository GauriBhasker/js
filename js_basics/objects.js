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

console.log(newuser);
console.log(newuser.hasOwnProperty('name'))

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj3 = {
    5:"e",
    6:"f"
}

// newobj = Object.assign({}, obj1, obj2, obj3)
// newobj = {obj1, obj2}

newobj = {...obj1, ...obj2, ...obj3}

console.log(newobj);

console.log(Object.keys(newobj));
console.log(Object.values(newobj));


const usernames = [
    {
        username1: "Anil",
        age1: 19
    },
    {
        username2: "Arun",
        age2: 22
    },
    {
        username3: "Aditya",
        age3: 67
    },
    {
        username4: "Aashish",
        age4: 34
    }
]

console.log(usernames[0])
console.log(usernames[1])
console.log(usernames[2])
console.log(usernames[3])

console.log(Object.keys(usernames));
console.log(Object.entries(usernames));
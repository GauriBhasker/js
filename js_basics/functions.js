function printhello()
{
    return "hello"
}

let hello = printhello()

console.log(hello)

function sayhi()
{
    console.log("hi");
}

sayhi()

function add(num1, num2){
    console.log(num1 + num2)
}

add(6,7)

function addtocart(...num1){     //rest operator
    return num1
}

console.log(addtocart(2,2,32,32))
console.log(addtocart(2,2,32,3,45,345,2))

const user = {
    username: "Gauri",
    course: "Java"
}

function havingobject(anyobject){
    console.log(`Username is ${anyobject.username}`);
}

havingobject(user)
havingobject({
    username: "Alia"
})

const array = [3,4,3,4,4]

function havingarray(getArray){
    console.log(getArray[0]);
}

havingarray(array)
havingarray([43,342,324,234])
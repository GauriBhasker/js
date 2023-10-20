function sayhi(){
    console.log("hi")
}

sayhi()


// () => {}

const sayhello = () => {
    console.log("hi");
}

sayhello()

//1
//{return} explicit
const add = (num1, num2) => {
    return num1 + num2
}

//2
//(no return) implicit
const addition = (num1, num2) => (num1 + num2)
console.log(add(1,3));
console.log(addition(1,3));
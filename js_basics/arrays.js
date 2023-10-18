let arr = [2,3,5,7,7,8,4,6]
console.log(arr[0]);
console.log(arr[-3]);
arr.pop()
arr.push(34)
arr.unshift(27)
arr.shift()
console.log(arr)

const arr2 = new Array(2,3,45,5,56547,5,56876,8,678,"dghjsfv")

console.log(arr2);
console.log(arr2.length);

console.log(arr2.includes(54632754));
console.log(arr2.includes(2));

console.log(arr2.indexOf(2));
console.log(arr2.indexOf(2354));

const newarr = arr2.join()
console.log(newarr)
console.log(typeof(newarr))

//slice. splice

const array = [2,3,4,5,6,7,8,9,0,1]

console.log("Array is: " +array)

console.log(array.slice(2,5))    //start and end parameters

console.log("Array after slice is: " +array);

console.log(array.splice(2,8))     //start parameter and number of items

console.log("Array after splice is: " +array);



const actors = ["Aamir", "Ajay"]

const actresses = ["Aishwarya", "Kajol"]

// actors.push(actresses)

// console.log(actors)
// console.log(actors[2][1])
// console.log(actors.flat())


// console.log(actors.concat(actresses))


const allheros = [...actors, ...actresses]

console.log(allheros);

console.log(Array.isArray(allheros));
console.log(Array.isArray("Aish"));

console.log(Array.from("Gauri Bhakser"));

let a=90
let b=234
let c=7385

console.log(Array.of(a,b,c))
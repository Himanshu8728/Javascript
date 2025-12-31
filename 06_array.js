const array =[1, 2, 3, 4, 5];

array.push(9,10)

array.pop()

// console.log(array.includes(6));

// const newArray = array.join();

// console.log(typeof newArray);
// console.log(typeof array);

//
const arr = array.slice(1,3)
const arr1 = array.splice(1,3)
//console.log(arr)
//console.log(arr1)

const marvel=["spiderman", "ironman", "thor", "hulk"];
const Dc=["aquaman", "batman", "Superman","Jocker"];

// marvel.push(Dc)
// console.log(marvel)
const concat = marvel.concat(Dc)

const dotdotdot = [...marvel, ...Dc]
//console.log(dotdotdot)

console.log(Array.from("Himanshu"))
// for(let i = 1; i<=10;i++){
//     console.log(i)
// }

// for(let i = 1;i<=10;i++){
//     for(let j = 1;j<=10;j++){
//         console.log(`${i} * ${j} =${i*j}`)
//     }
// }

const myArray = ['flash', 'superman', 'captain america', 'ironman'];
let j = 0;
while(j<=myArray.length){
    //console.log(`SuperHero is ${myArray[j]}`)
    j++;
}

// for(let i = 0;i<myArray.length;i++){
//     console.log(myArray[i])
// }

// for (let index = 1; index <= 20; index++) {
//     if(index===5){
//         continue;
//     }
//     console.log(`The value of i is ${index}`);
    
// }

// let i = 0;
// while(i<=20){
//     console.log(`the value of i is ${i}`)
//     i=i+3;
// }
 
const arr =[1, 2, 3, 4, 5, 6, 7]
for(const num of arr){
    //console.log(num)
}


const name = "Himanshu Maurya"
for(const fullName of name){
    //console.log(`My fullName as word is ${fullName}`)
}

// const name1 = "Himanshu Maurya"
// for(const fullName in name1){
//     console.log(`My fullName as word is ${fullName}`)
// }


const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Ru', 'Russia')

console.log(map)

for(const [key, value] of map){
    console.log(key, '-', value);
}


const myObject={
    1 : 'India',
    2 : 'USA',
    3 : 'Russia',
    4 : 'France'
}
//console.log(myObject)

// for(const key of myObject){
    // console.log(key)
// }

// console.log()
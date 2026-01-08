const obj1={
    name : "Himanshu",
    age : 22,
    gender : "Male",
    email : "himanshum2k3@gmail.com",
    contact : 8707656494
}
// console.log(Object.entries(obj1))
const extra ={
    college : "Manav Rachna",
    semester : 7
}

const user= Object.assign(obj1, extra)
//console.log(user)
const obj3= {...obj1, ...extra}
console.log(obj1.hasOwnProperty("name"))
// console.log()
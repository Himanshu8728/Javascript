const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
//console.log(descripter);

const Menu={
    name:'icecream',
    price:'99',
    isAvilable:true
}



Object.defineProperty(Menu, 'name', {
    writable:false,
    enumerable:false 
})

console.log(Object.getOwnPropertyDescriptor(Menu, 'name'))

for (const [key, value] of Object.entries(Menu)) {
    console.log(`${key} : ${value}`)
}
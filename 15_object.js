const myObject={
    1 : 'India',
    2 : 'USA',
    3 : 'Russia',
    4 : 'France'
}

for(const key in myObject){
   // console.log(`The Key is ${key} and the value is ${myObject[key]}`)
}

const myArray =['hii', 'i', 'am', 'Himanshu']
for(const value in myArray){
    //console.log(myArray[value]);
    
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Ru', 'Russia')

for(const key in map){
    //console.log(key);
}

const Array1 =[1,2,3,45,4,654545,45]

Array1.forEach(function(items){
    //console.log(items)   
})

Array1.forEach((val)=>{
    console.log(val)
})
const Example=[1,2,3,4,5,6,7,7,8]
const newExample = Example.filter((nums)=>nums>4)
// console.log(newExample);

const emptyArray=[]
Example.forEach((nums)=>{
    if(nums>4){
        emptyArray.push(nums)
    }
})
console.log(emptyArray)

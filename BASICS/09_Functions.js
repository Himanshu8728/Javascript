function calculationOnTwoNumbers(num1, num2){
    // console.log("Add=", num1+num2);
    // console.log("Diff=",num1-num2);
    // console.log("Multiply=",num1*num2);
    // console.log("Divide=",num1/num2);
    let result = num1 + num2
    return result;
}

const result = calculationOnTwoNumbers(2, 2)

//console.log("result", result)

function totalScore(score){
    return `${score} is your final score Himanshu`
}

//console.log(totalScore(999))

function addtocart(...price){
    return price;
}

const total = addtocart(199, 349, 99, 199)
// console.log(total)

let sum =0;
for(let i =0; i<total.length;i++){
    sum+=total[i];
}
// console.log(sum)

//object and fxn
const user={
    name: "Himanshu",
    sem:7
}

function object1(anyobject){
    console.log(`i am ${anyobject.name} and i am in ${anyobject.sem} semester`);
}

object1(user)

//array n fxn

const price1 =[200, 300, 400, 500]

function getSecondValue(value){
    console.log(value[1])
}
getSecondValue(price1)
// console.log()
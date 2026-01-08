function multiplyBy5(num){
    return num*5;
}

//multiplyBy5.power = 2
// console.log(multiplyBy5.power);
// console.log(multiplyBy5(2));
// console.log(multiplyBy5.prototype) 

function CreateUser(username, score){
    this.username = username;
    this.score = score;
    
    //return this

}


CreateUser.prototype.increment=function(){
    this.score++;
}

CreateUser.prototype.printMe=function(){
    console.log(this.score)
}

const user1 = new CreateUser("hims", 999)
const user2 = new CreateUser("OnePiece", 1054)

// user1.increment()
// user1.printMe()

// user2.increment()
// user2.printMe()

// function itsMe(a, b , c){
//     return a*b+c*(c*a-b)
// };

// console.log(itsMe(2, 5, 9))

const User={
    name:'himanshu',
    isLoggedin:true,
    email:'himanshum2k3@gmail.com'
}

const Student={
    makeVideos:true
}

const StudentSupport={
    available:false
}

const TAsupport={
    makeAssignment: 'jS assignment',
    fullTime:true,
    __proto__:StudentSupport
}

Student.__proto__=User


const myUserName="himanshu8728     "
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`);
}

myUserName.trueLength()
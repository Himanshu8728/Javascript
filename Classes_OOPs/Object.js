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

user1.increment()
user1.printMe()

user2.increment()
user2.printMe()

function itsMe(a, b , c){
    return a*b+c*(c*a-b)
};

console.log(itsMe(2, 5, 9))
const user={
    username :"himanshu",
    email:"hims@gmail.com",
    loginCount : 9,
}
console.log(user['email'])


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}
//use new to create a new isntance so that the second user cannot overwrite the details of userone
const userOne = new User("hims", 12, true)
const userTwo = new User("sachin", 10, false)

console.log(userOne)
console.log(userTwo.username)
console.log(userTwo)

function Data(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const dataUserOne = new Data("shivam", 22, true)
const dataUserTwo = new Data("hims", 21, false)

console.log(dataUserOne, dataUserTwo)
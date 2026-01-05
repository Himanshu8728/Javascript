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
const userOne = new User("himanshu", 12, true)
const userTwo = new User("Parul", 10, false)

console.log(userOne)
console.log(userTwo.username)
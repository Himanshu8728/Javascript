class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`UserName is ${this.username}`)
    }


    static createID(){
        return 123;
    }
}

const person = new User('Hims')
console.log(person.createID())
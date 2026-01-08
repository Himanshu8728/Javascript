class User{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    capitalUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const Hims= new User('Hims', 'xyz@google.com', 'admin')
console.log(Hims.encryptPassword());
console.log(Hims.capitalUsername());

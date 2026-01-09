class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
     set email(value){
        this._email=value
     }

    get password(){
        return `${this._password}hims`
    }

    set password(value){
        this._password=value
    }
}

const himanshu= new User('xyz@mail.com', 'Anonymous870')
//console.log(himanshu.email)

class User1{
    constructor(name, password){
        this.name=name;
        this.password=password;
    }

    get name(){
        return `${this._name.toUpperCase()}Adminxy`
    }

    set name(setter){
        this._name=setter
    }
}

const unknown=new User1('hacker', 87645)

console.log(unknown.name)
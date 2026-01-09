const User={
    _email:'hims@gmail.com',
    _password:'admin',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const ZeeGoD=Object.create(User)
console.log(ZeeGoD.email)
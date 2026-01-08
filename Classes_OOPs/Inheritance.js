class User{
    constructor (username){
        this.username=username
    }

    LogMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class teacher extends User{
    constructor(username, id, password){
        super(username)
        this.id=id
        this.password=password
    }

    addCourses(){
        console.log(`A new Course add by ${this.username}`)
    }
}

const hims=new teacher('hims', 121, 1435)
hims.addCourses()

// console.log(hims)
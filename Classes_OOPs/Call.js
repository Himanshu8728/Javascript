function SetUsername(username){
    this.username=username    
}

function CreateUser(username, email, password){
    SetUsername.call(this, username)
    this.email=email
    this.password=password

}

const user= new CreateUser('hims', 'himanshum2k3@gmail.com', 'admin')
//console.log(user)



function PlayGame(Playername){
    this.Playername=Playername
}

function checkPoint(Playername, points, recallLeft){
    PlayGame.call(this, Playername)
    this.points=points
    this.recallLeft=recallLeft
} 

const player1 = new checkPoint('ZeeGoD', 4232, 2)
const player2 = new checkPoint('Shanks', 2412, 3)


console.log(player1)
console.log(player2)
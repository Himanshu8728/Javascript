// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async Task");
//         resolve()
        
//     }, 1000);
// })

// promiseOne.then(()=>{
//     console.log("Promise Consumed");
    
// })


// new Promise((resolve, reject)=>{
//     console.log("Async Task 2");
//     resolve();
    
// }).then(()=>{
//     console.log("Again consumed");
    
// })

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({
//             username:"himanshu",
//             email:"xyz@example.com"
//         })
//     }, 1000)
// })
// promiseThree.then((user)=>{
//     console.log(user)
// })


// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({
//                 username:"Hims",
//                 email:"xyx@xyz.com"
//             }) 
//         }else{
//             reject('404 Something went Wrong')
//         }
//     }, 1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// })

// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({
//                 username:"Hims(0_0)",
//                 email:"xyx@xyz.com"
//             }) 
//         }else{
//             reject('404 YOOOO something went Wrong')
//         }
//     }, 1000)
// })

// async function checkPromiseFive(){
//     try {
//        const response = await promiseFive
//     console.log(response) 
//     } catch (error) {
//         console.log(error);   
//     }
    
// }
// checkPromiseFive()


// async function AllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
        
//     } catch (error) {
//         console.log("E", error);
        
//     }
    
// }
// AllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    log(error)
})
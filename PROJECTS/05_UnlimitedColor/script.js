let checkInterval=null;

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i = 0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
const body=document.querySelector('body')

document.querySelector('#start').addEventListener('click',()=>{
    if(!checkInterval){
        checkInterval=setInterval(()=>{
            body.style.backgroundColor=randomColor()
        }, 1000)
    }
})

document.querySelector('#stop').addEventListener('click', ()=>{
    clearInterval(checkInterval)
    checkInterval=null;
})
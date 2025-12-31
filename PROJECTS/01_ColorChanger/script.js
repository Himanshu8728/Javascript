const buttons=document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id==='pink'){
      body.style.backgroundColor="pink"
    }
    else if(e.target.id==='green'){
      body.style.backgroundColor="green"
    }
    else if(e.target.id==='teal'){
      body.style.backgroundColor="teal"
    }
    else if(e.target.id==='brown'){
      body.style.backgroundColor="brown"
    }
    })
    
})
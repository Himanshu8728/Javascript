const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height==0 || height<0 || isNaN(height)){
        results.innerHTML=`Please enter valid input`
    }else if(weight==0 || weight<0 || isNaN(weight)){
        results.innerHTML=`Please enter valid input`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`

    }
})
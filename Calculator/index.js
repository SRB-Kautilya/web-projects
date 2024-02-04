
let buttons = Array.from(document.getElementsByClassName('btn'))
let getscreen = document.getElementById('screen')


buttons.map((button)=>{
button.addEventListener('click',(e)=>{
    console.log('test',e.target.innerText)
    switch(e.target.innerText){
        case 'Clear':
            getscreen.innerText='';
            break;
        case '=':
            try{
                getscreen.innerText = eval(getscreen.innerText);
            } catch {
                getscreen.innerText = "Error"
            }
            break;
        case 'Del':
            if (getscreen.innerText){
                getscreen.innerText = getscreen.innerText.slice(0, -1);
             }
             break;
            default:
            getscreen.innerText += e.target.innerText;
    }
   

})
})



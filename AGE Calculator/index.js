function calculateAge(){
    const displayAge= document.getElementById("displayAge");
    const Age= document.getElementById("age");
    let getDate = document.getElementById('birthday').value
    console.log(new Date(getDate))
    let age = new Date().getFullYear() - new Date(getDate).getFullYear();
    console.log(age)
    if(age < 0){
        Age.innerHTML = 'Please select the right DOB'
    }else{
        displayAge.style.visibility="visible";
        Age.innerText=`You are ${age} years old.`
    }

   
   // alert(`${getDate}`)
}
function signup(){
    uname=uName.value
    accno=accNo.value
    pass=password.value
    cpass=cpassword.value
    if(pass==cpass){
        if(accno in localStorage){
            ale.innerHTML=`<p class="text-danger mt-2"> User already exist </p>`
        }
        else{
            //create an object user with user details 
            //Nb:- if key and value, then key only needed
            user={uname,accno,pass} 
            //store in localstorage
            localStorage.setItem(accno,JSON.stringify(user))
            window.location='index.html'
        }
    }
    else{
        ale.innerHTML=`<p class="text-danger mt-2"> Password doesn't match </p>`
    }
}

function login(){
    acno=a1.value
    psw=p1.value
    if(acno in localStorage){
        userObj=JSON.parse(localStorage.getItem(acno))
        if(userObj.pass==psw){
            window.location='home.html'
            alert('Login success')
        }
        else{
            alert("Invalid password")
        }
    }
    else{
        alert("User not registered")
    }

}
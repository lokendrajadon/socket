// register variables
let username = document.getElementById('username');
let email = document.getElementById('email')
let passWordField = document.getElementById('password')
let passWordConfirmField = document.getElementById('password_conf');
let registerform = document.getElementById('register')

// login variables
let logemail = document.getElementById('logemail')
let logpassword = document.getElementById('logpassword')
let loginForm = document.getElementById('login')

// register form validate
function validateRegisterForm(){
   
    let mailformat =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let validfrmat = email.value.match(mailformat)

    if(username.value == ''){
        username.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Please enter the username"
    } else if(email.value == ''){
        email.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Please enter the email"
    } else if(passWordField.value == ''){
        passWordField.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Please enter the Password"
    } else if(passWordConfirmField.value == ''){
        passWordConfirmField.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Please enter the Confirm Password"
    } else if(passWordField.value != passWordConfirmField.value){ 
        passWordField.style.borderBottom = '2px solid red';
        passWordConfirmField.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Password and Confirm password does not match"
      }else if(!validfrmat){
        email.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Please enter valid the email"
    } else {
        registerform.submit()
    }
}

//login form validate


function validateLoginForm(){
    let mailformat =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let validfrmat = logemail.value.match(mailformat)

    if(logemail.value == ''){
        logemail.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Please enter the username"
    } else if(logpassword.value == ''){ 
        logpassword.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Please enter the passwordaaaaaaaaaaaa"
      }else if(!validfrmat){
        logemail.style.borderBottom = '2px solid red';
        document.getElementById('error').innerHTML = "Please enter valid the username"
    } else {
        loginForm.submit()
    }
}


username.addEventListener("keyup", event => {
    username.style.borderBottom = '';
});
email.addEventListener("keyup", event => {
    email.style.borderBottom = '';
});
passWordField.addEventListener("keyup", event => {
    passWordField.style.borderBottom = '';
});
passWordConfirmField.addEventListener("keyup", event => {
    passWordConfirmField.style.borderBottom = '';
});
username.addEventListener("keyup", event => {
    username.style.borderBottom = '';
});
logpassword.addEventListener("keyup", event => {
    logpassword.style.borderBottom = '';
});
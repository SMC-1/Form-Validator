/*
JS for a form validation
Author: Santiago Mesa
14 july 2022
*/
var email = document.getElementById('email');
var login = document.getElementById('login');
var password = document.getElementById('pass');
var confirmPass = document.getElementById('pass2');
var terms = document.getElementById('terms');
var news = document.getElementById('newsletter');
var form = document.getElementById('form');

var loginError = document.getElementById('loginError');
var mailError = document.getElementById('mailError');
var passError = document.getElementById('passError');
var pass2Error = document.getElementById('pass2Error');
var newsError = document.getElementById('newsError');
var termsError = document.getElementById('termsError');

let blank = "";


//regular expressions for email and password
var passRE = /^(?=.*?[A-Z])(?=.*?[a-z])\w{6}/;
var mailRE = /^(.+)@(.+)[.](.+)$/;


//functions to test each field and the input
function validateLogin(){
    if (login.value === "" || login.value.length > 20){
        loginError.innerHTML = 'Invalid username';
    }
    else{
        return blank;
    }
}
function validateMail(){
    if (email.value.match(mailRE) == null){
        mailError.innerHTML = 'Email is invalid'
    }
    else{
        return blank;
    }   
}
function validatePass(){
    if(password.value === "") {
        passError.innerHTML = 'Password cant be empty'
    }
    else{
        return blank;    
    }
}
function validatePassRE(){
     if (password.value.match(passRE) == null){
        passError.innerHTML = 'Password not valid. Min 6 chars: at least one upper and one lower case';
    }
    else{
        return blank;
    }
}
function validatePass2(){
    if (password.value !== confirmPass.value){
        pass2Error.innerHTML = 'Password does not match';
    }
    else{
        return blank;
    } 
        
}
function validateTerms(){
    if (!terms.checked){
        termsError.innerHTML = 'Need to check terms and conditions';
    }   
    else{
        return blank;
    }
}
//reset function to clean error messages
function reset(){
    loginError.innerHTML = '';
    mailError.innerHTML = '';
    passError.innerHTML = '';
    pass2Error.innerHTML = '';
    newsError.innerHTML = '';
    termsError.innerHTML = '';

}

//main function to validate form
function validate(){
    //check everything is good
    let check = true;
    //validate terms and conditions are accepted
    if (validateLogin() !== blank){
        check = false;
    }
    if (validateMail() !== blank){
        check = false;
    }
    if (validatePassRE() !== blank){
        check = false;
    }
    if (validatePass() !== blank){
        check = false;
    }
    if (validatePass2() !== blank){
        check = false;
    }   
    if (validateTerms() !== blank){
        check = false;
    }
    if (check === true){
        //valid form
        alert("Thanks for submiting!");
        login.value = login.value.toLowerCase();
    }
  
 
    return check;
}
// fucntions to clean error mesagges qhen a correct input is given
login.addEventListener('blur',() =>{
    if (validateLogin() === blank){
        loginError.textContent = "";
    }
});
email.addEventListener('blur',() =>{
    if (validateMail() === blank){
        mailError.textContent = "";
    }
});
pass.addEventListener('blur',() =>{
    if (validatePass() === blank){
        passError.textContent = "";
    }
});
confirmPass.addEventListener('blur',() =>{
    if (validatePass2() === blank){
        pass2Error.textContent = "";
    }
});
terms.addEventListener('change',() =>{
    if (validateTerms() === blank){
        termsError.textContent = "";
    }
});
//function to display message when newsletter activated
news.addEventListener('change', i => {
    if(i.target.checked){
        alert("By checking this, there is a possibility to receive spam. Close this window to continue");
    }
});
form.addEventListener('reset', reset);
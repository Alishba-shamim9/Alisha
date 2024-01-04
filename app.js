let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let number = document.getElementById('number').value;


let userCheck =  /^[0-9a-zA-Z]+$/;
let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordCheck =  /^[0-9a-zA-Z]+$/;
let numberCheck =  /^\d{10}$/;

if(UserCheck.test(username)){
    document.getElementById('Usererror').innerHTML = ""
}
else{
 
    document.getElementById('Usererror').innerHTML = "** Invalid Username"
    return false;


}
if(EmailCheck.test(Email)){
    document.getElementById('Emailerror').innerHTML = ""
}
else{
    document.getElementById('Emailerror').innerHTML = "** Invalid Email"
    return false;


}
if(passwordCheck.test(password)){
    document.getElementById('passworderror').innerHTML = ""
}
else{
    document.getElementById('passworderror').innerHTML = "** Invalid password"
    return false;


}
if(numberCheck.test(number)){
    document.getElementById('numbererror').innerHTML = ""
}
else{
    document.getElementById('numbererror').innerHTML = "** Invalid number"
    return false;


}
if(UserCheck.test(username)&& EmailCheck.test(Email) && passwordCheck.test(number) && numberCheck.test(number)){
    swal("Good Job!","Your Form Has Been Submitted","success")
    return false;
}
else{
    alert("Invalid");
    return false;
}
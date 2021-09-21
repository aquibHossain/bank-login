const loginButton=document.getElementById("login-button")
const email=document.getElementById("email")

const password=document.getElementById("password")
loginButton.addEventListener("click",function(event){
     if (email.value=="aquib@gmail.com" && password.value=="1106"){
         window.location.href="bank.html"
     }

})


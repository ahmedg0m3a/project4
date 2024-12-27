var email = document.querySelector("#exampleInputEmail1")
var password = document.querySelector("#exampleInputPassword1")
var loginBtn = document.querySelector("#sign_in")
var getemail = localStorage.getItem("email")
var getPassword = localStorage.getItem("password")
loginBtn.addEventListener ("click" , function (e){
    e.preventDefault()
    if (email.value==="" || password.value ==="") {
        alert("please fill data")
    }else{
        if (getemail && getemail.trim() === email.value.trim() && getPassword && getPassword === password.value){
            setTimeout(() => {
                window.location = "index.html"
            } , 1000)
        }else{
            alert("your email or password is wrong")
        }
    }
})
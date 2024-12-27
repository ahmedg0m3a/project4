var firstnaem = document.querySelector("#username")
var lastname = document.querySelector("#lastname")
var email = document.querySelector("#exampleInputEmail1")
var password = document.querySelector("#exampleInputPassword1")
var registerBtn = document.querySelector("#sign_up")
registerBtn.addEventListener("click" , function (e){
    e.preventDefault()
    if (firstnaem.value==="" || lastname.value ==="" || email.value ==="" || password.value ===""){
        alert("please fill data")
    }else {
        localStorage.setItem("username" ,firstnaem.value);
        localStorage.setItem("lastname" ,lastname.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        setTimeout(()=>{
            window.location="login.html"
        } , 1000)
    }
})
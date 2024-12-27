var userInfo = document.querySelector("#user_info");
var userInfo2 = document.querySelector("#user-info");
var userData = document.querySelector("#user");
var links = document.querySelector("#links");
var shoppingcart = document.querySelector(".shopping-cart")
if (localStorage.getItem("username")) {
    links.remove();
    userInfo.style.display = "flex";
    shoppingcart.style.display = "none";
    
}

var logoutbtn = document.querySelector("#logout");
logoutbtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1000);
});
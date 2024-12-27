// var userInfo = document.querySelector("#user_info")
// var userInfo2 = document.querySelector("#user-info")
// var userData = document.querySelector("#user")
// var links = document.querySelector("#links")
// if (localStorage.getItem("username")){
//     links.remove()
//     userInfo.style.display = "flex"
//     userInfo2.style.display = "flex"
//     userData.innerHTML = "Wellcome " + localStorage.getItem("username")
// }
// var logoutbtn = document.querySelector("#logout")
// logoutbtn.addEventListener("click" , function(){
//     localStorage.clear()
//     setTimeout(() =>{
//         window.location = "login.html"
//     } ,1000)
// })
// var allprodcts = document.querySelector(".container-product")
// var products = [
//     {
//         id:1,
//         title:"product : Air Fryer Digital",
//         price:"price : 4300 EG",
//         Category :"Category : Cooking utensils",
//         imageurl:"img/cat_c_banner_bg_m.avif"
//     },
//     {
//         id:2,
//         title:"product : Braun blender",
//         price:"price : 2000 EG",
//         Category :"Category : Cooking utensils",
//         imageurl:"img/0045406_braun-3-in-1-jug-blender-with-chopper-and-grinder-500-watt-white-jb0123wh_550.jpeg"
//     },
//     {
//         id:3,
//         title:"product : Microwave",
//         price:"price : 8000 EG",
//         Category :"Category : Cooking utensils",
//         imageurl:"img/25-900-6-r-750mr-k.avif"
//     },
//     {
//         id:4,
//         title:"product : Gas stove",
//         price:"price : 10300 EG",
//         Category :"Category : Cooking utensils",
//         imageurl:"img/0044715_fresh-gas-cooker-jumbo-5-burners-9060-cm-safety-with-fan-stainless-500016272_550.jpeg"
//     },
//     {
//         id:5,
//         title:"product : Refrigerator",
//         price:"price : 22500 EG",
//         Category :"Category : Cooling tools",
//         imageurl:"img/0POPOPO-512x512.jpg"
//     },
//     {
//         id:6,
//         title:"product : Deep freezer",
//         price:"price : 35000 EG",
//         Category :"Category : Cooling tools",
//         imageurl:"img/download.jpeg"
//     },
//     {
//         id:7,
//         title:"product : vacuum cleaner",
//         price:"price : 3500 EG",
//         Category :"Category : Cleaning tools",
//         imageurl:"img/download (1).jpeg"
//     },
//     {
//         id:8,
//         title:"product : screen",
//         price:"price : 23000 EG",
//         Category :"Category : Smart TV",
//         imageurl:"img/4k-50-4t-c50dl6ex.avif"
//     },
//     {
//         id:9,
//         title:"product : adaptation",
//         price:"price : 8400 EG",
//         Category :"Category : Cooling tools",
//         imageurl:"img/sharp_1.5.jpg"
//     }
// ]
// function drawItems (){
//     var y =products.map((item) =>{
//         return`
//         <div class="col-12 col-sm-6 col-md-6 col-lg-4 rounded-2 paernt">
//             <div class="item">
//                     <div class="">
//                      <img src="${item.imageurl}"  alt="" style="width: 100%;" height="300">
//                     </div>
//                     <div class="position-relative mt-3">
//                      <p>${item.title}</p> 
//                      <p>${item.price}</p>
//                      <p>${item.Category}</p>
//                      <button class="btn btn-primary text-light" onclick="addtocart(${item.id})">Add to cart</button>
//                      <i class="fas fa-heart vaf heart"></i>
//                     </div>
//             </div>
//         </div>`
//     }).join("")
//     allprodcts.innerHTML = y;
// }
// drawItems()
// function filterProducts() {
//     var searchType = document.getElementById("searchType").value;
//     var searchInput = document.getElementById("searchInput").value.toLowerCase();
//     var allProductsContainer = document.querySelector(".container-product");

//     var filteredProducts = products.filter(product => {
//         if (searchType === "name") {
//             return product.title.toLowerCase().includes(searchInput);
//         } else if (searchType === "category") {
//             return product.Category.toLowerCase().includes(searchInput);
//         }
//     });

//     if (filteredProducts.length > 0) {
//         var productsHTML = filteredProducts.map(product => {
//             return `
//             <div class="col-12 col-sm-6 col-md-6 col-lg-4 rounded-2 paernt">
//                 <div class="item">
//                         <div class="">
//                          <img src="${product.imageurl}"  alt="" style="width: 100%;" height="300">
//                         </div>
//                         <div class="position-relative mt-3">
//                          <p>${product.title}</p> 
//                          <p>${product.price}</p>
//                          <p>${product.Category}</p>
//                          <button class="btn btn-primary text-light" onclick="addtocart(${product.id})">Add to cart</button>
//                          <i class="fas fa-heart vaf heart"></i>
//                         </div>
//                 </div>
//             </div>`;
//         }).join("");

//         allProductsContainer.innerHTML = productsHTML;
//     } else {
//         allProductsContainer.innerHTML = `<p>No products match your search.</p>`;
//     }
// }
// drawItems();
// var cartproductDiv = document.querySelector(".carts_products div")
// var badge = document.querySelector(".badge")
// // var addeditem = [];
// var addeditem = localStorage.getItem("productsincart") ? JSON.parse(localStorage.getItem("productsincart")) : [];

// if(addeditem) {
//     addeditem.map(item => {
//         cartproductDiv.innerHTML += `<p>${item.title}</p>`;
//     })
//     badge.style.display = "block";
//     badge.innerHTML = addeditem.length;
// }

//     if(localStorage.getItem=("username")){
//         function addtocart (id){
//             var choosenitem = products.find((item) => item.id ===id)
//             cartproductDiv.innerHTML += `<p>${choosenitem.title} <i class="fas fa-plus"></i> <i class="fas fa-minus"></i></p>`
//             addeditem = [...addeditem , choosenitem]
//             localStorage.setItem("productsincart" , JSON.stringify( addeditem))
//             var cartproductslength = document.querySelectorAll(".carts_products div p")
//             badge.style.display ="block"
//             badge.innerHTML = cartproductslength.length
//         }
//     }else{
//          window.location = "login.html"
//     }

// var icon1 = document.querySelector(".cart-icon1")
// var icon2 = document.querySelector(".cart-icon2")
// var shoppingcarticon = document.querySelector(".cart-word")
// var cartsproducts = document.querySelector(".carts_products")
// shoppingcarticon.addEventListener("click", opencart)
// function opencart(){
//     if(cartproductDiv.innerHTML!=""){
//         if(cartsproducts.style.display=="block"){
//             cartsproducts.style.display="none"
//         }else{
//             cartsproducts.style.display="block"
//         }
//     }
// }
var userInfo = document.querySelector("#user_info");
var userInfo2 = document.querySelector("#user-info");
var userData = document.querySelector("#user");
var links = document.querySelector("#links");

if (localStorage.getItem("username")) {
    links.remove();
    userInfo.style.display = "flex";
    userInfo2.style.display = "flex";
    userData.innerHTML = "Welcome " + localStorage.getItem("username");
}

var logoutbtn = document.querySelector("#logout");
logoutbtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1000);
});

var allprodcts = document.querySelector(".container-product");
var products = [
    {
        id: 1,
        title: "product : Air Fryer Digital",
        price: "price : 4300 EG",
        Category: "Category : Cooking utensils",
        imageurl: "img/cat_c_banner_bg_m.avif"
    },
    {
        id: 2,
        title: "product : Braun blender",
        price: "price : 2000 EG",
        Category: "Category : Cooking utensils",
        imageurl: "img/0045406_braun-3-in-1-jug-blender-with-chopper-and-grinder-500-watt-white-jb0123wh_550.jpeg"
    },
    {
        id: 3,
        title: "product : Microwave",
        price: "price : 8000 EG",
        Category: "Category : Cooking utensils",
        imageurl: "img/25-900-6-r-750mr-k.avif"
    },
    {
        id: 4,
        title: "product : Gas stove",
        price: "price : 10300 EG",
        Category: "Category : Cooking utensils",
        imageurl: "img/0044715_fresh-gas-cooker-jumbo-5-burners-9060-cm-safety-with-fan-stainless-500016272_550.jpeg"
    },
    {
        id: 5,
        title: "product : Refrigerator",
        price: "price : 22500 EG",
        Category: "Category : Cooling tools",
        imageurl: "img/0POPOPO-512x512.jpg"
    },
    {
        id: 6,
        title: "product : Deep freezer",
        price: "price : 35000 EG",
        Category: "Category : Cooling tools",
        imageurl: "img/download.jpeg"
    },
    {
        id: 7,
        title: "product : Vacuum cleaner",
        price: "price : 3500 EG",
        Category: "Category : Cleaning tools",
        imageurl: "img/download (1).jpeg"
    },
    {
        id: 8,
        title: "product : Screen",
        price: "price : 23000 EG",
        Category: "Category : Smart TV",
        imageurl: "img/4k-50-4t-c50dl6ex.avif"
    },
    {
        id: 9,
        title: "product : Adaptation",
        price: "price : 8400 EG",
        Category: "Category : Cooling tools",
        imageurl: "img/sharp_1.5.jpg"
    }
];

// استخدام localStorage لتخزين المنتجات في السلة
var addeditem = localStorage.getItem("productsincart") ? JSON.parse(localStorage.getItem("productsincart")) : [];
var favoriteItems = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];

// دالة لتغيير حالة القلب عند الضغط عليه
function toggleFavorite(productId) {
    if (!localStorage.getItem("username")) {
        // إذا لم يكن المستخدم مسجلاً دخوله، يتم توجيهه إلى صفحة تسجيل الدخول
        window.location = "login.html";
        return; // منع الاستمرار في تنفيذ الكود
    }
    var product = products.find(p => p.id === productId);
    
    // التحقق إذا كان المنتج موجودًا في المفضلة
    var index = favoriteItems.findIndex(item => item.id === productId);
    
    if (index === -1) {
        // إذا لم يكن المنتج في المفضلة، نضيفه
        favoriteItems.push(product);
    } else {
        // إذا كان المنتج في المفضلة، نزيله
        favoriteItems.splice(index, 1);
    }

    // حفظ المفضلة في localStorage
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
    
    // إعادة رسم العناصر المفضلة
    drawItems();
}

// دالة لرسم المنتجات مع حالة المفضلة
function drawItems() {
    var y = products.map((item) => {
        var inCart = addeditem.some(cartItem => cartItem.id === item.id);  // التحقق إذا كان المنتج في السلة
        var isFavorite = favoriteItems.some(fav => fav.id === item.id); // التحقق إذا كان المنتج مضافًا للمفضلة

        return `
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 rounded-2 paernt">
            <div class="item">
                    <div class="item-image">
                     <img src="${item.imageurl}"  alt="" style="width: 100%;" height="300">
                    </div>
                    <div class="position-relative mt-3">
                     <p>${item.title}</p> 
                     <p>${item.price}</p>
                     <p>${item.Category}</p>
                     <button class="btn ${inCart ? 'btn-danger' : 'btn-primary'} text-light" id="add-${item.id}" onclick="${inCart ? `removeFromCart(${item.id})` : `addtocart(${item.id})`}">
                         ${inCart ? 'Remove from cart' : 'Add to cart'}
                     </button>
                     <i class="fas fa-heart heart ${isFavorite ? 'text-danger' : ''}" onclick="toggleFavorite(${item.id})"></i>
                    </div>
            </div>
        </div>`;
    }).join("");
    allprodcts.innerHTML = y;
}
drawItems();

// ... تابع الكود كما هو مذكور في الصفحة الأولى


function filterProducts() {
    var searchType = document.getElementById("searchType").value;
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var allProductsContainer = document.querySelector(".container-product");

    var filteredProducts = products.filter(product => {
        if (searchType === "name") {
            return product.title.toLowerCase().includes(searchInput);
        } else if (searchType === "category") {
            return product.Category.toLowerCase().includes(searchInput);
        }
    });

    if (filteredProducts.length > 0) {
        var productsHTML = filteredProducts.map(product => {
            return `
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 rounded-2 paernt">
                <div class="item">
                    <div class="item-image">
                        <img src="${product.imageurl}" alt="" style="width: 100%;" height="300">
                    </div>
                    <div class="position-relative mt-3">
                        <p>${product.title}</p> 
                        <p>${product.price}</p>
                        <p>${product.Category}</p>
                        <button class="btn btn-primary text-light" onclick="addtocart(${product.id})">Add to cart</button>
                        <i class="fas fa-heart heart"></i>
                    </div>
                </div>
            </div>`;
        }).join("");

        allProductsContainer.innerHTML = productsHTML;
    } else {
        allProductsContainer.innerHTML = `<p>No products match your search.</p>`;
    }
}

function addtocart(id) {
    if (!localStorage.getItem("username")) {
        // إذا لم يكن المستخدم مسجلاً دخوله، يتم توجيهه إلى صفحة تسجيل الدخول
        window.location = "login.html";
        return; // منع الاستمرار في تنفيذ الكود
    }
    var choosenitem = products.find(item => item.id === id);
    var existingItem = addeditem.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        choosenitem.quantity = 1;
        addeditem.push(choosenitem);
    }

    localStorage.setItem("productsincart", JSON.stringify(addeditem));
    drawItems();
    drawCart();
}

function removeFromCart(id) {
    addeditem = addeditem.filter(item => item.id !== id);
    localStorage.setItem("productsincart", JSON.stringify(addeditem));
    drawItems();
    drawCart();
}

function updateQuantity(id, change) {
    var item = addeditem.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            localStorage.setItem("productsincart", JSON.stringify(addeditem));
            drawCart();
        }
    }
}

function drawCart() {
    var cartproductDiv = document.querySelector(".carts_products div");
    var badge = document.querySelector(".badge");

    cartproductDiv.innerHTML = '';
    addeditem.forEach(item => {
        cartproductDiv.innerHTML += `
            <p id="product-${item.id}" style="background-color: white;">
               ${item.title.replace('product : ', '')} 
                <i class="fas fa-plus" onclick="updateQuantity(${item.id}, 1)" style="color: green;"></i>
                <span id="quantity-${item.id}">${item.quantity || 1}</span>
                <i class="fas fa-minus" onclick="updateQuantity(${item.id}, -1)" style="color: red;"></i>
            </p>
        `;
    });

    badge.style.display = "block";
    badge.innerHTML = addeditem.length;

    if (addeditem.length === 0) {
        document.querySelector(".carts_products").style.display = "none";
    }
}

drawCart();

if (localStorage.getItem("username")) {
    var icon1 = document.querySelector(".cart-icon1");
    var icon2 = document.querySelector(".cart-icon2");
    var shoppingcarticon = document.querySelector(".cart-word");
    var cartsproducts = document.querySelector(".carts_products");
    icon2.style.display = "none";
    shoppingcarticon.addEventListener("click", opencart);

    function opencart() {
        if (cartsproducts.style.display == "none" || cartsproducts.style.display == "") {
            cartsproducts.style.display = "block";
            icon1.style.display = "none";
            icon2.style.display = "block";
        } else {
            cartsproducts.style.display = "none";
            icon1.style.display = "block";
            icon2.style.display = "none";
        }
    } 
} 

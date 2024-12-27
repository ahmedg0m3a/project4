// استرجاع المنتجات من السلة والمفضلات
var productsInCart = localStorage.getItem("productsincart") ? JSON.parse(localStorage.getItem("productsincart")) : [];
var favoriteItems = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];

// المراجع DOM
var allProductsContainer = document.querySelector(".container-product");
var totalPriceContainer = document.querySelector("#total-price");
var favoriteContainer = document.getElementById("favorite-products");
var carouselIndicators = document.getElementById("carousel-indicators");
var carouselInner = document.getElementById("carousel-inner");

// رسم المنتجات في السلة
function drawCartProducts(products) {
    if (!products || products.length === 0) {
        showEmptyCartMessage();
        return;
    }

    allProductsContainer.innerHTML = products.map(item => `
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 paernt-cart" data-id="${item.id}">
            <div class="item">
                <div class="img-hom">
                    <img src="${item.imageurl}" class="img-cart" alt="${item.title}" style="width: 50%;" height="150">
                </div>
                <div class="position-relative mt-3">
                    <p>${item.title.replace('product : ', '')}</p> 
                    <p>${item.price}</p>
                    <p>${item.Category}</p>
                    <div class="d-flex align-items-center mt-2">
                        <i class="fas fa-plus fa-lg text-success me-3 i-cart" onclick="updateQuantity(${item.id}, 1)"></i>
                        <span id="quantity-${item.id}" class="mx-2 fs-5">${item.quantity || 1}</span>
                        <i class="fas fa-minus fa-lg text-danger ms-3 i-cart" onclick="updateQuantity(${item.id}, -1)"></i>
                    </div>
                    <button class="btn text-light btn-danger btn-cart" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>`).join("");
}

// تحديث الكمية
function updateQuantity(id, change) {
    var item = productsInCart.find(product => product.id === id);
    if (item) {
        item.quantity = (item.quantity || 1) + change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            localStorage.setItem("productsincart", JSON.stringify(productsInCart));
            document.getElementById(`quantity-${id}`).innerText = item.quantity;
            calculateTotalPrice();
        }
    }
}

// حذف منتج من السلة
function removeFromCart(id) {
    productsInCart = productsInCart.filter(item => item.id !== id);
    localStorage.setItem("productsincart", JSON.stringify(productsInCart));
    drawCartProducts(productsInCart);
    calculateTotalPrice();
}

// حساب المجموع الكلي
function calculateTotalPrice() {
    var totalPrice = productsInCart.reduce((sum, item) => {
        return sum + parseFloat(item.price.replace("price : ", "").replace("EG", "").trim()) * (item.quantity || 1);
    }, 0);

    totalPriceContainer.innerHTML = `
        <div class="text-center m-auto fw-bold fs-4">
            <span>Total Price :&nbsp; </span>
            <span>${totalPrice.toFixed(2)} EG</span>
        </div>`;
}

// عرض رسالة عند خلو السلة
function showEmptyCartMessage() {
    allProductsContainer.innerHTML = `
        <div class="text-center">
            <p>Your cart is empty!</p>
            <a href="index.html" class="btn btn-primary">Browse Products</a>
        </div>`;
    totalPriceContainer.innerHTML = '';
}

// رسم المفضلات في Carousel
function drawFavoritesCarousel() {
    if (!favoriteItems || favoriteItems.length === 0) {
        carouselInner.innerHTML = `<div class="text-center p-4">No favorite products added yet!</div>`;
        return;
    }

    var chunkSize = 3; // عدد المنتجات في كل شريحة
    var chunks = [];

    for (let i = 0; i < favoriteItems.length; i += chunkSize) {
        chunks.push(favoriteItems.slice(i, i + chunkSize));
    }

    carouselIndicators.innerHTML = '';
    carouselInner.innerHTML = '';

    chunks.forEach((chunk, index) => {
        carouselIndicators.innerHTML += `
            <button type="button" data-bs-target="#favoritesCarousel" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : ''}" aria-label="Slide ${index + 1}"></button>
        `;

        carouselInner.innerHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="row">
                    ${chunk.map(item => `
                        <div class="col-4">
                            <div class="item text-center favorit-item">
                                <img src="${item.imageurl}" alt="${item.title}" class="img-fluid rounded" style="height: 150px; object-fit: cover;">
                                <p class="mt-2 mb-1">${item.title}</p>
                                <p>${item.Category}</p>
                               <p> <i class="fas fa-heart text-danger fa-heart1" onclick="removeFromFavorites(${item.id})"></i></p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    });
}

// إزالة منتج من المفضلة
function removeFromFavorites(productId) {
    favoriteItems = favoriteItems.filter(item => item.id !== productId);
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
    drawFavoritesCarousel();
}

// استدعاء الدوال عند التحميل
drawCartProducts(productsInCart);
drawFavoritesCarousel();
calculateTotalPrice();


// DATABASE & STATE MANAGEMENT
const products = [
    {
        id: 1,
        name: "iPhone 17 Pro Max",
        category: "iPhone",
        price: 18500000,
        oldPrice: 19900000,
        discount: 7,
        isNew: true,
        isTrending: true,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Titanium Desert", hex: "#bfa383", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" },
            { name: "Natural Titanium", hex: "#9d9b96", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Black Titanium", hex: "#38383a", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["256GB", "512GB", "1TB"],
        specs: ["A19 Pro chip", "6.9 dyuym Super Retina XDR", "48MP Pro kamera tizimi", "Titan korpus"]
    },
    {
        id: 2,
        name: "iPhone 17 Pro",
        category: "iPhone",
        price: 16500000,
        oldPrice: 17800000,
        discount: 7,
        isNew: true,
        isTrending: true,
        isDiscount: false,
        image: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Natural Titanium", hex: "#9d9b96", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "White Titanium", hex: "#f0f2f2", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB", "512GB"],
        specs: ["A19 Pro chip", "6.3 dyuym ekran", "Uzoq batareya quvvati"]
    },
    {
        id: 3,
        name: "MacBook Pro 16",
        category: "MacBook",
        price: 28900000,
        oldPrice: 31000000,
        discount: 7,
        isNew: true,
        isTrending: true,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Space Black", hex: "#2e2e30", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" },
            { name: "Silver", hex: "#e3e4e5", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["512GB SSD", "1TB SSD", "2TB SSD"],
        specs: ["M4 Pro / M4 Max chip", "Liquid Retina XDR ekran", "22 soatgacha ish vaqti"]
    },
    {
        id: 4,
        name: "iPad Pro 13",
        category: "iPad",
        price: 15200000,
        oldPrice: 16500000,
        discount: 8,
        isNew: true,
        isTrending: true,
        isDiscount: false,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Silver", hex: "#e3e4e5", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80" },
            { name: "Space Gray", hex: "#6e6e73", img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["256GB", "512GB", "1TB"],
        specs: ["Ultra Retina XDR OLED ekran", "M4 chip", "Nihoyatda yupqa dizayn"]
    },
    {
        id: 5,
        name: "Apple Watch Ultra 2",
        category: "Apple Watch",
        price: 9800000,
        oldPrice: 10500000,
        discount: 6,
        isNew: true,
        isTrending: true,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Titanium Natural", hex: "#9d9b96", img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["64GB"],
        specs: ["49mm titan korpus", "3000 nit yorqinlik", "Dual-frequency GPS"]
    },
    {
        id: 6,
        name: "AirPods Pro 2",
        category: "AirPods",
        price: 3200000,
        oldPrice: 3600000,
        discount: 11,
        isNew: false,
        isTrending: true,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "White", hex: "#ffffff", img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["Standard"],
        specs: ["H2 chip", "Faol shovqinni bekor qilish (ANC)", "Moslashuvchan audio"]
    },
    {
        id: 7,
        name: "Magic Keyboard for iPad",
        category: "Accessories",
        price: 4500000,
        oldPrice: 4900000,
        discount: 8,
        isNew: false,
        isTrending: false,
        isDiscount: false,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Black", hex: "#1d1d1f", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["Standard"],
        specs: ["Trackpad qo'llab-quvvatlashi", "Orqa yoritish", "Aluminiy tayanch"]
    },
    {
        id: 8,
        name: "MagSafe Charger",
        category: "Accessories",
        price: 650000,
        oldPrice: 750000,
        discount: 13,
        isNew: false,
        isTrending: false,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1622445275576-72132576b5d1?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "White", hex: "#ffffff", img: "https://images.unsplash.com/photo-1622445275576-72132576b5d1?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["1m", "2m"],
        specs: ["Tezkor simsiz zaryadlash", "Magnitli biriktirma"]
    }
];

let cart = JSON.parse(localStorage.getItem('apple_cart_andijan')) || [];
let currentUser = JSON.parse(localStorage.getItem('apple_user_andijan')) || null;
let currentCategory = 'All';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateUserUI();
    renderTrendingProducts();
    renderShopProducts(products);
    renderDiscountProducts();
    initModals();
    initCountdown();
});

// TAB SWITCHING
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    document.getElementById(`tab-${tabId}`).classList.add('active');
    
    // Highlight nav link
    if(tabId === 'home') document.querySelector('.nav-link').classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu if open
    document.getElementById('navMenu').classList.remove('active');
}

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// RENDERING PRODUCTS
function formatPrice(price) {
    return price.toLocaleString('uz-UZ') + " so'm";
}

function renderProductCard(product) {
    let colorsHtml = product.colors.map((c, idx) => `
        <span class="color-dot" style="background-color: ${c.hex}" title="${c.name}"></span>
    `).join('');

    return `
        <div class="product-card">
            ${product.discount > 0 ? `<span class="product-badge">-${product.discount}%</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.specs[0]}</p>
            <div class="product-colors">${colorsHtml}</div>
            <div class="product-price-box">
                <span class="current-price">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <div class="product-card-btns">
                <button class="btn-sm-cart" onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-plus"></i> Qo'shish</button>
                <button class="btn-sm-detail" onclick="openProductDetail(${product.id})">Batafsil</button>
            </div>
        </div>
    `;
}

function renderTrendingProducts() {
    const grid = document.getElementById('trendingGrid');
    const trending = products.filter(p => p.isTrending);
    grid.innerHTML = trending.map(p => renderProductCard(p)).join('');
}

function renderShopProducts(list) {
    const grid = document.getElementById('shopGrid');
    if(list.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">Mahsulotlar topilmadi.</p>`;
        return;
    }
    grid.innerHTML = list.map(p => renderProductCard(p)).join('');
}

function renderDiscountProducts() {
    const grid = document.getElementById('discountGrid');
    const discounts = products.filter(p => p.isDiscount);
    grid.innerHTML = discounts.map(p => renderProductCard(p)).join('');
}

// FILTER & SORT SHOP
function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === category.toLowerCase() || (category === 'All' && btn.textContent === 'Barchasi')) {
            btn.classList.add('active');
        }
    });

    if(category === 'All') {
        renderShopProducts(products);
    } else {
        const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        renderShopProducts(filtered);
    }
}

function sortProducts() {
    const sortVal = document.getElementById('sortSelect').value;
    let list = currentCategory === 'All' ? [...products] : products.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());

    if(sortVal === 'price-low') {
        list.sort((a,b) => a.price - b.price);
    } else if(sortVal === 'price-high') {
        list.sort((a,b) => b.price - a.price);
    } else if(sortVal === 'newest') {
        list.sort((a,b) => b.id - a.id);
    }
    renderShopProducts(list);
}

// PRODUCT DETAIL VIEW
let selectedProduct = null;
let selectedColorIndex = 0;
let selectedStorageIndex = 0;

function openProductDetail(productId) {
    selectedProduct = products.find(p => p.id === productId);
    selectedColorIndex = 0;
    selectedStorageIndex = 0;
    renderDetailPage();
    switchTab('detail');
}

function renderDetailPage() {
    const container = document.getElementById('productDetailContainer');
    if(!selectedProduct) return;

    let currentColor = selectedProduct.colors[selectedColorIndex];
    let currentStorage = selectedProduct.storages[selectedStorageIndex];

    let colorBtns = selectedProduct.colors.map((c, idx) => `
        <button class="color-option-btn ${idx === selectedColorIndex ? 'active' : ''}" style="background-color: ${c.hex}" onclick="changeDetailColor(${idx})" title="${c.name}"></button>
    `).join('');

    let storageBtns = selectedProduct.storages.map((s, idx) => `
        <button class="option-btn ${idx === selectedStorageIndex ? 'active' : ''}" onclick="changeDetailStorage(${idx})">${s}</button>
    `).join('');

    let specsList = selectedProduct.specs.map(spec => `<li><i class="fa-solid fa-check" style="color:var(--accent-blue)"></i> <strong>${spec}</strong></li>`).join('');

    container.innerHTML = `
        <div class="detail-wrapper">
            <div class="detail-img-box">
                <img id="detailMainImg" src="${currentColor.img}" alt="${selectedProduct.name}">
            </div>
            <div class="detail-info">
                <h1>${selectedProduct.name}</h1>
                <div class="detail-price-box">
                    <span class="current-price">${formatPrice(selectedProduct.price)}</span>
                    ${selectedProduct.oldPrice ? `<span class="old-price">${formatPrice(selectedProduct.oldPrice)}</span>` : ''}
                    ${selectedProduct.discount > 0 ? `<span class="product-badge" style="position:relative; top:0; left:0;">-${selectedProduct.discount}%</span>` : ''}
                </div>

                <p class="detail-section-title">Rang: <span id="selectedColorName">${currentColor.name}</span></p>
                <div class="options-group">${colorBtns}</div>

                <p class="detail-section-title">Xotira / Hajm:</p>
                <div class="options-group">${storageBtns}</div>

                <ul class="detail-specs">${specsList}</ul>

                <div class="detail-action-btns">
                    <button class="btn-lg-cart" onclick="addCurrentToCart()">Savatchaga qo'shish</button>
                    <button class="btn-lg-buy" onclick="buyNow()">Hozir xarid qilish</button>
                </div>
            </div>
        </div>
    `;
}

function changeDetailColor(index) {
    selectedColorIndex = index;
    document.getElementById('detailMainImg').src = selectedProduct.colors[index].img;
    document.getElementById('selectedColorName').textContent = selectedProduct.colors[index].name;
    document.querySelectorAll('.color-option-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });
}

function changeDetailStorage(index) {
    selectedStorageIndex = index;
    document.querySelectorAll('.option-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });
}

// CART MANAGEMENT
function addToCart(productId) {
    const prod = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId && item.color === prod.colors[0].name && item.storage === prod.storages[0]);
    
    if(cartItem) {
        cartItem.qty += 1;
    } else {
        cart.push({
            id: prod.id,
            name: prod.name,
            price: prod.price,
            image: prod.colors[0].img,
            color: prod.colors[0].name,
            storage: prod.storages[0],
            qty: 1
        });
    }
    saveCart();
    updateCartBadge();
    openCartModal();
}

function addCurrentToCart() {
    if(!selectedProduct) return;
    const currentColor = selectedProduct.colors[selectedColorIndex];
    const currentStorage = selectedProduct.storages[selectedStorageIndex];

    const cartItem = cart.find(item => item.id === selectedProduct.id && item.color === currentColor.name && item.storage === currentStorage);
    
    if(cartItem) {
        cartItem.qty += 1;
    } else {
        cart.push({
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: currentColor.img,
            color: currentColor.name,
            storage: currentStorage,
            qty: 1
        });
    }
    saveCart();
    updateCartBadge();
    openCartModal();
}

function buyNow() {
    addCurrentToCart();
    openCheckoutModal();
}

function saveCart() {
    localStorage.setItem('apple_cart_andijan', JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalCount;
}

function renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    if(cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:30px; color:var(--text-secondary);">Savatchangiz bo'sh.</p>`;
        document.getElementById('cartSubtotal').textContent = "0 so'm";
        document.getElementById('cartDiscount').textContent = "0 so'm";
        document.getElementById('cartTotal').textContent = "0 so'm";
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h5>${item.name}</h5>
                <p>${item.color}, ${item.storage}</p>
                <p><strong>${formatPrice(item.price)}</strong></p>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discountAmt = subtotal * 0.05; // 5% online store discount
    let total = subtotal - discountAmt;

    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('cartDiscount').textContent = "-" + formatPrice(discountAmt);
    document.getElementById('cartTotal').textContent = formatPrice(total);
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if(cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartBadge();
    renderCartItems();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    renderCartItems();
}

// MODAL MANAGEMENT
const searchModal = document.getElementById('searchModal');
const cartModal = document.getElementById('cartModal');
const authModal = document.getElementById('authModal');
const checkoutModal = document.getElementById('checkoutModal');
const successModal = document.getElementById('successModal');

function initModals() {
    document.getElementById('searchBtn').onclick = () => searchModal.style.display = 'flex';
    document.getElementById('closeSearch').onclick = () => searchModal.style.display = 'none';

    document.getElementById('cartBtn').onclick = () => {
        renderCartItems();
        cartModal.style.display = 'flex';
    };
    document.getElementById('closeCart').onclick = () => cartModal.style.display = 'none';

    document.getElementById('userBtn').onclick = () => {
        if(currentUser) {
            alert(`Siz allaqachon tizimdasiz: ${currentUser.firstname} ${currentUser.lastname}`);
        } else {
            authModal.style.display = 'flex';
        }
    };
    document.getElementById('closeAuth').onclick = () => authModal.style.display = 'none';

    document.getElementById('closeCheckout').onclick = () => checkoutModal.style.display = 'none';

    window.onclick = (event) => {
        if(event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };

    // Realtime search
    document.getElementById('searchInput').oninput = (e) => {
        const query = e.target.value.toLowerCase();
        const resultsBox = document.getElementById('searchResults');
        if(!query) {
            resultsBox.innerHTML = '';
            return;
        }
        const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        resultsBox.innerHTML = filtered.map(p => `
            <div class="search-item-card" onclick="searchModal.style.display='none'; openProductDetail(${p.id})">
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <h4>${p.name}</h4>
                    <p>${formatPrice(p.price)}</p>
                </div>
            </div>
        `).join('');
    };
}

function openCheckoutModal() {
    if(cart.length === 0) {
        alert("Savatchangiz bo'sh!");
        return;
    }
    cartModal.style.display = 'none';
    
    let listContainer = document.getElementById('checkoutItemsList');
    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    listContainer.innerHTML = cart.map(item => `
        <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:4px;">
            ${item.name} (${item.color}, ${item.storage}) x ${item.qty} - ${formatPrice(item.price * item.qty)}
        </div>
    `).join('');
    
    document.getElementById('chkTotalPrice').textContent = formatPrice(total * 0.95);
    checkoutModal.style.display = 'flex';
}

function closeSuccessModal() {
    successModal.style.display = 'none';
}

// AUTHENTICATION & FORMS
function switchAuthTab(tab) {
    document.getElementById('loginTabBtn').classList.toggle('active', tab === 'login');
    document.getElementById('registerTabBtn').classList.toggle('active', tab === 'register');
    document.getElementById('loginForm').classList.toggle('active', tab === 'login');
    document.getElementById('registerForm').classList.toggle('active', tab === 'register');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;

    let savedUser = JSON.parse(localStorage.getItem('apple_registered_user_andijan'));
    if(savedUser && (savedUser.email === email || savedUser.phone === email) && savedUser.password === pass) {
        currentUser = savedUser;
        localStorage.setItem('apple_user_andijan', JSON.stringify(currentUser));
        updateUserUI();
        authModal.style.display = 'none';
        alert("Xush kelibsiz, " + currentUser.firstname + "!");
    } else {
        alert("Email/telefon yoki parol noto'g'ri!");
    }
}

function handleRegister(e) {
    e.preventDefault();
    const firstname = document.getElementById('regFirstname').value;
    const lastname = document.getElementById('regLastname').value;
    const phone = document.getElementById('regPhone').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPass = document.getElementById('regConfirmPassword').value;

    if(password !== confirmPass) {
        alert("Parollar mos kelmadi!");
        return;
    }

    const newUser = { firstname, lastname, phone, email, password };
    localStorage.setItem('apple_registered_user_andijan', JSON.stringify(newUser));
    currentUser = newUser;
    localStorage.setItem('apple_user_andijan', JSON.stringify(currentUser));
    
    updateUserUI();
    authModal.style.display = 'none';
    alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
}

function updateUserUI() {
    const display = document.getElementById('userNameDisplay');
    if(currentUser) {
        display.textContent = currentUser.firstname;
    } else {
        display.textContent = "Kirish";
    }
}

// CHECKOUT SUBMISSION
function submitOrder(event) {
    event.preventDefault();
    checkoutModal.style.display = 'none';
    cart = [];
    saveCart();
    updateCartBadge();
    successModal.style.display = 'flex';
}

// COUNTDOWN TIMER FOR DISCOUNTS
function initCountdown() {
    let timeInSec = 3 * 24 * 3600 + 12 * 3600 + 45 * 60;
    setInterval(() => {
        if(timeInSec <= 0) return;
        timeInSec--;
        let days = Math.floor(timeInSec / (3600 * 24));
        let hours = Math.floor((timeInSec % (3600 * 24)) / 3600);
        let minutes = Math.floor((timeInSec % 3600) / 60);
        let seconds = timeInSec % 60;

        const dSpan = document.getElementById('days');
        const hSpan = document.getElementById('hours');
        const mSpan = document.getElementById('minutes');
        const sSpan = document.getElementById('seconds');

        if(dSpan) dSpan.textContent = String(days).padStart(2, '0');
        if(hSpan) hSpan.textContent = String(hours).padStart(2, '0');
        if(mSpan) mSpan.textContent = String(minutes).padStart(2, '0');
        if(sSpan) sSpan.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}
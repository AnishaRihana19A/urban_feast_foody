const menuData = [
    { name: "Shawarma", price: 120, img: "https://via.placeholder.com/200?text=Shawarma" },
    { name: "Paneer Butter Masala", price: 150, img: "https://via.placeholder.com/200?text=Paneer" },
    { name: "Veg Meal", price: 100, img: "https://via.placeholder.com/200?text=Veg+Meal" },
    { name: "Non-Veg Meal", price: 180, img: "https://via.placeholder.com/200?text=Non-Veg+Meal" },
    { name: "Chapathi", price: 40, img: "https://via.placeholder.com/200?text=Chapathi" },
    { name: "Chicken Biryani", price: 200, img: "https://via.placeholder.com/200?text=Biryani" }
];

let cart = [];

function loadMenu() {
    const menuContainer = document.getElementById("menuItems");
    menuData.forEach(item => {
        menuContainer.innerHTML += `
            <div class="menu-item">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div>
                ${item.name} - ₹${item.price}
                <button onclick="removeFromCart(${index})">❌</button>
            </div>
        `;
    });
    document.getElementById("totalPrice").innerText = `Total: ₹${total}`;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully! 🍽");
        cart = [];
        displayCart();
    }
}

// Modal functions
function openModal() {
    document.getElementById("signinModal").style.display = "block";
}
function closeModal() {
    document.getElementById("signinModal").style.display = "none";
}

window.onload = loadMenu;

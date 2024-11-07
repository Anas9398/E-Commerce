let cart = [];

// Add product to cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(productName + " added to cart!");
}

// Display cart items on the cart page
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    cartItems.innerHTML = ""; // Clear the cart display

    cart.forEach((item) => {
        const itemNode = document.createElement("p");
        itemNode.textContent = `${item.productName} - Rs.${item.price}`;
        cartItems.appendChild(itemNode);
        total += item.price;
    });

    document.getElementById("total").textContent = "Total: Rs." + total.toFixed(2);
}

// Checkout function with payment link
function checkout() {
    if (cart.length > 0) {
        alert("Proceeding to checkout!");
        window.location.href = "https://www.paypal.com"; // Replace with your payment link
    } else {
        alert("Your cart is empty!");
    }
}

// Buy Now function to immediately redirect to payment link
function buyNow() {
    alert("Redirecting to payment!");
    window.location.href = "https://www.paypal.me/mullaanas?country.x=IN&locale.x=en_GB"; // Replace with your actual payment link
}

// Ensure cart display updates on page load
window.onload = function() {
    if (document.getElementById("cart-items")) {
        displayCart();
    }
};

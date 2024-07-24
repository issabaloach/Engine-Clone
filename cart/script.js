const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const item = {
            id: e.target.dataset.id,
            name: e.target.dataset.name,
            price: e.target.dataset.price,
            quantity: 1,
        };
        addToCart(item);
    });
});

function addToCart(item) {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = cart.map(item => `
        <div>
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
        </div>
    `).join('');
}

// Call this function on page load to display existing cart items
updateCartDisplay();

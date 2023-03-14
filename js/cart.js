let onpenShopping = document.querySelector('.fa-cart-shopping');
let closeShopping = document.querySelector('.closeShopping');
let cart = document.querySelector('.cart');

onpenShopping.onclick = () => {
    cart.classList.add('active');
}
closeShopping.onclick = () => {
    cart.classList.remove('active');
}


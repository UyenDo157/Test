const iconCart = document.querySelector('.cart-icon');
const cart_side = document.querySelector('.cart-side');
const icon_close = document.querySelector('.icon-close');

iconCart.addEventListener('click', function(){
    cart_side.style.display = 'block';
})
icon_close.addEventListener('click', function(){
    cart_side.style.display = 'none';
})
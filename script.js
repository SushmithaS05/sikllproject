

const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');

searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    cartItemsContainer.classList.remove('active');
});

const cartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.querySelector('.cart-items-container');

cartIcon.addEventListener('click', () => {
    cartItemsContainer.classList.toggle('active');
    searchForm.classList.remove('active');
});


const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const shopNowButton = document.getElementById('js--shop-now-button');
const itemImage = document.querySelector(".item--card");
const Cart = document.getElementById("js--cart");
const Logo = document.getElementById('js--logo');
const scrollers = document.querySelectorAll(".scroller");
const header = document.getElementById("js--header");
const CamiItemImage = document.getElementsByClassName('js--lace-cami-img')
const itemCard = document.querySelector('.item--card');
const soldOut = document.querySelector('.container--soldout');
const login = document.getElementById('js--login');


//ONCLICK FUNCTIONS

login.addEventListener('click', () => {
    window.location.href = "construction.html";
});

Logo.addEventListener('click', () => {
    window.location.href = "index.html";
});

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

itemImage.addEventListener('click', () => {
    window.location.href = "productpage.html";
});

itemCard.addEventListener('click', () => {
    window.location.href = "productpage.html";
});

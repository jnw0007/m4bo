const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const shopNowButton = document.getElementById('js--shop-now-button');
const itemImage = document.querySelector(".item--card");
const Logo = document.getElementById('js--logo');
const scrollers = document.querySelectorAll(".scroller");
const header = document.getElementById("js--header");
const icons = document.querySelector(".logo");
const colorBlue = document.getElementById('js--color-item-blue');
const colorPink = document.getElementById('js--color-item-pink');
const CamiItemImage = document.getElementsByClassName('js--lace-cami-img')
const itemCard = document.querySelector('.item--card');
const soldOut = document.querySelector('.container--soldout');


//SHRINK HEADER ON SCROLL
//window.onscroll = function() {scrollFunction()};
//function scrollFunction() {
//  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//    header.style.height = "6rem";
//    Logo.style.height = "5rem";
//    icons.style.height = "2rem";
//  } else {
//    header.style.height = "12rem";
//    Logo.style.height = "10rem";
//    icons.style.height = "4rem";
//  }
//}

//ONCLICK FUNCTIONS


Logo.addEventListener('click', () => {
    window.location.href = "index.html";
});

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

shopNowButton.addEventListener('click', () => {
    window.location.href = "shop.html";
});

itemImage.addEventListener('click', () => {
    window.location.href = "productpage.html";
});

itemCard.addEventListener('click', () => {
    window.location.href = "productpage.html";
});

//filter
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  const productName = document.getElementsByClassName("productname");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("productname")[0];
    txtValue = productName.textContent || productName.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const productContainer = document.querySelector('.item--container');
const productDummy = document.querySelector('.product_dummy');
const products_array = [
    ["Dog Tee", 22.99, "img/clothingcatalog/Hotzy_Dog_Shirt_Front copy.webp", true],
    ["Hotzy Logo Tee", 21.99, "img/clothingcatalog/Hotzy_Logo_Shirt_Front.webp", false],
    ["Purple Cami", 39.22, "img/clothingcatalog/Hotzy_Cami_Purple_Front.webp", true],
    ["Lace up Cami", 36.33, "img/clothingcatalog/Hotzy_LaceUp_Cami_Blue_Front.webp", false],
    ["Ice Cream Skirt", 23.99, "img/clothingcatalog/Hotzy_IceCream_Skirt_Front.webp", true],
    ["Floral Skirt", 25.99, "img/clothingcatalog/Hotzy_Floral_Skirt_Front.webp", true]
];


for (let i = 0; i < products_array.length; i++) {
    const clone = productDummy.cloneNode(true);
    productContainer.appendChild(clone);
    const available = products_array[i][4];
    clone.getElementsByClassName('item--card')[0].setAttribute("src", products_array[i][2]);
    clone.getElementsByClassName('product_price')[0].textContent = products_array[i][1];
    clone.getElementsByClassName('product_title')[0].textContent = products_array[i][0];
    if (!available){
        clone.classList.add('not-available');
        soldOut.classList.toggle('active');
    }

}
productDummy.remove();
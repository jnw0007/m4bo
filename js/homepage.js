
const productContainer = document.querySelector('.item--container');
const productDummy = document.querySelector('.product_dummy');
const products_array = [
    ["Dog Tee", 22.99, "img/clothingcatalog/Hotzy_Dog_Shirt_Front copy.webp", true, "Tops"],
    ["Hotzy Logo Tee", 21.99, "img/clothingcatalog/Hotzy_Logo_Shirt_Front.webp", true, "Tops"],
    ["Purple Cami", 39.22, "img/clothingcatalog/Hotzy_Cami_Purple_Front.webp", true, "Tops"],
    ["Lace up Cami [SOLDOUT]", 36.33, "img/clothingcatalog/Hotzy_LaceUp_Cami_Blue_Front.webp", false, "Tops"],
    ["Ice Cream Skirt", 23.99, "img/clothingcatalog/Hotzy_IceCream_Skirt_Front.webp", true, "Bottoms"],
    ["Floral Skirt", 25.99, "img/clothingcatalog/Hotzy_Floral_Skirt_Front.webp", true, "Bottoms"]
];


for (let i = 0; i < products_array.length; i++) {
    const clone = productDummy.cloneNode(true);
    productContainer.appendChild(clone);
    const available = products_array[i][3];
    clone.getElementsByClassName('item--card')[0].setAttribute("src", products_array[i][2]);
    clone.getElementsByClassName('product_price')[0].textContent ="$" + products_array[i][1];
    clone.getElementsByClassName('product_title')[0].textContent = products_array[i][0];
}
productDummy.remove();

 shopNowButton.addEventListener('click', () => {
     window.location.href = "shop.html";
 });

//SHRINK HEADER ON SCROLL
//window.onscroll = function () { scrollFunction() };
//function scrollFunction() {
//    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//       header.style.height = "6rem";
//        Logo.style.height = "5rem";
//        login.style.height = "2rem";
//    } else {
//        header.style.height = "12rem";
//        Logo.style.height = "10rem";
//        login.style.fontSize = "4rem";
//    }
//}

shopNowButton.addEventListener('click', () => {
    window.location.href = "shop.html";
});
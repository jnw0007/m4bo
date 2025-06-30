//search
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();

  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  const productName = document.getElementsByClassName("productname");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("productname")[0];
    console.log(a);
    txtValue = productName[i].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//filter

var itemsToFilter = document.querySelectorAll("#myUL li");

var checkBoxes = document.querySelectorAll(".filterSection li input");

for (var i = 0; i < checkBoxes.length; i++) {
  checkBoxes[i].addEventListener("click", filterItems, false);
  checkBoxes[i].checked = true;
}

function filterItems(e) {
  var clickedItem = e.target;

  if (clickedItem.checked == true) {
    hideOrShowItems(clickedItem.value, "hideItem", "showItem");
  } else if (clickedItem.checked == false) {
    hideOrShowItems(clickedItem.value, "showItem", "hideItem");
  } else {

  }
}

function hideOrShowItems(itemType, classToRemove, classToAdd) {
  for (var i = 0; i < itemsToFilter.length; i++) {
    var currentItem = itemsToFilter[i];

    if (currentItem.getAttribute("data-type") == itemType) {
      removeClass(currentItem, classToRemove);
      addClass(currentItem, classToAdd);
    }
  }
}

function addClass(element, classToAdd) {
  var currentClassValue = element.className;

  if (currentClassValue.indexOf(classToAdd) == -1) {
    if ((currentClassValue == null) || (currentClassValue === "")) {
      element.className = classToAdd;
    } else {
      element.className += " " + classToAdd;
    }
  }
}

function removeClass(element, classToRemove) {
  var currentClassValue = element.className;

  if (currentClassValue == classToRemove) {
    element.className = "";
    return;
  }

  var classValues = currentClassValue.split(" ");
  var filteredList = [];

  for (var i = 0; i < classValues.length; i++) {
    if (classToRemove != classValues[i]) {
      filteredList.push(classValues[i]);
    }
  }

  element.className = filteredList.join(" ");
}

///CART
const closeCartBox = document.getElementById('closeCartBox');
const cartBox = document.getElementById('js--cartbox');
Cart.addEventListener('click', () => {
  cartBox.classList.add('active');
});
closeCartBox.addEventListener('click', () => {
  cartBox.classList.remove('active');
});

fetch("json/products.json")

.then(function(response){
  return response.json();
})
.then(function(data){
  localStorage.setItem("products", JSON.stringify(data));
  if(!localStorage.getItem("cart")){
    localStorage.setItem("cart", "[]");
  }
});

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

function addItemToCart(productId){
  let product = products.find(function(product){
    return product.id == productId;
  });

  if(cart.length == 0){
    cart.push(product);
  }else{
    let res = cart.find(element => element.id == productId);
    if(res === undefined){
      cart.push(product);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

addItemToCart(6);

//laat maar ik snap het ook niet meer doei
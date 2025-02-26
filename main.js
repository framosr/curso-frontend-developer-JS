const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
MenuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//quita o pen la funcion inactive dependiendo si la tiene o no latiene
function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

 desktopMenu.classList.toggle('inactive');
}

/*menuEmail.addEventListener("click", toggleDesktopMenu);

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle("inactive");
};*/

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');


  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


  if (!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
  }

  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList =[];

productList.push({
   name: 'bike',
   price:120,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


productList.push({
   name: 'pantalla',
   price:220,
   image:'https://upload.wikimedia.org/wikipedia/commons/e/e2/LG_smart_TV.jpg',
});


productList.push({
   name: 'computadora',
   price:620,
   image:'https://m.media-amazon.com/images/I/51oIgFw0gfL._AC_SL1000_.jpg',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard =  document.createElement('div');
    productCard.classList.add('product-card');
  
    //product = {name, price, image}-> product.mage
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
  
    const productPrice =  document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p')
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart =  document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  
  }

}

renderProducts(productList);
  

// Menu Mobile
const btnMobile = document.getElementById("btn-mobile");
const iconClose = document.querySelector(".icon-close");
const nav = document.querySelector("nav");
const fade = document.getElementById("fade");

function toggleMenu() {
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
iconClose.addEventListener("click", toggleMenu);
fade.addEventListener("click", toggleMenu); //click outside menu

//Add and remove product quantity
const minus = document.getElementById("minus-img");
const plus = document.getElementById("plus-img");

function addOne() {
  quantity++;
  actual.innerHTML = quantity;
}

function removeOne() {
  if (quantity > 0) {
    quantity--;
    actual.innerHTML = quantity;
  }
}

plus.addEventListener("click", addOne);
minus.addEventListener("click", removeOne);

//Cart container
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-container");
const cartNumber = document.querySelector(".cart-number");
const cartBtn = document.querySelector(".product-cart");
const iconDelete = document.querySelector(".icon-delete");
const price = document.querySelector(".sneakers-price");
const totalPrice = document.querySelector(".total-price");
const bigContainer = document.querySelectorAll(".big-container")[0];
const max470 = window.matchMedia("(max-width: 470px)");

function toggleCart() {
  cartContainer.classList.toggle("active");
  if (max470.matches) {
    bigContainer.classList.toggle("hide");
  }
}

function addCart() {
  if (quantity > 0) {
    price.innerText = "125.00 x" + quantity;
    totalPrice.innerText = "$" + quantity * 125;
    cartContainer.classList.add("product-show");
    cartNumber.innerHTML = quantity;
  }
}

function emptyCart() {
  cartContainer.classList.remove("product-show");
  cartNumber.innerHTML = '';
}

cart.addEventListener("click", toggleCart);
cartBtn.addEventListener("click", addCart);
iconDelete.addEventListener("click", emptyCart);

//All Images variables
const bigImage = document.querySelector(".big-image");
const thumbDivs = document.querySelectorAll(".thumb-div");
const main = document.querySelector("main");
const imagesContainer = document.querySelector(".images-container");
const clone = imagesContainer.cloneNode(true);
const fade2 = document.getElementById("fade2");
clone.classList.add("clone-container");
fade2.appendChild(clone);
const bigImage2 = document.querySelectorAll(".big-image")[1];
const thumbDivs2 = document.querySelectorAll(
  ".clone-container > .thumb-container > .thumb-div"
);
const close = document.querySelector(".close");
clone.appendChild(close);
const bigContainer2 = document.querySelectorAll(".big-container")[1];
const next = document.querySelectorAll(".next0")[1];
const previous = document.querySelectorAll(".previous0")[1];
previous.classList.replace("previous0", "previous");
next.classList.replace("next0", "next");
const previous0 = document.querySelectorAll(".previous0")[0];
const next0 = document.querySelectorAll(".next0")[0];
const actual = document.getElementById("actual");
let quantity = 0;
const thumbImages = document.querySelectorAll(".thumb-img");
const thumbImages2 = document.querySelectorAll(
  ".clone-container > .thumb-container > .thumb-div > .thumb-img"
);
thumbImages2.forEach((item) => {
  item.classList.add("thumb-img2");
});
const thumbContainer2 = document.querySelectorAll(".thumb-container")[1];
thumbContainer2.classList.add("thumb-container2");
const max1060 = window.matchMedia("(min-width: 1061px)");

//Open and close lightbox
function toggleImage() {
  if (max1060.matches) {
    main.classList.toggle("active");
  }
}

close.addEventListener("click", toggleImage);
bigImage.addEventListener("click", toggleImage);

//Close lightbox (click outside)
function tImage(event) {
  if (event.target === this) {
    toggleImage();
  }
}
fade2.addEventListener("click", tImage);

//Change big image and current thumb
function changeImage() {
  let c = 0;
  while (c < thumbImages.length) {
    c++;
    if (this.src.includes("-" + c + "-")) {
      let cminus = c - 1;
      if (this.classList.value.includes("thumb-img2")) {
        removeClass2();
        bigImage2.src = `images/image-product-${c}.jpg`;
        thumbDivs2[cminus].classList.add("active");
      } else {
        removeClass1();
        removeClass2();
        bigImage.src = `images/image-product-${c}.jpg`;
        bigImage2.src = `images/image-product-${c}.jpg`;
        thumbDivs[cminus].classList.add("active");
        thumbDivs2[cminus].classList.add("active");
      }
    }
  }
}

//Remove all thumbs classes
function removeClass1() {
  thumbDivs.forEach((item) => {
    item.classList.remove("active");
  });
}
//Remove all thumbs classes (lightbox)
function removeClass2() {
  thumbDivs2.forEach((item) => {
    item.classList.remove("active");
  });
}

thumbImages.forEach((item) => {
  item.addEventListener("click", changeImage);
});

thumbImages2.forEach((item) => {
  item.addEventListener("click", changeImage);
});

//Change previous image
function changePrevious() {
  for (let contador = 0; contador <= 3; contador++) {
    if (thumbContainer2.children[contador].classList.value.includes("active")) {
      thumbContainer2.children[contador].classList.remove("active");
      if (thumbContainer2.children[contador] === thumbContainer2.children[0]) {
        contador = 4;
        console.log(contador);
      }
      thumbContainer2.children[contador - 1].classList.add("active");
      bigImage2.src = `images/image-product-${contador}.jpg`;
    }
  }
}

//Change next image
function changeNext() {
  for (let contador = 3; contador >= 0; contador--) {
    if (thumbContainer2.children[contador].classList.value.includes("active")) {
      thumbContainer2.children[contador].classList.remove("active");
      if (
        thumbContainer2.children[contador + 1] === thumbContainer2.children[4]
      ) {
        contador = -1;
      }
      thumbContainer2.children[contador + 1].classList.add("active");
      bigImage2.src = `images/image-product-${contador + 2}.jpg`;
    }
  }
}

next.addEventListener("click", changeNext);
previous.addEventListener("click", changePrevious);

//Change previous image (mobile)
function changePrevious0() {
  for (let i = 1; i <= 4; i++) {
    if (bigImage.src.includes("-" + i)) {
      if (i === 1) {
        i = 5;
      }
      bigImage.src = `images/image-product-${i - 1}.jpg`;
    }
  }
}

//Change next image (mobile)
function changeNext0() {
  for (let i = 4; i >= 0; i--) {
    if (bigImage.src.includes("-" + i)) {
      if (i === 4) {
        i = 0;
      }
      bigImage.src = `images/image-product-${i + 1}.jpg`;
    }
  }
}

previous0.addEventListener("click", changePrevious0);
next0.addEventListener("click", changeNext0);

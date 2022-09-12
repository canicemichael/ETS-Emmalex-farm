var menuitem = document.getElementById("menuList");
var brownLogo = document.getElementById("brown");
var whiteLogo = document.getElementById("white");
var activeMenu = document.getElementById("activeMenu");
var hamBrown = document.getElementById("hamBrown");
var hamWhite = document.getElementById("hamWhite");
var openWhite = document.getElementById("openW");
var openBrown = document.getElementById("openBr");
var closeWhite = document.getElementById("closeW");
var closeBrown = document.getElementById("closeBr");
var mobileNav = document.getElementById("mobileNav");
var opensub = document.getElementById("add");
var subItem = document.getElementById("subItem");
var minusSign = document.getElementById("minus");
var plusSign = document.getElementById("plusSign");

window.onscroll = function () {
  if (window.pageYOffset >= 90) {
    menuitem.classList.add("sticky-animation");
    brownLogo.style.display = "none";
    activeMenu.style.color = "#813b0d";
    whiteLogo.style.display = "block";
    hamWhite.style.display = "block";
    hamBrown.style.display = "none";
  } else {
    menuitem.classList.remove("sticky-animation");
    brownLogo.style.display = "block";
    hamBrown.style.display = "block";
    activeMenu.style.color = "#813b0d";
    whiteLogo.style.display = "none";
    hamWhite.style.display = "none";
  }
};
openWhite.addEventListener("click", () => {
  mobileNav.style.display = "block";
  openWhite.style.display = "none";
  closeWhite.style.display = "block";
});
openBrown.addEventListener("click", () => {
  mobileNav.style.display = "block";
  openBrown.style.display = "none";
  closeBrown.style.display = "block";
});
closeWhite.addEventListener("click", () => {
  mobileNav.style.display = "none";
  openWhite.style.display = "block";
  closeWhite.style.display = "none";
});
closeBrown.addEventListener("click", () => {
  mobileNav.style.display = "none";
  openBrown.style.display = "block";
  closeBrown.style.display = "none";
});
opensub.addEventListener("click", () => {
  if (subItem.style.display === "none") {
    subItem.style.display = "block";
    minusSign.style.display = "block";
    plusSign.style.display = "none";
  } else {
    subItem.style.display = "none";
    minusSign.style.display = "none";
    plusSign.style.display = "block";
  }
});

// section home

let vid = document.getElementById("myVideo");

function setPlaySpeed() {
  vid.playbackRate = 0.5;
}

setPlaySpeed();

// section our success gallery
let allHomeGallery = document.getElementsByClassName("home_gallery_pht_1");
let allWorkBtn = document.getElementById("all-work-btn");
let platedGrassBtn = document.getElementById("planted-grass-btn");
let feedBtn = document.getElementById("feed-btn");
let medicineBtn = document.getElementById("medicine-btn");
let stableBtn = document.getElementById("stable-btn");
let abbatoirBtn = document.getElementById("abbatoir-btn");

let allWork = document.getElementsById("all-work");
let abbatoir = document.getElementsById("abbatoir");
// let farmCrop = document.getElementsById("farm-crop");
let feed = document.getElementsById("feed");
let medicine = document.getElementsById("medicine");
let stable = document.getElementsById("stable");

let allBtns = document.querySelectorAll("button");

// For each button, register an event listener
// allBtns.forEach(function (elem) {
//   elem.addEventListener("click", function (e) {
//     // On click, remove the MyClass on ALL buttons
//     allBtns.forEach(function (el) {
//       el.classList.remove("MyClass");
//     });

//     // Add the class on clicked one
//     e.target.classList.add("MyClass");

//     // Now pass the data-href to your iframe
//     let theHREFtoOpen = e.target.getAttribute("data-href");
//     console.log(theHREFtoOpen);
//     //document.querySelector("#your-iframe").src = theHREFtoOpen
//   });
// });

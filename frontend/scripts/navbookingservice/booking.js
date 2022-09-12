let LiveDonkeyDetails = document.querySelector(".LiveDonkey");
let DonkeyMeatDetails = document.querySelector(".DonkeyMeat");
let DonkeyMilkDetails = document.querySelector(".DonkeyMilk");

let LiveDonkey = document.querySelector("#live_donkey");
let DonkeyMeat = document.querySelector("#donkey_meat");
let DonkeyMilk = document.querySelector("#donkey_milk");

LiveDonkey.addEventListener("click", () => {
  if (LiveDonkey.checked === true) {
    LiveDonkeyDetails.style.display = "block";
  } else {
    LiveDonkeyDetails.style.display = "none";
  }
});
DonkeyMeat.addEventListener("click", () => {
  if (DonkeyMeat.checked === true) {
    DonkeyMeatDetails.style.display = "block";
  } else {
    DonkeyMeatDetails.style.display = "none";
  }
});
DonkeyMilk.addEventListener("click", () => {
  if (DonkeyMilk.checked === true) {
    DonkeyMilkDetails.style.display = "block";
  } else {
    DonkeyMilkDetails.style.display = "none";
  }
});

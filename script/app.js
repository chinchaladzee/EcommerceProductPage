let CurrentNumber = 1;
let Minus = document.querySelector(".minus");
let SumbitButton = document.querySelector(".button");
let Plus = document.querySelector(".plus");

document.querySelector(".current_number").innerHTML = CurrentNumber;

// Minus
Minus.addEventListener("click", function () {
  if (CurrentNumber == 1) {
    return 0;
  } else {
    CurrentNumber--;
    document.querySelector(".current_number").innerHTML = CurrentNumber;
  }
});

// Plus
Plus.addEventListener("click", function () {
  CurrentNumber++;
  document.querySelector(".current_number").innerHTML = CurrentNumber;
});

// Add card
SumbitButton.addEventListener("click", function () {
  var ProductObject = {
    productName: "Fall Limited Edition Sneakers",
    productImage: "./images/image-product-2-thumbnail.jpg",
    productPrice: "125.00$",
    productNumber: CurrentNumber,
  };
  localStorage.setItem("Item", JSON.stringify(ProductObject));
});

// Active Image
let First = document.querySelector(".first");
let ActiveImage = document.querySelector(".active");
First.src = ActiveImage.src;

// Click Sm Images
let Images = document.querySelectorAll(".sm_imgs img");
Images.forEach(function (past) {
  past.addEventListener("click", function () {
    First.src = past.src;
  });
});

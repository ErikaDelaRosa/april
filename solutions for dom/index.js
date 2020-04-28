// Change the font of the body element.
let body = document.querySelector("body");
body.style.fontFamily = "Arial";
// Center the text of h1 on the page.
let title = document.querySelector(".title");
title.style.textAlign = "center";

let mainSect = document.querySelector(".main");
mainSect.style.display = "flex";
mainSect.style.flexFlow = "row wrap";
mainSect.style.justifyContent = "space-around";
mainSect.style.boxSizing = "border-box";

//The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.
let menuCat = document.querySelectorAll(".category");
console.log(menuCat);
menuCat.forEach(({ style: category }) => {
  category.fontSize = "2rem";
  category.fontStyle = "italic";
  category.borderBottom = "1px solid black";
});

let warning = document.getElementById("warning");
warning.style.fontSize = "2rem";
warning.style.fontStyle = "italic";
warning.style.borderBottom = "1px solid black";

//Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
function colorGen() {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
    // console.log(result);
  }
  return result;
}
//console.log(colorGen());
let foods = document.querySelectorAll(".food-category");

foods.forEach(({ style: item }) => {
  item.backgroundColor = colorGen();
  item.height = "10rem";
});
// Align the food-category lists in a row on desktop. Make sure that the page is responsive and also works on mobile.

// Select all even allergy-info items. Give the even items a different background color.
let allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style: item }, i) => {
  if (i % 2 == 1) {
    item.backgroundColor = "pink";
  }
  item.paddingLeft = "1rem";
});

// Make the allergy-warning appear as a column in the center of the page.

//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.

const burguerButton = document.querySelector("#Hamburger");

const summerCategoryButton = document.querySelector(".summer");
const winterCategoryButton = document.querySelector(".winter");
const springCategoryButton = document.querySelector(".spring");

burguerButton.onclick = function () {
  console.log("click");
  location.assign("../views/home.html");
};

summerCategoryButton.onclick = function () {
  console.log("click");
  location.assign("../views/summerCategory.html");
};

winterCategoryButton.onclick = function () {
  console.log("click");
  location.assign("../views/winterCategory.html");
};

springCategoryButton.onclick = function () {
  console.log("click");
  location.assign("../views/springCategory.html");
};

const burguerButton = document.querySelector("#Hamburger");

burguerButton.onclick = function () {
  console.log("click");
  location.assign("../views/home.html");
};

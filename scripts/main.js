const category = document.querySelector(".categories-item");
const myImage = document.querySelector("img");
console.log(myImage);

// function changeImage() {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-logo.png") {
//     myImage.setAttribute("src", "images/firefox-logo-beta.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-logo.png");
//   }
// }

// myImage.onclick = changeImage;

const images = [
  "images/firefox-logo-beta.png",
  "images/firefox-logo-developer-edition.png",
  "images/firefox-logo-focus.png",
  "images/firefox-logo-glyph.png",
  "images/firefox-logo-nightly.png",
  "images/firefox-logo.png",
];

let index = 0;

function cycleImage() {
  if (index >= images.length - 1) {
    index = 0;
  } else {
    index++;
  }

  myImage.setAttribute("src", images[index]);
}

myImage.onclick = cycleImage;

// const myButton = document.querySelector("#changeUser");
// const myHeading = document.querySelector("h1");

// function setUserName() {
//   const namePrompt = prompt("please enter your name");

//   myHeading.textContent = `mozilla is cool ${namePrompt}`;

//   if (!namePrompt) {
//     setUserName();
//   }
// }

// myButton.onclick = setUserName;

// const books = [
//   {
//     title: "title 1",
//     author: "author 1",
//     alreadyRead: false,
//   },
//   {
//     title: "title 2",
//     author: "author 2",
//     alreadyRead: true,
//   },
// ];

// const bookHeader = document.createElement("h1");
// bookHeader.innerText = "Books";
// document.body.appendChild(bookHeader);

// const bookList = document.createElement("ul");
// for (var i = 0; i < books.length; i++) {
//   let bookItem = document.createElement("li");
//   const bookDescription = document.createTextNode(
//     `${books[i].title} by ${books[i].author}`
//   );
//   bookItem.appendChild(bookDescription);

//   if (books[i].alreadyRead) {
//     bookItem.style.color = "grey";
//   }
//   bookList.appendChild(bookItem);
// }
// document.body.appendChild(bookList);

// const myOtherButton = document.querySelector("#changeOther");

// function changeOtherStyle() {
//   myButton.classList.add("bigButton");
// }

// myOtherButton.onclick = changeOtherStyle;

//

const themeButton = document.querySelector("#displayThemes");

let theme1 = document.createElement("button");
const theme1Text = document.createTextNode(`Theme 1`);
theme1.appendChild(theme1Text);

let theme2 = document.createElement("button");
const theme2Text = document.createTextNode(`Theme 2`);
theme2.appendChild(theme2Text);

function displayThemeMenu() {
  if (!themeButton.hasAttribute("data-display")) {
    document.body.appendChild(theme1);
    document.body.appendChild(theme2);

    themeButton.textContent = "Hide Themes";
  } else {
    document.body.removeChild(theme1);
    document.body.removeChild(theme2);

    themeButton.textContent = "Display Themes";
  }
  themeButton.toggleAttribute("data-display");
}

function changeTheme1() {
  document.querySelector("body").style.backgroundColor = "snow";
}

function changeTheme2() {
  document.querySelector("body").style.backgroundColor = "green";
}

themeButton.onclick = displayThemeMenu;
theme1.onclick = changeTheme1;
theme2.onclick = changeTheme2;

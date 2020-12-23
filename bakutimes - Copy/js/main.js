var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".menu-mobile");
var mainMenu = document.querySelector(".main-menu");
var mainMenuItem = document.querySelectorAll(".mega-menu-item");
var mobile_nav = document.querySelector(".wrap-header-mobile");
var searchForItems = document.querySelector("#search-for--items");
var searchBox = document.querySelector(".menu-search-box");
var overlay = document.querySelector("#overlay");

var mobile_nav = document.querySelector(".wrap-header-mobile");
var navbar = document.querySelector(".navbar");
eventListeners();

function eventListeners() {
  // window.addEventListener("scroll", fixedNavbar);
  window.addEventListener("DOMContentLoaded", activateFirst);
  window.addEventListener("scroll", scrollTop);
  burger.addEventListener("click", openBurger);
  searchForItems.addEventListener("click", openSearchModal);
  mainMenu.addEventListener("click", activateMenuItem);
}
function activateFirst(e) {
  removeActiveClassFromNavbar();
  mainMenuItem[0].classList.add("active");
}
function activateMenuItem(e) {
  removeActiveClassFromNavbar();
  e.target.parentNode.classList.add("active");
  e.preventDefault();
}
function removeActiveClassFromNavbar() {
  mainMenuItem.forEach((e) => e.classList.remove("active"));
}
function openBurger() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  overlay.addEventListener("click", function (e) {
    if (
      burger.classList.contains("active") &&
      nav.classList.contains("active") &&
      overlay.classList.contains("active")
    ) {
      console.log("object");
      burger.classList.remove("active");
      nav.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
}
function openSearchModal(e) {
  searchBox.classList.add("active");
  overlay.classList.toggle("active");
  overlay.addEventListener("click", function (e) {
    if (
      searchBox.classList.contains("active") &&
      overlay.classList.contains("active")
    ) {
      searchBox.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
  e.preventDefault();
}
function fixedNavbar() {
  var top = window.pageYOffset; //3200
  // var whole = document.body.scrollHeight - 520; //3600
  // var restrict_area = top + 1000;
  // console.log(whole);
  // console.log(restrict_area);
  if (top > 140) {
    navbar.classList.add("fixed-active");
    mobile_nav.classList.add("fixed-active");
  } else {
    navbar.classList.remove("fixed-active");
    mobile_nav.classList.remove("fixed-active");
  }
}
function scrollTop() {
  var top = window.pageYOffset;
  var first_section = document.querySelector("#navbar").offsetHeight + 300;
  // console.log(first_section);
  var toTop = document.querySelector("#toTop");

  if (top > first_section) {
    toTop.style.opacity = 1;
  } else {
    toTop.style.opacity = 0;
  }
  toTop.addEventListener("click", scrollTopPage);
}
function scrollTopPage() {
  document.documentElement.scrollTop = 0;
}
/* additional functions */
// function cut_Text(text, num) {
//   let newText = "";
//   if (text.length > num) {
//     newText =
//       text.substr(0, num) +
//       "...." +
//       `<a href="" class="read-more">Read More</a>`;
//   } else {
//     newText = text;
//   }
//   return newText;
// }
// let news_desc = document.querySelector(".news-desc");
// let newText = cut_Text(news_desc.textContent, 440);
// news_desc.innerHTML = newText;

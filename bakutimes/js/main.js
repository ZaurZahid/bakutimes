var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".menu-mobile");
var nav = document.querySelector(".wrap-main-nav");
var mobile_nav = document.querySelector(".wrap-header-mobile");
eventListeners();

function eventListeners() {
  burger.addEventListener("click", openBurger);
  window.addEventListener("scroll", fixedNavbar);
}

function openBurger() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

function fixedNavbar() {
  var top = window.pageYOffset;
  if (top > 90) {
    nav.classList.add("fixed-active");
    mobile_nav.classList.add("fixed-active");
  } else {
    nav.classList.remove("fixed-active");
    mobile_nav.classList.remove("fixed-active");
  }
}

/* additional functions */
function cut_Text(text, num) {
  let newText = "";
  if (text.length > num) {
    newText =
      text.substr(0, num) +
      "...." +
      `<a href="" class="read-more">Read More</a>`;
  } else {
    newText = text;
  }
  return newText;
}
let news_desc = document.querySelector(".news-desc");
let newText = cut_Text(news_desc.textContent, 440);
news_desc.innerHTML = newText;

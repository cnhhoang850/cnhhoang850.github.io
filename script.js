const searchNav = document.getElementById("searchNav");
let searchBar = document.getElementsByClassName("search")[0];
const bar = document.getElementsByClassName("searchBar")[0];
let offSetTop = window.pageYOffset;

function getOffSetBar() {
  let list = searchBar.classList;
  if (searchBar.offsetTop > 0.15 * window.innerWidth) {
    bar.classList.add("shorten");
    searchNav.classList.add("show");
  }
  if (searchBar.offsetTop < 0.15 * window.innerWidth) {
    bar.classList.remove("shorten");
    searchNav.classList.remove("show");
  }
}

window.addEventListener("scroll", getOffSetBar);

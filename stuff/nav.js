var navbar = document.getElementById("navbar");
var sidenavbar = document.getElementById("side-nav-options");
var buttonCloseSideNavbar = document.getElementById("close-button");

function changeNavColorOnScroll() {
  var pixelsGoingDown = window.scrollY;
  const sizeOfNavbar = navbar.clientHeight;
  if (pixelsGoingDown > sizeOfNavbar) {
    navbar.style.background = "black";
    navbar.style.transition = "all 0.1s ease-in";
  }
  else {
    navbar.style.background = "#0a192f";
    navbar.style.transition = "all 0.1s ease-in";
  }
}

function showNavOptions() {
  if (sidenavbar.clientWidth == 0) {
    buttonCloseSideNavbar.style.visibility = "visible";
    sidenavbar.style.width = document.documentElement.clientWidth * 0.3+ "px";
  }
}

function closeNavOptions() {
  if (sidenavbar.clientWidth != 0) {
    buttonCloseSideNavbar.style.visibility = "hidden";
    sidenavbar.style.width = 0 + "px"; 
  }
  console.log("Clicked!");
}

function main() {

  window.onscroll = () => {
    changeNavColorOnScroll();
  }



}


main();


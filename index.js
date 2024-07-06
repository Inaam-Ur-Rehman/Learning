document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("menu");
  let header = document.getElementsByTagName("header")[0];
  let nav = document.getElementsByTagName("nav")[0];

  // show menu

  btn.addEventListener("click", function () {
    let isMobileHeader = header.classList.contains("mobile__header");
    let isMobileNav = nav.classList.contains("mobile__menu");

    if (isMobileHeader && isMobileNav) {
      header.classList.remove("mobile__header");
      nav.classList.remove("mobile__menu");
    } else {
      header.classList.add("mobile__header");
      nav.classList.add("mobile__menu");
    }
  });
});

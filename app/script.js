"use strict";
const togglerBtn = document.querySelector(".toggler");
const navDiv = document.querySelector(".navdiv");

togglerBtn.addEventListener("click", () => {
  // console.log("hjdfhdjfh");
  togglerBtn.classList.toggle("exit");
  navDiv.classList.toggle("show_navmenu");
  if (navDiv.classList.contains("smooth")) {
    setTimeout(() => {
      navDiv.classList.remove("smooth");
    }, 200);
  } else {
    navDiv.classList.add("smooth");
  }
});

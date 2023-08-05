
var mobile_nav = document.getElementById('mobile__nav');
var menu_icon = document.getElementById('menu-bar');
menu_icon.addEventListener('click', () => {
  mobile_nav.classList.toggle("invisible")
  menu_icon.classList.toggle("uil-times")
})

window.addEventListener("resize", () => {
    mobile_nav.classList.add("invisible")
    menu_icon.classList.remove("uil-times")

})

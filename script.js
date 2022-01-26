var menu = document.getElementById("menu");
var headernav = document.getElementById("headernav");
menu.addEventListener("click", function() {
    headernav.classList.toggle("shownav");
});
headernav.addEventListener("click", function() {
    headernav.classList.remove("shownav")
})
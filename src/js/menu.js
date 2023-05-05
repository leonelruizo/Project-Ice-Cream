const menuDesplegable = document.getElementById("menu-desplegable");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", mostrar);
menuClose.addEventListener("click", desaparecer);
function mostrar() {
  menuDesplegable.classList.add("aparece");

}

function desaparecer() {
  menuDesplegable.classList.remove("aparece");

}

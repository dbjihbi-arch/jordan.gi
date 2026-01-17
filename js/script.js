const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>(
hund()
));

function hund(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
}
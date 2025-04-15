import home from "./pages_js/home"
import about from "./pages_js/about"
import menu from "./pages_js/menu"
const cont=document.querySelector("#content");
Cont.innerHTML=home();
const homebtn=document.querySelector('#home')
const menubtn=document.querySelector('#menu')
const aboutbtn=document.querySelector('#about')
homebtn.addEventListener("click",home())
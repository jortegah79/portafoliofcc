import { lista } from "./datos.js";
const d=document,
$boton=d.getElementById("b-menu"),
$menu=d.getElementById("menu"),
$imgButton=d.getElementById("img-btn");

$boton.addEventListener("click",()=>{
  if($menu.classList.contains("abierto")){
    $menu.classList.remove("abierto");
    $imgButton.setAttribute("src","./imagenes/menu1.png");
  }else{
    $menu.classList.add("abierto");
    $imgButton.setAttribute("src","./imagenes/menu2.png");
  }
   
})
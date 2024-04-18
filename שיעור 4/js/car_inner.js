var info = document.getElementById("information");
var forMore  =document.getElementById("forMore");
var forLESS = document.getElementById("forLESS");
forMore.onclick =  function  (){
 info.style.visibility = "visible";
 forMore.style.visibility = "collapse";
 forLESS.style.visibility = "visible";
}
window.onload = forLESS.onclick =  function (){
 info.style.visibility = "collapse"
 forMore.style.visibility = "visible"
 forLESS.style.visibility = "collapse";
}

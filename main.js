let sorting__content = document.querySelector(".sorting__content")
let arrowDown = document.querySelector(".arrowDown")
let invutValue = document.querySelectorAll('input')

inputCount=0
function sifirla(){
    invutValue.forEach(input => input.value="")

}
function dahaChox(){
if( window.innerWidth>1050){
if((inputCount%2)==0 ){
arrowDown.style.transform="rotate(180deg)"
sorting__content.style.height="45rem"
inputCount++
}else{
sorting__content.style.height="11rem" 
arrowDown.style.transform="rotate(0)"
inputCount++
}

}
if( window.innerWidth<1050){
if((inputCount%2)==0 ){
arrowDown.style.transform="rotate(180deg)"
sorting__content.style.height="128rem"
inputCount++
}else{
sorting__content.style.height="11rem" 
arrowDown.style.transform="rotate(0)"
inputCount++
}   
}
}
function heart(){
let flatHeart = document.querySelector(".flatHeart")
}
let navMenu = document.querySelector('.nav')
navCount=0
function menuHideSheow(){
if((navCount%2)==0 ){
navMenu.style.visibility="visible"
navMenu.style.display="flex"
navCount++
}else{
navMenu.style.visibility="hidden"
navMenu.style.display="none"
navCount++
}  
}
let header__menu = document.querySelector('.header__menu')
headerCount=0
function headerMenuShowHide(){
if((headerCount%2)==0 ){

header__menu.style.display="block"
headerCount++
}else{
 header__menu.style.display="none"
    headerCount++
}  
}

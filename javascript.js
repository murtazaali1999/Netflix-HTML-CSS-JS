var content = document.querySelectorAll("#cont > div")
var contentFirstChild = document.querySelector(".first-c")
var scrolled = document.querySelectorAll(".scroll-content > div")

scrolled.forEach(item=> item.addEventListener('click',selectItem));

function selectItem(e){

remBorder();
addHide();

this.classList.add("add-border");

var cont=document.querySelector(`#${this.id}-content`);
if(`#${this.id}-content`=="#tab-1-content"){

content.forEach(items=>items.classList.remove("show-grid"));
content.forEach(items=>items.classList.remove("show"));	
console.log(contentFirstChild);
contentFirstChild.classList.add("f-grid","show-grid")

}
else{

content.forEach(items=>items.classList.remove("show-grid"));
content.forEach(items=>items.classList.remove("show"));

if(document.getElementById("tab-1-content")){
document.querySelector('#tab-1-content').removeAttribute('id');	
}
cont.classList.remove("hide");	

console.log(e.target)
cont.classList.add("show");

}

}

function remBorder(){
 scrolled.forEach(items=>items.classList.remove("add-border"));
}

function addHide(){
content.forEach(items=>items.classList.add("hide"));
}

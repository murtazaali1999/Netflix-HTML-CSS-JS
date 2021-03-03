var content = document.querySelectorAll("#cont > div")
var scrolled = document.querySelectorAll(".scroll-content > div")

scrolled.forEach(item=> item.addEventListener('click',selectItem));

function selectItem(e){

remBorder();
addHide();

this.classList.add("add-border");

var cont=document.querySelector(`#${this.id}-content`);
if(`#${this.id}-content`=="#tab-1-content"){

cont.classList.add("show");
cont.classList.remove("hide");		

cont.id="tab-1-content";

}
else{


cont.classList.remove("hide");		

cont.classList.add("show");

}

}

function remBorder(){
 scrolled.forEach(items=>items.classList.remove("add-border"));
}

function addHide(){
content.forEach(items=>items.classList.add("hide"));
}

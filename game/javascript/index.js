let modoJ=document.getElementById("easy")
let bloco=document.getElementsByClassName("bloco")

function DisplayE (){  
    modoJ.style.display="none"
    bloco[0].style.display="block" 
    bloco[1].style.display="block"
    bloco[2].style.display="block"
 }


modoJ.addEventListener("click",DisplayE)

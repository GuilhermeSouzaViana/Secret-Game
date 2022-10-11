const btnJogar = document.getElementById("play");
const entrada = document.getElementById("entrada");
const sn=document.getElementById("sn")
const impressao = document.getElementById("impressao");
const impressaoErro = document.getElementById("impressaoErro");
const secret=1+Math.floor(Math.random()*100)  
const timer=document.getElementById("timer")
const body = document.getElementById("body")
let erro=0
let gm=new Audio()
gm.src="../audios/easy.mp3"
let yw=new Audio()
yw.src="../audios/youwin.mp3"


const jogar = function(){
  if(entrada.value>secret){
    gm.play()
    erro+=1
  entrada.value = "";
  impressao.style.color="red"
  impressao.innerHTML="Você errou. O número secreto é menor"
  setTimeout(function(){
    impressao.innerHTML=""
  },2000)

}else if(entrada.value<secret){  
  gm.play() 
  erro+=1
  entrada.value = "";
  impressao.style.color="rgb(235, 0, 0)"
  impressao.innerHTML="Você errou. O número secreto é maior"
  setTimeout(function(){
    impressao.innerHTML=""
  },2000)

}else if(entrada.value==secret){
  container.style.backgroundImage = " url(../imagens/youw.jpg)"
  gm.pause()
  yw.play()
  impressao.style.color = "rgb(59, 255, 59)"
  impressao.innerHTML="Parabéns, você acertou o número!"
  impressaoErro.innerHTML="Você precisou de "+ erro +" tentativas para acertar"
  impressaoErro.style.color = "rgb(59, 255, 59)"
  sn.style.display = "none"
  entrada.style.display = "none"
  btnJogar.style.display = "none"
}  
}



btnJogar.addEventListener("click",jogar);




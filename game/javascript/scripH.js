const container=document.getElementById("container")
const btnJogar = document.getElementById("play");
const entrada = document.getElementById("entrada");
const impressao = document.getElementById("impressao");
const sn=document.getElementById("sn")
const impressaoErro = document.getElementById("impressaoErro");
const impressaoTempo = document.getElementById("impressaoTempo");
const secret = 1+Math.floor(Math.random() * 1500)
const timer = document.getElementById("timer")
const body = document.getElementById("body")
let back=new Audio();
back.src="../audios/h.mp3"
let gm=new Audio();
gm.src="../audios/gameoverH.mp3"
let yw=new Audio()
yw.src="../audios/ywinH.wav"
let clock=new Audio()
clock.src="../audios/ctr.ogg"
let set
let time = 30
let tset
let gtime = -1
let erro = 0



function endgame (){
  sn.style.display = "none"
  entrada.style.display = "none"
  btnJogar.style.display = "none"
}

function limpar(){
  impressao.innerHTML = ""
}

function stopWatch() {
  back.play()
  timer.innerHTML = time
  time = time - 1
  gtime = gtime + 1
  if (time < 0) {
    clearInterval(set)
    back.pause()
    clock.pause()
    gm.play()
    container.style.backgroundColor = "black"
    container.style.backgroundImage = " url(../imagens/mario.webp)"
    endgame()
    impressao.style.color = "red"
    impressaoErro.style.color = "red"
    impressaoTempo.style.color = "red"
    impressao.innerHTML = "Tempo esgotado !"
    impressaoTempo.innerHTML = "O numero secreto é: " + secret
    impressaoErro.innerHTML = "Total de erros " + erro
  }else if(time<=10){
    clock.play()
    timer.style.color="red"
  }
}


const jogar = function () {
  if (entrada.value > secret) {
    erro += 1
    entrada.value = "";
    impressao.style.color = "red"
    impressao.innerHTML = "Você errou. O número secreto é menor"
    setTimeout(limpar, 1200)

  } else if (entrada.value < secret) {
    erro += 1
    entrada.value = "";
    impressao.style.color = "rgb(235, 0, 0)"
    impressao.innerHTML = "Você errou. O número secreto é maior"
    setTimeout(limpar, 1200)

  } else if (entrada.value == secret) {
    back.pause()
    clock.pause()
    yw.play()
    clearInterval(set)
    container.style.backgroundImage = " url(../imagens/wario.gif)"
    impressao.style.color = "rgb(59, 255, 59)"
    impressao.innerHTML = "Parabéns, você acertou o número!"
    impressaoErro.innerHTML = "Você precisou de " + (erro+1) + " tentativas"
    impressaoErro.style.color = "rgb(59, 255, 59)"
    impressaoTempo.style.color = "rgb(59, 255, 59)"
    impressaoTempo.innerHTML = "O tempo total gasto foi: " + gtime + " segundos"
     endgame()
  }
}

btnJogar.addEventListener("click", jogar, set = setInterval(stopWatch, 1000));




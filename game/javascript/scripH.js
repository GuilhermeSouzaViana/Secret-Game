const btnJogar = document.getElementById("play");
const entrada = document.getElementById("entrada");
const impressao = document.getElementById("impressao");
const sn=document.getElementById("sn")
const impressaoErro = document.getElementById("impressaoErro");
const impressaoTempo = document.getElementById("impressaoTempo");
const secret = 1+Math.floor(Math.random() * 300)
const timer = document.getElementById("timer")
const body = document.getElementById("body")
let back=new Audio();
back.src="../audios/hard.mp3"
let gm=new Audio();
gm.src="../audios/game_over.mp3"
let yw=new Audio()
yw.src="../audios/youwinH.wav"
let clock=new Audio()
clock.src="../audios/clock.ogg"
let set
let time = 30
let tset
let gtime = -2
let erro = 0




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
    body.style.backgroundImage = " url(../imagens/gmr.jpg)"
    entrada.style.display = "none"
    btnJogar.style.display = "none"
    impressao.innerHTML = "Tempo esgotado !"
    impressaoErro.innerHTML = "O numero secreto é: " + secret
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
    setTimeout(function () {
      impressao.innerHTML = ""
    }, 2000)

  } else if (entrada.value < secret) {
    erro += 1
    entrada.value = "";
    impressao.style.color = "rgb(235, 0, 0)"
    impressao.innerHTML = "Você errou. O número secreto é maior"
    setTimeout(function () {
      impressao.innerHTML = ""
    }, 2000)

  } else if (entrada.value == secret) {
    back.pause()
    clock.pause()
    yw.play()
    clearInterval(set)
    body.style.backgroundImage = " url(../imagens/yw.jpg)"
    impressao.style.color = "green"
    impressao.innerHTML = "Parabéns, você acertou o número!"
    impressaoErro.innerHTML = "Você precisou de " + erro + " tentativas"
    impressaoTempo.innerHTML = "O tempo total gasto foi: " + gtime + " segundos"
    sn.style.display = "none"
    entrada.style.display = "none"
    btnJogar.style.display = "none"
  }
}

btnJogar.addEventListener("click", jogar, set = setInterval(stopWatch, 1000));




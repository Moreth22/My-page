//Jogador da vez
let jogadorVez = "X";
let cont = 0;
let contPont = 0;


const jogadorAtual = document.getElementById("sJogadorDaVez");
const vencedor = document.getElementById("vencedor");
const tabuleiro = document.getElementById("tabuleiro");
const imagemVelha = document.getElementById("img_velha");
const nJogadas = document.getElementById("nJogadas");
const pont = document.getElementById("pont");
  
//Situação do jogo - T - rodando / F - parado
let situacao = true;

const casa1 = document.getElementById("casa1");
const casa2 = document.getElementById("casa2");
const casa3 = document.getElementById("casa3");
const casa4 = document.getElementById("casa4");
const casa5 = document.getElementById("casa5");
const casa6 = document.getElementById("casa6");
const casa7 = document.getElementById("casa7");
const casa8 = document.getElementById("casa8");
const casa9 = document.getElementById("casa9");

  //Informar Jogador da vez
function informarJogador() {
  jogadorAtual.innerText = jogadorVez;
}

  //Alternar jogador
function alterarJogador() {
  if (jogadorVez === "X") {
    jogadorVez = "O";
  } else {
    jogadorVez = "X";
  }
  informarJogador();
}

  //Verificar vitória em X
function verificarVitoriaX() {
  if (casa1.innerText === "X" && casa2.innerText === "X" && casa3.innerText === "X") {
    vencedor.innerText = "Jogador X ganhou!";
    casa1.style.background = "pink";
    casa2.style.background = "pink";
    casa3.style.background = "pink";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa4.innerText === "X" && casa5.innerText === "X" && casa6.innerText === "X") {
    vencedor.innerText = "Jogador X ganhou!";
    casa4.style.background = "pink";
    casa5.style.background = "pink";
    casa6.style.background = "pink";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa7.innerText === "X" && casa8.innerText === "X" && casa9.innerText === "X") {
    vencedor.innerText = "Jogador X ganhou!";
    casa7.style.background = "pink";
    casa8.style.background = "pink";
    casa9.style.background = "pink";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa1.innerText === "X" && casa4.innerText === "X" && casa7.innerText === "X") {
    vencedor.innerText = "Jogador X ganhou!";
    casa1.style.background = "pink";
    casa4.style.background = "pink";
    casa7.style.background = "pink";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa2.innerText === "X" && casa5.innerText === "X" && casa8.innerText === "X") {
    vencedor.innerText = "Jogador X ganhou!";
    casa2.style.background = "pink";
    casa5.style.background = "pink";
    casa8.style.background = "pink";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa3.innerText === "X" && casa6.innerText === "X" && casa9.innerText === "X") {
    vencedor.innerText = "Jogador X ganhou!";
    casa1.style.background = "pink";
    casa2.style.background = "pink";
    casa3.style.background = "pink";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa1.innerText === "X" && casa5.innerText === "X" && casa9.innerText === "X") {
    vencedor.innerText = "Jogador X ganhou!";
    casa1.style.background = "pink";
    casa5.style.background = "pink";
    casa9.style.background = "pink";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa3.innerText === "X" && casa5.innerText === "X" && casa7.innerText === "X") {
    vencedor.innerText = "Jogador X ganhou!";
    casa3.style.background = "pink";
    casa5.style.background = "pink";
    casa7.style.background = "pink";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else { 
    alterarJogador();
  }
}

  //Verificar vitória em O
function verificarVitoriaO() {
  if (casa1.innerText === "O" && casa2.innerText === "O" && casa3.innerText === "O") {
    vencedor.innerText = "Jogador O ganhou!";
    casa1.style.background = "darkBlue";
    casa2.style.background = "darkBlue";
    casa3.style.background = "darkBlue";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa4.innerText === "O" && casa5.innerText === "O" && casa6.innerText === "O") {
    vencedor.innerText = "Jogador O ganhou!";
    casa4.style.background = "darkBlue";
    casa5.style.background = "darkBlue";
    casa6.style.background = "darkBlue";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa7.innerText === "O" && casa8.innerText === "O" && casa9.innerText === "O") {
    vencedor.innerText = "Jogador O ganhou!";
    casa7.style.background = "darkBlue";
    casa8.style.background = "darkBlue";
    casa9.style.background = "darkBlue";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa1.innerText === "O" && casa4.innerText === "O" && casa7.innerText === "O") {
   vencedor.innerText = "Jogador O ganhou!";
    casa1.style.background = "darkBlue";
    casa4.style.background = "darkBlue";
    casa7.style.background = "darkBlue";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa2.innerText === "O" && casa5.innerText === "O" && casa8.innerText === "O") {
    vencedor.innerText = "Jogador O ganhou!";
    casa2.style.background = "darkBlue";
    casa5.style.background = "darkBlue";
    casa8.style.background = "darkBlue";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa3.innerText === "O" && casa6.innerText === "O" && casa9.innerText === "O") {
    vencedor.innerText = "Jogador O ganhou!";
    casa3.style.background = "darkBlue";
    casa6.style.background = "darkBlue";
    casa9.style.background = "darkBlue";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa1.innerText === "O" && casa5.innerText === "O" && casa9.innerText === "O") {
    vencedor.innerText = "Jogador O ganhou!";
    casa1.style.background = "darkBlue";
    casa5.style.background = "darkBlue";
    casa9.style.background = "darkBlue";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else if (casa3.innerText === "O" && casa5.innerText === "O" && casa7.innerText === "O") {
    vencedor.innerText = "Jogador O ganhou!";
    casa3.style.background = "darkBlue";
    casa5.style.background = "darkBlue";
    casa7.style.background = "darkBlue";
    tabuleiro.style.backgroundColor = "black";
    situacao = false;
  } else { 
    alterarJogador();
  }
}

  //Verificar se deu velha
function verificarVelha() {
    if (casa1.disabled === true && casa2.disabled === true && casa3.disabled === true && casa4.disabled === true && casa5.disabled === true && casa6.disabled === true && casa7.disabled === true && casa8.disabled === true && casa9.disabled === true && vencedor.innerText != "Jogador X ganhou!" && vencedor.innerText != "Jogador O ganhou!") {
      vencedor.innerText = "VELHA!";
      imagemVelha.innerHTML = '<img id="velha" src="velha.jpg">';
      tabuleiro.style.backgroundColor = "white";
}
  }

  //Pontuação
function pontuacao() {
  if (situacao === false && cont <=8) {
    pont.innerText = (contPont += 2) + " pontos"; // 8 jogadas totais permite que cada jogador jogue até 4 jogadas, logo, pontua-se 2 pontos ao ganhador.
    travarTabuleiro();
      
} else if 
  (situacao === false && cont <=9 && vencedor.innerText != "VELHA!") {
    pont.innerText = (contPont += 1) + " ponto";
    travarTabuleiro();
  }
}

   //Travando o tabuleiro
function travarTabuleiro() {
  casa1.disabled = true;
  casa2.disabled = true;
  casa3.disabled = true;
  casa4.disabled = true;
  casa5.disabled = true;
  casa6.disabled = true;
  casa7.disabled = true;
  casa8.disabled = true;
  casa9.disabled = true;
  }

function selCasa(event, numCasa) {
  const casa = event.target;

  if (situacao === true) {
  
    if (jogadorVez === "X") {
      /* casa.style.background = "lightGreen"; */
      casa.style.color = "blue";
      casa.innerText = "X"
      verificarVitoriaX();  
    } else if (jogadorVez === "O") {
      /* casa.style.background = "white"; */
      casa.innerText = "O"
      casa.fontSize = "36";
      verificarVitoriaO();
    }
    alert("Você jogou na casa " + numCasa);

     //Número de jogadas
  function contJogadas() {
    casa.target = cont++
    nJogadas.innerText = cont;
    }
  contJogadas();
  }

  //bloqueando a peça
  casa.disabled = true;
   
  verificarVelha();
  pontuacao();
  }



/* function historicoPont {
  
} */

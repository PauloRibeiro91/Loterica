const chalk = require('chalk')
let resultado =[]
let jogo=[]
let contador=0
let premio=0
let premio2=0
let premio3=0
let errado=0
let total =0
function conferir(jogo){
  for(let i=0;i<resultado.length;i++){
    for(let x=0;x<resultado.length;x++){  
           if(jogo[i]== resultado[x]){
            errado=0
            total=total+1
            break
             }
            else {
                errado = errado +1
            }
           }   
            if(errado>0){
                errado=0
            }                
  }
  if(total>10){
    console.log(chalk.green("Jogo "+contador+", acertou "+total+" - "+(Math.round((total/resultado.length)*100))+" % "))
  }
  else{
    console.log(chalk.red("Jogo "+contador+", acertou "+total+" - "+(Math.round((total/resultado.length)*100))+" % "))
  }
  contador=contador+1
      if(total==11){
        premio=premio+5
      }
      if(total==12){
        premio=premio+10
      }
      if(total==13){
        premio=premio+25
      }   
      if(total==14){
        premio2=75
      }
      if(total==15){
        premio3=76
      }
  total=0
}
conferir(jogo1)
console.log("#########################################")
console.log(chalk.yellow("Premio de R$"+premio+",00"))
if(premio2==75){
    console.log("VOCÊ ACERTOU 14 NÚMEROS!")
}
if(premio3==76){
    console.log("LAROYEEE, PARABÉNS VOCÊ REALIZARÁ SEUS SONHOS!")
}

function selecionaJogo(){
  var loteria = document.getElementById("jogo").value;
  var mega = document.getElementById("conferirMega",)
  var loto = document.getElementById("conferirLoto")
  var quina = document.getElementById("conferirQuina")
  function apagar(valor){

  }
  if(loteria == "Quina"){
      loto.style.display = "block";
      mega.style.display = "block";
      quina.style.display = "block";
};
if(loteria == "Lotofacil"){
    loto.style.display = "block";
    mega.style.display = "none";
    quina.style.display = "none";
};
if(loteria == "Mega"){
    loto.style.display = "block";
    mega.style.display = "block";
    quina.style.display = "none";
};
}

function insert(num){
  var loteria = document.getElementById("jogo").value; 
  var tamanho = document.getElementById('primeiro').innerHTML;
  if(tamanho.length<43){ 
  document.getElementById('primeiro').innerHTML=num+","+tamanho;
}
}

function sorteia() {
    return Math.round(Math.random() * 100)
}
function sorteiaMega() {
    var mudar = document.getElementById("qtdjogos").value;
    let list = document.getElementById("lista").innerHTML;
    list = []
    for(let i=0;i<mudar;i++){
    let megaSena = [];
    let numero = 1
    while(numero <= 6) {
        let numeroAleatorio = sorteia()
        let achou = false
        if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {
            for(let i = 0; i < megaSena.length; i++) {
                if(megaSena[i] == numeroAleatorio) {
                    achou = true
                    break
                }
            }
            if(achou == false) {
                megaSena.push(numeroAleatorio)
                numero++
            }
        }
    }
    megaSena.sort((a,b)=>{
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    })
      
    list += "<table>"+"<td>"+(i+1)+"</td>"+"<th>"+megaSena[0]+"</th>"+"<th>"+megaSena[1]+"</th>"+"<th>"+megaSena[2]+"</th>"+"<th>"+megaSena[3]+"</th>"+"<th>"+megaSena[4]+"</th>"+"<th>"+megaSena[5]+"</th>"+"</table>";
    document.getElementById("lista").innerHTML=list;
   conta()
    }
}
function sorteiaLoto() {
    var mudar = document.getElementById("qtdjogos").value;
    let list = document.getElementById("lista").innerHTML;
    list = []
    for(let i=0;i<mudar;i++){
    let Lotofacil = [];
    let numero = 1
    while(numero <= 15) {
        let numeroAleatorio = sorteia()
        let achou = false
        if(numeroAleatorio !== 0 && numeroAleatorio <= 25) {
            for(let i = 0; i < Lotofacil.length; i++) {
                if(Lotofacil[i] == numeroAleatorio) {
                    achou = true
                    break
                }
            }
            if(achou == false) {
                Lotofacil.push(numeroAleatorio)
                numero++
            }
        }
  
    }
    Lotofacil.sort((a,b)=>{
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    })
    
    list += "<table>"+"<td>"+(i+1)+"</td>"+"<th>"+Lotofacil[0]+"</th>"+"<th>"+Lotofacil[1]+"</th>"+"<th>"+Lotofacil[2]+"</th>"+"<th>"+Lotofacil[3]+"</th>"+"<th>"+Lotofacil[4]+"</th>"+"<th>"+Lotofacil[5]+"</th>"+"<th>"+Lotofacil[6]+"</th>"+"<th>"+Lotofacil[7]+"</th>"+"<th>"+Lotofacil[8]+"</th>"+"<th>"+Lotofacil[9]+"</th>"+"<th>"+Lotofacil[10]+"</th>"+"<th>"+Lotofacil[11]+"</th>"+"<th>"+Lotofacil[12]+"</th>"+"<th>"+Lotofacil[13]+"</th>"+"<th>"+Lotofacil[14]+"</th>"+"</table>";
    document.getElementById("lista").innerHTML=list;
    conta()

}
}
function sorteiaQuina() {
    var mudar = document.getElementById("qtdjogos").value;
    let list = document.getElementById("lista").innerHTML;
    list = []
    for(let i=0;i<mudar;i++){
    let Quina = [];
    let numero = 1
    while(numero <= 5) {
        let numeroAleatorio = sorteia()
        let achou = false
        if(numeroAleatorio !== 0 && numeroAleatorio <= 80) {
            for(let i = 0; i < Quina.length; i++) {
                if(Quina[i] == numeroAleatorio) {
                    achou = true
                    break
                }
            }
            if(achou == false) {
                Quina.push(numeroAleatorio)
                numero++
            }
        }
    }
    Quina.sort((a,b)=>{
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    })
   
    list += "<table>"+"<td>"+(i+1)+"</td>"+"<th>"+Quina[0]+"</th>"+"<th>"+Quina[1]+"</th>"+"<th>"+Quina[2]+"</th>"+"<th>"+Quina[3]+"</th>"+"<th>"+Quina[4]+"</th>"+"</table>";
    document.getElementById("lista").innerHTML=list;
    conta()

    }
}
function pegarloteria(){

var loteria = document.getElementById("jogo").value;
if(loteria == "Quina"){
  sorteiaQuina()
}

if(loteria == "Lotofacil"){
    sorteiaLoto()
  }

if(loteria == "Mega"){
    sorteiaMega()
}
var texto1 = document.getElementById("footer")
if(texto1.style.display === "none" ){
    texto1.style.display = "block";
}
}   
function mudandoJogo(){
    var mudar = document.getElementById("jogos")
    if(mudar.style.display === "none"){
    mudar.style.display = "block"
}
};
function mudandoJogo2(){
    var mudar2 = document.getElementById("bolao")
    if(mudar2.style.display === "none"){
    mudar2.style.display = "block";
  }
  
};

function enviar(){
    var enviando = document.getElementById("ok")

    if(enviando.style.display === "none" ){
        enviando.style.display = "block";
    }
   
};

function conta(){
    var mudar = document.getElementById("qtdjogos").value;
    var qtdPessoa = document.getElementById("apostador").value;
    var loteria = document.getElementById("jogo").value;
    const texto = "O Valor do jogo ficou R$"+soma;
    const textolterar = "########  Sorteio "+loteria+"  ########";
    document.getElementById("resultado").innerHTML=textolterar;

    if(loteria == "Quina" || loteria == "Lotofacil"){
        var soma = (parseInt(mudar)*2.5)/parseInt(qtdPessoa);
        if(parseInt(qtdPessoa)!= 1){
        const texto = qtdPessoa+" pessoas entraram no bolão, totalizando R$"+soma+" para cada apostador";
        document.getElementById("texto").innerHTML=texto;
        }
        else{
        const texto = "O Valor do jogo ficou R$"+soma;
        document.getElementById("texto").innerHTML=texto;
        }
    }

    if(loteria == "Mega"){
    var soma = (parseInt(mudar)*4.5)/parseInt(qtdPessoa);
    if(parseInt(qtdPessoa)!= 1){
        const texto = qtdPessoa+" pessoas entraram no bolão, totalizando R$"+soma+" para cada apostador";
        document.getElementById("texto").innerHTML=texto;
        }
        else{
        const texto = "O Valor do jogo ficou R$"+soma;
        document.getElementById("texto").innerHTML=texto;
        }
    }
}

let botaoOk = document.querySelector(".ok")
botaoOk.onclick = pegarloteria;



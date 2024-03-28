var visor = document.getElementById('Display')

function tecla(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "1"
    }else{
    visor.innerHTML += "1"}
    
}
function tecla2(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "2"
    }else{
    visor.innerHTML += "2"}
}
function tecla3(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "3"
    }else{
    visor.innerHTML += "3"}
}
function tecla4(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "4"
    }else{
    visor.innerHTML += "4"}
}
function tecla5(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "5"
    }else{
    visor.innerHTML += "5"}
}
function tecla6(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "6"
    }else{
    visor.innerHTML += "6"}
}
function tecla7(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "7"
    }else{
    visor.innerHTML += "7"}
}
function tecla8(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "8"
    }else{
    visor.innerHTML += "8"}
}
function tecla9(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "9"
    }else{
    visor.innerHTML += "9"}
}
function tecla0(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "0"
    }else{
    visor.innerHTML += "0"}
}
function operador(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "+"
    }else{
    visor.innerHTML += "+"}
}
function operador2(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "-"
    }else{
    visor.innerHTML += "-"}
}
function operador3(){
    if( visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "/"
    }else{
    visor.innerHTML += "/"}
}
function operador4(){
    if(visor.outerText == "undefined"){
        apagarTudo()
        visor.innerHTML += "*"
    }else{
    visor.innerHTML += "*"}
}
function apagar(){
    var telaAnterior = visor.outerText
    let valor =  telaAnterior.slice(0,-1)

    if(visor.outerText == "undefined"){
        apagarTudo()
    }else{
    visor.innerText = `${valor}`
    }
}
function apagarTudo(){
    var telaAnterior = visor.outerText
    let valor =  telaAnterior.split(-1,0)
    
    visor.innerText = `${valor}`
    document.getElementById("Apagar2").style.backgroundColor = " #02ffd5"
    
}
function calculo(){
    var StrToNum = visor.outerText;
    var resultado = eval(StrToNum)
    visor.innerText = resultado

    if(visor.outerText == "undefined" || visor.outerText === StrToNum){
        //nada acontece
    
    }else{
        document.getElementById("Apagar2").style.backgroundColor = "red"
    }
}
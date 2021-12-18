//Variáveis de Ambiente

var quandoVamosNosVerHora = 9
var quandoVamosNosVerDia = 18
var quandoVamosNosVerMes = 12

var atualizacaoDia = 16
var atualizacaoMes = 12

localStorage.setItem("quandoVamosNosVerHora", quandoVamosNosVerHora)
localStorage.setItem("quandoVamosNosVerDia", quandoVamosNosVerDia)

//-----------------------------//

//Footer

document.getElementById('squando').innerHTML = quandoVamosNosVerDia + '/' + quandoVamosNosVerMes
document.getElementById('satualizado').innerHTML = atualizacaoDia + '/' + atualizacaoMes

//-----------------------------//
setInterval(() => {
var data = new Date()

var ms = data.getMilliseconds()
var segundo = data.getSeconds()
var minuto = data.getMinutes()
var hora = data.getHours()
var dia = data.getDate()
var mes = data.getMonth() + 1


//var contaMes = quandoVamosNosVerMes - mes

var contaDia = quandoVamosNosVerDia - dia

var contaHora = quandoVamosNosVerHora - 1 - hora
if(contaHora < 0){
    contaHora = contaHora + 24
    contaDia--
    document.getElementById('dias').innerHTML = contaDia
    if(contaHora <10){
        document.getElementById('horas').innerHTML = '0' + contaHora
    }else{
        document.getElementById('horas').innerHTML = contaHora
    }
}else if(contaHora < 10){
    document.getElementById('horas').innerHTML = '0' + contaHora
}else{
    document.getElementById('horas').innerHTML = contaHora
}


if(contaDia < 10){
    document.getElementById('dias').innerHTML = '0' + contaDia
}else{
    document.getElementById('dias').innerHTML = contaDia
}

if(contaDia = 1){
    document.getElementById('diaPluralidade').innerHTML = "dia:"
}else{
    document.getElementById('diaPluralidade').innerHTML = "dias:"
}



var contaMinuto = 60 - 1 - minuto
if(contaMinuto < 10){
    document.getElementById('minutos').innerHTML = '0' + contaMinuto
}else{
    document.getElementById('minutos').innerHTML = contaMinuto
}

var contaSegundo = 60 - 1 - segundo
if(contaSegundo < 10){
    document.getElementById('segundos').innerHTML = '0' + contaSegundo
}else{
    document.getElementById('segundos').innerHTML = contaSegundo
}

var contaMs = 1000 - 1 - ms
if(contaMs < 100){
    document.getElementById('ms').innerHTML = '0' + contaMs
}else if(contaMs <10){
    document.getElementById('ms').innerHTML = '00' + contaMs
}
else{
    document.getElementById('ms').innerHTML = contaMs
}


//Página Estatísticas
var Esegundos = contaSegundo + (contaMinuto * 60) + (contaHora * 60 * 60) + (contaDia * 60 * 60 * 24)

},1)


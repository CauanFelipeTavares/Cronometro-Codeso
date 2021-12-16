var quandoVamosNosVerHora = localStorage.getItem("quandoVamosNosVerHora")
var quandoVamosNosVerDia = localStorage.getItem("quandoVamosNosVerDia")


setInterval(() => {
var data = new Date()

var ms = data.getMilliseconds()
var segundo = data.getSeconds()
var minuto = data.getMinutes()
var hora = data.getHours()
var dia = data.getDate()
var mes = data.getMonth() + 1

var contaHora = quandoVamosNosVerHora - hora
var contaDia = quandoVamosNosVerDia - dia


var Ehoras = (contaHora + (contaDia * 24) - (minuto/60) - (segundo/60/60)).toFixed(2)
//console.log(Ehoras)
var Eminutos = ((contaHora * 60) + (contaDia * 60 * 24) - minuto - (segundo/60)).toFixed(2)
//console.log(Eminutos)
var Esegundos = (contaHora * 60 * 60) + (contaDia * 60 * 60 * 24) - (minuto * 60) - segundo - (ms/1000)
var EEsegundos = Esegundos.toFixed(0)
//console.log(Esegundos)
var Ems = Esegundos * 1000
//console.log(Ems)

document.getElementById('Ehoras').innerHTML = Ehoras
document.getElementById('Eminutos').innerHTML = Eminutos
document.getElementById('Esegundos').innerHTML = EEsegundos
document.getElementById('Ems').innerHTML = Ems

},1)
const horas = document.querySelector(".horas")
const minutos = document.querySelector(".minutos")
const segundos = document.querySelector(".segundos")
const dataCompleta = document.getElementById ("data-completa")

const relogio = setInterval(function tempo(){
    let dataAtual = new Date();
    let horasAtual = dataAtual.getHours();
    let minutoAtual = dataAtual.getMinutes();
    let segundoAtual = dataAtual.getSeconds();
    

    if (horasAtual < 10) horasAtual = "0" + horasAtual
    if (minutoAtual < 10) minutoAtual = "0" + minutoAtual
    if (segundoAtual < 10) segundoAtual = "0" + segundoAtual

    horas.textContent = horasAtual;
    minutos.textContent = minutoAtual;
    segundos.textContent = segundoAtual;
    
})

let dataAtual = new Date();
const diaDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let diaSemanaEscrito = diaDaSemana[dataAtual.getDay()];

dataCompleta.textContent =  diaSemanaEscrito + ", " + dataAtual.toLocaleDateString('pt-BR', {dateStyle:"medium" });

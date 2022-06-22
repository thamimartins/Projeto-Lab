const KatieLedecky = document.getElementById('resposta-1-3').value;
function perguntaUm() {
    if (KatieLedecky === document.querySelector('input[name="radio-questao-1"]:checked').value){
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-1"]:checked').value + ". Resposta certa!")
    } else {
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-1"]:checked').value + ". Resposta errada.")
    }
}

const MartaVieiradaSilva = document.getElementById('resposta-2-2').value;
function perguntaDois() {
    if (MartaVieiradaSilva === document.querySelector('input[name="radio-questao-2"]:checked').value){
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-2"]:checked').value + ". Resposta certa!")
    } else {
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-2"]:checked').value + ". Resposta errada.")
    }
}

const MariaEsther = document.getElementById('resposta-3-1').value;
function perguntaTres() {
    if (MariaEsther === document.querySelector('input[name="radio-questao-3"]:checked').value){
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-3"]:checked').value + ". Resposta certa!")
    } else {
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-3"]:checked').value + ". Resposta errada.")
    }
}

function inputNome() {
    if (document.getElementById('text-nome').value === "") {
        alert("Por favor, preencha seu nome")
    } else {
    alert("Olá, " + document.getElementById('text-nome').value + "!")
    }
}



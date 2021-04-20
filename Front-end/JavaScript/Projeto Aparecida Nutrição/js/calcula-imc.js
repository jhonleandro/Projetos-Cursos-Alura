// Manipulando o título
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionismo";

// Validando as informações
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var imcTd = paciente.querySelector(".info-imc");
    
    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);
    
    
    if(!pesoEhValido){
        valPeso = false;
        imcTd.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido');
    }
    if(!alturaEhValida){
        valAltura = false;
        imcTd.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido');
    }
    
    if(pesoEhValido && alturaEhValida){
        var imc = calculaIMC(peso, altura);
        imcTd.textContent = imc;

    }
}

function calculaIMC(peso, altura){
    var imc = 0;
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
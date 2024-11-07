function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoDiv = document.getElementById('resultado');
    const valorIMC = document.getElementById('valorIMC');
    const categoriaIMC = document.getElementById('categoriaIMC');

    if (altura && peso) {
        const imc = (peso / (altura * altura)).toFixed(1);
        if (imc === "0.0") {
            alert("Por favor, insira os valores de altura e peso utilizando vírgulas.");
            return;
        } else {
            valorIMC.innerText = imc;
        }

        if (imc < 18.5) {
            categoriaIMC.innerText = "Abaixo do peso";
        } else if (imc < 24.9) {
            categoriaIMC.innerText = "Peso saudável";
        } else if (imc < 29.9) {
            categoriaIMC.innerText = "Sobrepeso";
        } else {
            categoriaIMC.innerText = "Obesidade";
        }
        resultadoDiv.style.display = "block";
    } else {
        alert("Por favor, insira valores válidos para altura e peso.");
    }
}
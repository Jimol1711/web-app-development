const btnSuma = document.getElementById("btn-suma");
const btnResta = document.getElementById("btn-resta");

let n = 0; // contador

const suma = () => {
    n += 1;
    const contadorElement = document.getElementById("contador");
    contadorElement.textContent = n;
};

const resta = () => {
    n -= 1;
    const contadorElement = document.getElementById("contador");
    contadorElement.textContent = n;
};

btnSuma.addEventListener("click", suma);
btnResta.addEventListener("click", resta);

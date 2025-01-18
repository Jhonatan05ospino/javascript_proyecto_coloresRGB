//referecias del DOM
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//actualizar el texto de los parrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo,verde,azul){
    const colorRGB = `rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//para actualizar red 
inputRojo.addEventListener("change",(e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo,verde,azul);
});

//para actualizar verde
inputVerde.addEventListener("change", (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo,verde,azul);
});

//para actualizar azul
// inputAzul.addEventListener("change", (e) => {
//     azul = e.target.value;
//     textoAzul.innerText = azul;
//     actualizarColor(rojo,verde,azul);
// });

//se actualiza la funcion flecha y se utiliza la variable global a diferencia del element target de arriba
inputAzul.addEventListener("change", () => {
    azul = inputAzul.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo,verde,azul);
});

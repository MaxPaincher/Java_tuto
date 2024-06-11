//Calculadora de IMC

// let peso = parseFloat (prompt('ingrese el peso: '));
// let altura = parseFloat (prompt('ingrese la altura: '));

// let imc = peso / (altura*altura);
// console.log('su imc es: ' + imc.toFixed(2));

// if (imc < 18.5) {
//     console.log("Clasificación: Bajo peso");
// } else if (imc >= 18.5 && imc < 25) {
//     console.log("Clasificación: Peso normal");
// } else if (imc >= 25 && imc < 30) {
//     console.log("Clasificación: Sobrepeso");
// } else {
//     console.log("Clasificación: Obesidad");
// }

//Calculadora de descuentos

// function CalcularPrecioFinal (precioOriginal, descuento){
//     let cantDescuento = (precioOriginal*descuento)/100; 
//     let precioFinal = precioOriginal - cantDescuento
//     return precioFinal.toFixed(1);
// }

//     let precioOriginal = parseFloat(prompt('Ingrese el precio: '));
//     let descuento = parseFloat(prompt('Ingrese el porcentaje de dsucento a aplicar: '));
//     let precioFinal = CalcularPrecioFinal (precioOriginal, descuento);

//     alert ("El precio final del producto después de aplicar un descuento del " + descuento + "% es: " + precioFinal + " euros.");

const box = document.getElementById('box');

const btn = document.getElementById('btn');

function btnbox(){
    if (box.style.display === 'none'){
        box.style.display = 'block';
        btn.textContent = 'ocultar caja';
    }else{
        box.style.display = 'none';
        btn.textContent = 'Mostrar caja';        
    }
}
btn.addEventListener ('click', btnbox);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPar = [];
let numerosImpar = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPar.push(numeros[i]);
    } else {
        numerosImpar.push(numeros[i]);
    }
}
//--------------------------------------------------------------------------------------------
console.log(numerosPar);
console.log(numerosImpar);

const animais = ['coruja', 'macaco', 'elefante', 'gorila', 'cachorro'];


for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}
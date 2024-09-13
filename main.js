//ejercicio2 
var a = 5;
var b = 10;
var c = a + b;
console.log("El valor de a es: " + a);
console.log("El valor de b es: " + b);
console.log("El valor de c (a + b) es: " + c);

//ejercicio3
var nombre = prompt("Por favor, ingresa tu nombre:");
console.log("hola "+ nombre + " bienvenido/a!.");
//Operadores lógicos y condicionales
//ejercicio 1
let a = 5; 
let b = 10; 
let mayor;
if (a > b) {
    mayor = a;
} else if (b > a) {
    mayor = b;
} else {
    mayor = 'Ambos valores son iguales';
}
console.log('El mayor valor entre a y b es:', mayor);

//ejercicio 2
let numeroIngresado = prompt("Ingrese un número:");
// Convertir el valor a un número
numeroIngresado = Number(numeroIngresado);
if (numeroIngresado % 2 === 0) {
    console.log(`El número ${numeroIngresado} es par.`);
} else {
    console.log(`El número ${numeroIngresado} es impar.`);
}
//Operadores de asignación y bucles
//ejercicio 1
let num = 10;

//Bucle while para restar 1 en cada iteración
while (num > 0) {
    console.log(num);
    num--;
}
console.log(num);

//ejercicio 2
let numero;

do {
    numero = prompt("Por favor, ingresa un número mayor a 100:");
    numero = Number(numero); 
} while (numero <= 100);
console.log(`El número ingresado es: ${numero}`);

//Funciones de JavaScript
//ejercicio 1

function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(8));   // Debería imprimir: true
console.log(esPar(-5));   // Debería imprimir: false
console.log(esPar(0));   // Debería imprimir: true
console.log(esPar(4));  // Debería imprimir: true

//ejercicio 2

function convertirCelsiusAFahrenheit(celsius) {
    // Convertir de Celsius a Fahrenheit
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

// Ejemplo de uso
let temperaturaCelsius = 19; 
let temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
console.log(`La temperatura en Fahrenheit es: ${temperaturaFahrenheit}`);

//Objetos en JavaScript
//ejercicio 1
let persona = {
    nombre: 'Maria',
    edad: 24,
    ciudad: 'Buenos Aires',
    // Método para cambiar la ciudad
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

// Mostrar las propiedades iniciales
console.log('Propiedades iniciales:');
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);

// Cambiar la ciudad
persona.cambiarCiudad('Cordoba');

// Mostrar las propiedades actualizadas
console.log('\nPropiedades actualizadas:');
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);


//ejercicio 2
let libro = {
    titulo: 'Demian',
    autor: 'Hermann Hesse',
    año: 1919,

    // Método para determinar si el libro tiene más de 10 años
    esAntiguo: function() {
        const añoActual = new Date().getFullYear(); // Obtener el año actual
        const edadLibro = añoActual - this.año; // Calcular la edad del libro
        if (edadLibro > 10) {
            console.log(`El libro "${this.titulo}" es antiguo.`);
        } else {
            console.log(`El libro "${this.titulo}" es reciente.`);
        }
    }
};

// Llamar al método
libro.esAntiguo();

//Arrays
//ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];
for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i] * 2;
    numerosMultiplicados.push(resultado);
}

console.log('Array original:', numeros);
console.log('Array con los números multiplicados por 2:', numerosMultiplicados);

//ejercicio 2

let pares = [];
for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}
console.log('Primeros 10 números pares:', pares);

//ejercicio 7
//(html)



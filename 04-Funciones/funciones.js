//FUNCIONES es una operacion que nos va devolver un resultado


function bienvenido (){
    console.log('bienvenido a la seccion de funcion');
}

bienvenido();


function hola(){
    return 'bienvenidos retorna un msj'
}

var msj = hola();

console.log(msj);

//PARTES DE UNA FUNCION
//FUNCIONES ARGUMENTOS- parametros, codigos, salidas

function cuadradoNumero(a){
  
    var resultado = a *a ;
    return;
}

cuadradoNumero(5);
var valor = cuadradoNumero()

//*********************************************************************************************** */

//EJERCICIOS DE GRADOS
//  FUNCION QUE CONVIERTE DE GRADOS A DAHREWNEIT A CELSIUS
//32F = 0C, 68F = 20C
// C = (F - 32) * 5/9

function convertirFahaCelsius(gradoFah){
     var celsius = (gradoFah - 32) * 5/9;
    return celsius;

   
}

var temperatura = convertirFahaCelsius(32);
var temperatura2 = convertirFahaCelsius(68);
console.log(temperatura);
console.log(temperatura2);

//*********************************************************************************************** */

//FUNCION CALCULAR LA EDAD DE UNA PERSONA APARTIR DEL AÑO DE NACIMIENTO

function calcularEdad(year){

    return 2019 - year;

}

var edad = calcularEdad(1990);

console.log('La edad de la persona es '+ edad);

// plantillas de cadena Template string

var nombre = 'pablo';

console.log(`el nombre es ${nombre}`);

var a = 5;
var b = 10;

console.log(`la suma es = ${a + b}`);






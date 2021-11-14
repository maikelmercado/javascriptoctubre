// calcular cuantos años le faltan a una persona para que se jubile
//una persona jubila a los 65 años de edad 
//enviar como datos a la funcion su años de nacimiento y su nombre

function calcularEdad(year){

    return 2021 - year;

}



function calcularTiempoJubilacion(yearNacimiento, nombre) {
    var edad = calcularEdad(yearNacimiento);
    var jubilacion = 65 - edad;
    console.log(nombre + ' le faltan '+ jubilacion + ' Años para jubilar ');
}

calcularTiempoJubilacion(1990,'pablo');
calcularTiempoJubilacion(1991,'Jose');


//********************************************************************************************************* */
//Funciones como Expresiones:

var prueba = function(){
    console.log('prueba');
}
prueba();

var prueba1 = function(nombre){
    return'hoola ' + nombre;
}

console.log(prueba1('pablo'));



//********************************************************************************************************* */
  
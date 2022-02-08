

/*sentencias if  comparacion ejecuta la instruccion
 si si no else
 //if comparar 
 //=== es igual a



var nombre ='pablo';
var estadocivil = "soltero";

if (estadocivil === "casado"){
    console.log("pablo es soltero");
}else{
    console.log(nombre + ' esta soltero');
}


/********************************************************************************* */ 
/*sentencias Condicionales logicas
AND && TRUE si todo ers tru
|| OR  true si uno es true
! NOT invierte tru/false
*/
/*
var name = 'jose';
var edad  = '6';

if (edad < 12){
    console.log('es un niño');
}else if((edad > 11) && (edad < 18)){
    console.log('es adolecente');
}else if ((edad > 17 )&& (edad < 60)){
    console.log('es un adulto');
}else{
    console.log('es un anciano');
}
*/
/****************************************************************************** */

/*Operador TERNARIO ocuapa 3 operadores en su sentencia */
/*if resumido 

var nombre = 'pablo';
var edad = 17;

edad >= 18 ?  console.log(nombre + ' es mayor de edad') : console.log(nombre +' no es mayor de edad ');

*/

/******************************************************************************************** */

/* SENTENCIA Switch compara el valor de una variable 
EJEMPLO MES DEL AÑO O DIA DE LA SEMANA*/
/*
var mes = 3;

switch(mes){
    case 1:
        console.log('mes de enero');
        break;
    case 2:    
        console.log('mes de febrero');
        break;
    case 3:
        console.log('mes de marzo');
        break;
    default:
        console.log('mes nop considerado');    

}
*/

/****************************   BUCLES  SON 3  ******************************************************************* */

/*SENTENCIAS repetitiva BUCLES repetir codigos "escribe los numeros del  1 al 10" */
/*EJEMPLO PAGAR EL SUELDO DE MUCHOS TRABAJADORES  
se ocupa en arreglos, for dfine una varieble (var i =0; condicion i <=11; iteracion i++)

*/

/*sentencia FOR */
/*
for (var i = 1; i < 11;i++ ){

    console.log(i);
}
*/
//************************************************************************************************ 
//SENTENCIA WHILE  
//sintasis de while 
/*
var i = 1;

while (i<10){
    console.log(i);
    i++;
}
*/


/*SENTENCIA DO WHILE  una vez si o si se tiene que ejecutar   */ 

/*
var  i = 1 ;

do{
    console.log(i);
    i++;
}while(i<=10){

}
*/


/************************* VALORES VERDADEROS Y FALSOS ********************************************** */
/*
var edad;

if(edad){
    console.log("variable esta definida");
}else{
    console.log('variable no definida');
}
*/

//*********************EJERCICIO *************************** */

/*tienes dos alumnos, pablo y maria.
* Pablo tiene las siguientes notas en el curso de javascripts:14,8,16.
* Maria tiene las siguientes notas en el curso de javascripts:12,18,10.
*
*Calcular el promedio de cada alumno, ademas inbdicar quien tiene el promedio superior. e indicar si el alumno esta aprobado, para ellos su promedio
* debe ser superior a 13.
*/


var promediopablo = (14 + 8 + 16 )/3;
var promediomaria = (12 + 18 + 10)/3;

//promedio superior
if (promediopablo > promediomaria){
    console.log("pablo tiene un promedio superior");
}else if (promediopablo > promediomaria){
    console.log("maria tiene un promedio superior");
}else{
    console.log('promedios iguakles');
}

//alumno aprobado
 
for (var i = 0; i <= 2; i++ ){
    if(i === 1){
    console.log('promedio de pablo '+ promediopablo);
    if(promediopablo > 13){
       console.log('pablo aprobo');   
    }else{
        console.log('pablo no aprobo');
    }
    }else {
        console.log('promedio de maria');
        if (promediomaria >13){
        console.log('maria aprobo');
       
    }else{
        console.log('maria no aprobo');
    }
    }
}


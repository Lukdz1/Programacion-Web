//Definición de una función
/*
function hello(){
    console.log('Hola Clase');
    console.log('5IV7');
}

//Llamada a la función
hello();
hello();
hello();
hello();
hello();
*/

//RETORNO DE UNA FUNCIÓN
/*
function hello(){
    return 'Hola Clase';
}

const result = hello()
console.log(result);

hello();
*/

//Función que retorna otra función
/*
function hello(){
    return function (){
        return 'Hola soy la función 2'; 
    }
    
}

console.log(hello()())
*/
/*

//función con parametros
function add(x){
    console.log(x);

}
add(5)
*/

//multiparametros
/*
function add(x,y){

    if (y == undefined) {
        y = 0
    }
    console.log(x+y);

}
add(5,undefined)
*/

//control de error en multiparametros
/*
function add(x,y){

    if (y == undefined) {
        y = 0
    }
    console.log(x+y);

}
add(5,undefined)
*/

//parametro de cadena
/*
function add(name){
    console.log('Hola ' +name);
}
add("Clase JS");
*/

//OBJETOS
/*
const user = {
    nombre:'Lucero',
    apellidoP:'Hernández',
    apellidoM:'Hernández',
    edad:17,
    direccion :{
        calle:'Retama',
        no:21,
        colonia:'San Lorenzo Totolinga',
        municipio:'Naucalpan'
    },
    amigos:[ 'Ariana,David'],
    activo:true
}
    */
    
//consola nombre, apellidoP, apellidoM
//alert activo;
//consola edad
//alert calle, N°, colonia, delegación
//consola amigos

//EJEMPLO MÍO
const user = {
    nombre: 'Lucero',
    apellidoP: 'Hernández',
    apellidoM: 'Hernández',
    edad: 17,
    direccion: {
        calle: 'Retama',
        no: 21,
        colonia: 'San Lorenzo Totolinga',
        municipio: 'Naucalpan'
    },
    amigos: ['Ariana', 'David'],
    activo: true
};

// Concatenación del nombre completo
console.log(user.nombre + ' ' + user.apellidoP + ' ' + user.apellidoM);

// Alerta del estado activo
alert(user.activo);

// Consola de la edad
console.log(user.edad);

// Alerta de la dirección
alert('Calle: ' + user.direccion.calle + ', N°: ' + user.direccion.no + ', Colonia: ' + user.direccion.colonia + ', Municipio: ' + user.direccion.municipio);

// Consola de amigos
console.log(user.amigos.join(', '));







// Arreglos 
/*
let array = ["dato1",1,Boolean];
console.log("tamaño array: " + array.length);
array.push("insert nuevo val");
console.log(array[3]);
console.log("nuevo tamaño array: " + array.length);
console.log(array[3]);
*/

/*
5*1 = 5
5*2 = 10
5*3 = 15
5*4 = 20
5*5 = 25
5*6 = 30
fin del arreglo valor de la posición = 30

length
push
for
*/

//TRABAJO EN CLASE

let tabla_5 = [];
for (let i = 1; i <= 10; i++) {
    let resultado = 5 * i;
    tabla_5.push("5 * " + i + " = " + resultado); 
}

for (let i = 1; i <= 6; i++) {
    console.log(tabla_5[i - 1]);
}
console.log("fin del arreglo valor de la posición 30: " + tabla_5.length);



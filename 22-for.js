// for (variable; codinción; incremento) {
//     codigo a ejecutar   
// }



let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

let sumatoria = [8, 12, 25, 9];
let suma = 0;

for (let index = 0; index < sumatoria.length; index++) {
    suma += sumatoria[index];   
}

console.log(suma);

let suma2 = 0;

for (let index = 1; index <= 4; index++) {
    suma2 += index;   
}

console.log(suma2);
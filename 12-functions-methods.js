function suma(a, b) {
    return a + b
}

suma(3, 5)

console.log(typeof suma)
// function

// Capacidades que tienen las funciones al igual que otros objetos


// 1. Pasar funciones como argumentos -> callback (una función que se pasa como argumentos)
function a() { }
function b(a) { }
b(a)

// Retornar funciones
function a() {
    function b() { }
    return b
}

// Asignar funciones  variables -> Expresión de función (Declaracion de función cuando se hacela función normal)
const a = function () { }

// Tener propiedades y métodos

function a() { }
const obj = {}
a.call(obj)

// Anidar funciones -> Nested functions
function a() {
    function b() {
        function c() { }
        c()
    }
    b()
}
a()

// Alamcenar funciones en objetos (Metodo)

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage() {
        console.log('Up')
    }
}

rocket.launchMessage()
// Creación de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simples"
const terceraOpcion = `Comillas simples`

// 1. Concatenación: Opción +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es ' + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi dirección completa es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

// 2. Concatenación: Template Literals
const nombre = 'Camilo'
const pais = 'Colombia'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// 3. Concatenación: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'Argentina'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

// 4. Concatenación: concat()
const hobbie1 = 'correr'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')
console.log(hobbies)

// Caracteres de escape
// const whatDoIDo = 'I'm Software Engineer'

// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer"

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m Software Engineer'

// 3. Template literals
const escapeComillaInvertida = `I'm Software Engineer`

// Escritura de Strings Largos
const poema = 'Las rosas son rojas,\n' +
                'Las violetas son azules,\n' +
                'Caracter inesperado,\n' +
                'En la línea 86.'
                
console.log(poema)

const poema2 = 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la lí­nea 86.'

console.log(poema2)

const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la lí­nea 86.`

console.log(poema3)
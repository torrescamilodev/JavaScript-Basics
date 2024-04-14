# JavaScript-Basics

### Fundamental and basic concepts of JavaScript

## Formas de ejecutar JavaScript:

- Consola del navegador

- Etiqueta <script> de HTML

```html
<script>
    console.log('Hello World');
</script>
```
- Archivos JS externos

```html
<script src="hello-world.js"></script>
```

- Node.js

```
node hello-world.js
```

## Anatomía de una variable

variables (imaginar como cajas) almacenan datos (información), en JS las variables se definen con ***let*** y se le pone un nombre descriptivo (evitar ambigüedades)

```javaScript
//La primera variable tiene un nombre descriptivo, la segunda variable no y es ambiguo. 
let nombreDelUsuario = 'Lionel Messi';
let ndu = 'Lionel Messi';
```

nombreDelUsuario es la ***declaración*** (creación de la variable o caja) y después del = la ***asignación*** (lo que se está almacenando en la variable), lo ideal es que las variables siempre vayan al inicio del código, en orden una debajo de la otra.

***let*** para variables y ***const*** para constantes.

### Tipos de datos: Mutabilidad e inmutabilidad

- Primitivos: Inmutables (Se pasan por valor)
- Complejos: Mutables (Se pasan por referencia)

### Lenguajes de programación

- Compilados: C, C++, Rust, Go: Cosas que pasan antes de ejecución - Chequeo estático de tipos
- Interpretados: JS, Python, Ruby, PHP: Suceden a medidad que se va ejecutando - Chequeo dinámico de tipos

### Funciones

¿Que quiero? Salida (output)
¿Que datos tengo? Entrada (input)

```javaScript
function suma (a, b) {
    return a + b
}

suma (3, 5)
```

function: palabra clave (se indica que estamos creando una función)
suma: nombre de la función (camelCase)
(a, b): parámetro(s), entradas del codigo son opcionales
{} (llaves): Se indica que se va a empezar a escribir el codigo dentro de ese espacio
return a + b: Cuerpo de la función, puede retornar algo o ejecutar un codigo por dentro
suma (3, 5): llamado de la función

Las funciones tambien tiene propiedades, metodos, cotexto de ejecución

### Implicaciones de duplicar código

- Mantenimiento difícil
- Aumneto de la complejidad
- Mayor probabilidad de errores
- Dificultad de escalar
- Tiemplo y recursos
- Violación de principios de diseño (DRY)
- Dificultad en la indetificación de errores

### 10 Tipos de funciones

En JavaScript, los tipos de funciones pueden clasificarse de varias maneras según su comportamiento y uso. Aquí tienes una lista de algunos tipos comunes de funciones en JavaScript:

// 1. Funciones Declarativas (o con nombre):

Se definen con la palabra clave function
Pueden ser referenciadas antes de su declaración.

```javaScript
function suma(a, b) { return a + b; }
```

// 2. Funciones Expresivas (o anónimas):

Se asignan a variables.
A menudo se utilizan para asignar funciones como valores a variables.

```javaScript
const suma = function(a, b) { return a + b; };
```

// 3. Funciones Flecha:

Introducidas en ES6, proporcionan una sintaxis más concisa.
Tienen un comportamiento ligeramente diferente con respecto al valor de this.

```javaScript
const suma = (a, b) => a + b;
```

// 4. Funciones Constructoras:

Utilizadas para crear objetos con new.
Utilizan this para asignar propiedades al nuevo objeto.

```javaScript
function Persona(nombre, edad) { this.nombre = nombre; this.edad = edad; }
const persona1 = new Persona('Juan', 25);
```

// 5. Funciones de Orden Superior (Higher-Order Functions):

Aceptan funciones como argumentos o devuelven funciones.
Ejemplos incluyen map, filter, reduce.

// 6. Funciones Recursivas:

Llamadas a sí mismas durante la ejecución.
Útiles para problemas que se pueden dividir en subproblemas más pequeños.

```javaScript
function factorial(n) { if (n === 0 || n === 1) { return 1; } else { return n * factorial(n - 1); } }
```

// 7. Funciones Anidadas (Nested Functions):

Definidas dentro de otra función.
Pueden acceder a las variables de la función contenedora (closure).

```javaScript
function exterior() {
    let variableExterior = 'Exterior';
    function interior() {
        console.log(variableExterior);
    }
    interior();
}
exterior();
```

// 8. Métodos de Objeto:

Funciones que son propiedades de objetos y se llaman métodos cuando se invocan en el contexto de ese objeto.

```javaScript
const objeto = { metodo: function() {
    console.log('Hola desde el método');
    }
};
objeto.metodo();
```

// 9. Funciones Asincrónicas:

Utilizadas para manejar operaciones asíncronas con callbacks, Promesas o Async/Await.

```javaScript
async function fetchData() { const response = await fetch('<https://api.example.com/data>');
const data = await response.json(); console.log(data); }
```

// 10. Funciones Puras:

Dado el mismo conjunto de entradas, siempre producirán el mismo resultado sin causar efectos secundarios observables.
No dependen de ni modifican estados externos.

```javaScript
function suma(a, b) { return a + b; }
```

Estas son algunas de las categorías comunes de funciones en JavaScript. Es importante comprender estas diferentes formas de definir y utilizar funciones para escribir código más claro y eficiente.

### Operadores de comparación

***== (Igualdad):*** Evalúa si los valores son iguales con conversión de tipo. Devuelve true.
***=== (Igualdad estricta):*** Evalúa si los valores son iguales y del mismo tipo. Devuelve false.
***!= (Desigualdad):*** Evalúa si los valores no son iguales con conversión de tipo. Devuelve false.
***!== (Desigualdad estricta):*** Evalúa si los valores no son iguales y no son del mismo tipo. Devuelve true.
***>(Mayor que):*** Evalúa si el valor de la izquierda es mayor que el de la derecha. Devuelve true.
***<(Menor que):*** Evalúa si el valor de la izquierda es menor que el de la derecha. Devuelve false.
***>= (Mayor o igual que):*** Evalúa si el valor de la izquierda es mayor o igual que el de la derecha. Devuelve true.
***<= (Menor o igual que):*** Evalúa si el valor de la izquierda es menor o igual que el de la derecha. Devuelve false.

```javaScript
const a = 10;
const b = 20;
const c = "10"

a == b; //false
a === c; //false
a != b; //true
a !== c; //true
a > b; //false
a <= b; //true
a >= b; //false
a > c; //false
```

### Operadores Lógicos

Los operadores lógicos se utilizan para determinar la lógica entre variables o valores. Estos operadores siempre devuelven un valor booleano, es decir, true (verdadero) o false (falso).

***&& (AND):*** Devuelve true si ambos operandos son verdaderos.
***|| (OR):*** Devuelve true si al menos uno de los operandos es verdadero.
***! (NOT):*** Devuelve true si el operando es falso y false si el operando es verdadero.

```javaScript
let a = true;
let b = false;

console.log(a && b); // Imprime: false
console.log(a || b); // Imprime: true
console.log(!a);     // Imprime: false
console.log(!b);     // Imprime: true
```
### Estructuras condicionales - Estructuras de control

***If - Ejecución Condicional:*** La declaración if es una estructura de control que permite que el programa tome decisiones basadas en ciertas condiciones. Si la condición se cumple (es decir, si el resultado es true), entonces se ejecuta un bloque de código. Si la condición no se cumple (es decir, si el resultado es false), el bloque de código se omite.

***For:*** Un bucle "for" es una estructura de control que te permite repetir un bloque de código un cierto número de veces.

***ForEach:*** Tiene una sintaxis mas corta y explicita, se genera un función la cual se va a repetir en cada uno de los elementos que existan adentro del iterable por ejemplo una lista. Es un simplificación

***For of:*** Objetos iterables.

***For in:*** Objetos enumerables.
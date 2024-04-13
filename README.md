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
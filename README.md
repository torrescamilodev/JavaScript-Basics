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
# JavaScript-Basics

## Fundamental and basic concepts of JavaScript

### Formas de ejecutar JavaScript:

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

### Anatomía de una variable

variables (imaginar como cajas) almacenan datos (información), en JS las variables se definen con ***let*** y se le pone un nombre descriptivo (evitar ambiguedades)

```javaScript
// la primera variable tiene un nombre descriptivo, la segunda variable no y es ambiguo. 
let nombreDelUsuario = 'Lionel Messi';
let ndu = 'Lionel Messi';
```

listaUsuarios es la ***declaración*** (creación de la variable o caja) y despues del = la ***asignación*** (lo que se esta almecenando en la variable), lo ideal es que las variables siempre vayan al inicio del codigo, en orden una de bajo de la otra.

***let*** para variables y ***const*** para constantes.


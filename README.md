# Mini LAB | JS Map, Filter & Reduce (TDD con Jasmine)

## Introduccion

Vas a practicar los metodos de arrays `.map()`, `.filter()` y `.reduce()` con **TDD (Test-Driven Development)**. Tienes una suite de tests en Jasmine que al principio estan todos en rojo. Tu trabajo es escribir el codigo necesario para ponerlos todos en verde.

```
 ________________________________________
/ Rojo -> Verde -> Refactor.             \
| Esa es la vida del TDD.               |
\ Y hoy empiezas a vivirla.             /
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Setup

1. Haz fork de este repo y clonalo en tu maquina
2. Abre `index.html` en el navegador — veras Jasmine con todos los tests en **rojo**
3. Trabaja en `src/functions.js` completando las funciones
4. Cada vez que guardes, recarga el navegador para ver si tus tests pasan

> :bulb: **Consejo:** no intentes resolver todas a la vez. Ve iteracion por iteracion.

> :warning: **Importante:** no modifiques los tests. Si un test falla, el problema esta en tu funcion, no en el test.

## Estructura

```
mini-lab-js-map-filter-reduce/
├── index.html              ← SpecRunner (abre esto en el navegador)
├── src/
│   └── functions.js        ← Aqui escribes tu codigo
└── tests/
    └── functions.spec.js   ← Tests (NO modificar)
```

## Iteraciones

### Iteracion 1 — `.map()`

El metodo `.map()` recorre un array y devuelve un **nuevo array** con el resultado de aplicar una funcion a cada elemento.

```javascript
const result = array.map(function (element) {
  return // ... transformacion del elemento
});
```

Completa: `doubleNumbers`, `getNames`, `formatPrices`, `getInitials`

<details>
<summary>Pistas</summary>

- **doubleNumbers:** `.map()` con `num * 2`
- **getNames:** `.map()` con `person.name`
- **formatPrices:** `.map()` con `.toFixed(2)` y concatena `"$"`
- **getInitials:** `.map()`, separa con `.split(" ")`, toma `[0]` de cada palabra, une con `"."`

</details>

---

### Iteracion 2 — `.filter()`

El metodo `.filter()` recorre un array y devuelve un **nuevo array** solo con los elementos que cumplan una condicion.

```javascript
const result = array.filter(function (element) {
  return // ... condicion booleana
});
```

Completa: `getEvenNumbers`, `getExpensiveProducts`, `getActiveUsers`, `getLongWords`

<details>
<summary>Pistas</summary>

- **getEvenNumbers:** `num % 2 === 0`
- **getExpensiveProducts:** `product.price >= minPrice`
- **getActiveUsers:** `user.active`
- **getLongWords:** `word.length >= minLength`

</details>

---

### Iteracion 3 — `.reduce()`

El metodo `.reduce()` recorre un array y **acumula** todos los valores en uno solo.

```javascript
const result = array.reduce(function (acc, element) {
  return // ... nuevo valor del acumulador
}, valorInicial);
```

Completa: `sumAll`, `countOccurrences`, `flattenArrays`, `getOldest`

<details>
<summary>Pistas</summary>

- **sumAll:** valor inicial `0`, devuelve `acc + num`
- **countOccurrences:** valor inicial `{}`, incrementa o inicializa a `1`
- **flattenArrays:** valor inicial `[]`, devuelve `acc.concat(innerArray)`
- **getOldest:** compara `acc.age` con `person.age`

</details>

---

### Iteracion 4 — Combinando 2 metodos

Encadena metodos:

```javascript
const result = array
  .filter(function (el) { return /* condicion */ })
  .map(function (el) { return /* transformacion */ });
```

Completa: `getTotalExpensive`, `getAdultNames`, `getSquaresOfEvens`

<details>
<summary>Pistas</summary>

- **getTotalExpensive:** `.filter()` los caros, luego `.reduce()` para sumar
- **getAdultNames:** `.filter()` por `age >= 18`, luego `.map()` para extraer `name`
- **getSquaresOfEvens:** `.filter()` pares, luego `.map()` con `num ** 2`

</details>

---

### Bonus — Combinando los 3 metodos

Completa: `getDiscountedTotal`, `getPassingSummary`

<details>
<summary>Pistas</summary>

- **getDiscountedTotal:** `.filter()` por categoria → `.map()` aplica descuento → `.reduce()` suma. Redondea con `Math.round(total * 100) / 100`
- **getPassingSummary:** `.filter()` por `grade >= 5` → `.map()` nombres → formatea con comas y "y". Usa `.slice()` y `.join()` para el formato

</details>

---

## Resultado esperado

Cuando todo este completo, Jasmine mostrara: **38 specs, 0 failures**

Happy coding! :heart:

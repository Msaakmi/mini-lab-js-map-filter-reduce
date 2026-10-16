// ===========================================
// ITERACION 1 — .map()
// ===========================================

// 1.1 Recibe un array de numeros y devuelve un nuevo array con cada numero multiplicado por 2
function doubleNumbers(numbers) {
  // Tu codigo aqui
  return numbers.map((number) => number * 2);

}

// 1.2 Recibe un array de objetos { name, age } y devuelve un array solo con los nombres
function getNames(people) {
  // Tu codigo aqui
  return people.map(p => p.name)
  
}

// 1.3 Recibe un array de numeros (precios) y devuelve un array de strings con formato "$X.XX"
// Ejemplo: [10, 5.5, 3.141] -> ["$10.00", "$5.50", "$3.14"]
function formatPrices(prices) {
  // Tu codigo aqui
  return prices.map(price => `$${price.toFixed(2)}`)
}

// 1.4 Recibe un array de strings con nombres completos ("Ada Lovelace")
// y devuelve un array con las iniciales ("A.L.")
function getInitials(names) {
  // Tu codigo aqui
  return names.map(name => name.split(" ").map(word => word[0]).join(".") + ".")

}


// ===========================================
// ITERACION 2 — .filter()
// ===========================================

// 2.1 Recibe un array de numeros y devuelve solo los numeros pares
function getEvenNumbers(numbers) {
  // Tu codigo aqui
  return numbers.filter(number => number % 2 === 0)
}

// 2.2 Recibe un array de objetos { name, price } y un precio minimo
// Devuelve solo los productos cuyo precio sea mayor o igual al minimo
function getExpensiveProducts(products, minPrice) {
  // Tu codigo aqui
  return products.filter(product => product.price >= minPrice)
}

// 2.3 Recibe un array de objetos { username, active } y devuelve solo los usuarios activos
function getActiveUsers(users) {
  // Tu codigo aqui
  return users.filter(user => user.active)
}

// 2.4 Recibe un array de strings y un numero minLength
// Devuelve solo las palabras que tengan al menos minLength caracteres
function getLongWords(words, minLength) {
  // Tu codigo aqui
  return words.filter(word => word.length >= minLength)
}


// ===========================================
// ITERACION 3 — .reduce()
// ===========================================

// 3.1 Recibe un array de numeros y devuelve la suma total
function sumAll(numbers) {
  // Tu codigo aqui
  return numbers.reduce((acc, num) => acc + num, 0);
}

// 3.2 Recibe un array de strings y devuelve un objeto con el conteo de cada elemento
// Ejemplo: ["a", "b", "a", "c", "b", "a"] -> { a: 3, b: 2, c: 1 }
function countOccurrences(arr) {
  // Tu codigo aqui
  return arr.reduce((acc, item) => {
    if (item in acc){
      acc[item] += 1;
    }else{
      acc[item] = 1
    }
    return acc
  }, {} )


}

// 3.3 Recibe un array de arrays y devuelve un unico array con todos los elementos
// Ejemplo: [[1, 2], [3, 4], [5]] -> [1, 2, 3, 4, 5]
function flattenArrays(arr) {
  // Tu codigo aqui
  return arr.reduce((acc, item) => {
    item.forEach((num) => acc.push(num))
    return acc
  }, [])
}

// 3.4 Recibe un array de objetos { name, age } y devuelve el objeto de la persona mas vieja
function getOldest(people) {
  // Tu codigo aqui
  return people.reduce((acc, person) => acc === undefined || person.age > acc.age ? person : acc);
}


// ===========================================
// ITERACION 4 — Combinando 2 metodos
// ===========================================

// 4.1 Recibe un array de objetos { name, price } y un precio minimo
// Devuelve la SUMA TOTAL de los precios de los productos que cuesten >= minPrice
// Usa: filter + reduce
function getTotalExpensive(products, minPrice) {
  // Tu codigo aqui
  return products.filter(p => p.price >= minPrice).reduce((acc, el) => acc + el.price, 0);
}

// 4.2 Recibe un array de objetos { name, age } y devuelve un array con los NOMBRES
// de las personas que tengan 18 anos o mas
// Usa: filter + map
function getAdultNames(people) {
  // Tu codigo aqui
  return people.filter(p => p.age >= 18).map(p => p.name);
}

// 4.3 Recibe un array de numeros y devuelve un array con los CUADRADOS de los numeros pares
// Ejemplo: [1, 2, 3, 4, 5, 6] -> [4, 16, 36]
// Usa: filter + map
function getSquaresOfEvens(numbers) {
  // Tu codigo aqui
  return numbers.filter(num => num % 2 === 0).map(n => n * n);
}


// ===========================================
// BONUS — Combinando los 3 metodos
// ===========================================

// B.1 Recibe un array de objetos { name, price, category, discount }
// y un string con la categoria deseada.
// 1) Filtra los productos de esa categoria
// 2) Aplica el descuento a cada precio: precio * (1 - discount / 100)
// 3) Suma todos los precios con descuento
// Devuelve el total redondeado a 2 decimales
function getDiscountedTotal(products, category) {
  // Tu codigo aqui
  return products.filter(product => product.category === category).map(p => p.price * (1 - p.discount / 100)).reduce((acc, el) => acc + el, 0);
}

// B.2 Recibe un array de objetos { name, grade } donde grade es un numero del 0 al 10
// 1) Filtra los estudiantes que han aprobado (grade >= 5)
// 2) Extrae solo los nombres
// 3) Concatena los nombres en un string separado por ", " con " y " antes del ultimo
// Ejemplo: ["Ana", "Luis", "Marta"] -> "Ana, Luis y Marta"
// Si solo hay uno: "Ana"
// Si no hay ninguno: "Ninguno"
function getPassingSummary(students) {
  // Tu codigo aqui
  return students.filter(s => s.grade >= 5).map(s => s.name).reduce((acc, el, i, total) => {
    return i === total.length - 1
    return acc + ", " + el
  }, "")
}

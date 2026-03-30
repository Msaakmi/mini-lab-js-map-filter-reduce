// ===========================================
// ITERACION 1 — .map()
// ===========================================

describe("Iteracion 1 — .map()", function () {

  describe("doubleNumbers()", function () {
    it("deberia devolver un array con cada numero multiplicado por 2", function () {
      expect(doubleNumbers([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    });

    it("deberia funcionar con numeros negativos", function () {
      expect(doubleNumbers([-1, 0, 5])).toEqual([-2, 0, 10]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(doubleNumbers([])).toEqual([]);
    });
  });

  describe("getNames()", function () {
    it("deberia devolver un array con solo los nombres", function () {
      const people = [
        { name: "Ana", age: 25 },
        { name: "Luis", age: 30 },
        { name: "Marta", age: 22 }
      ];
      expect(getNames(people)).toEqual(["Ana", "Luis", "Marta"]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(getNames([])).toEqual([]);
    });
  });

  describe("formatPrices()", function () {
    it("deberia formatear numeros enteros con dos decimales", function () {
      expect(formatPrices([10, 5, 100])).toEqual(["$10.00", "$5.00", "$100.00"]);
    });

    it("deberia formatear numeros con decimales correctamente", function () {
      expect(formatPrices([9.99, 0.5, 3.141])).toEqual(["$9.99", "$0.50", "$3.14"]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(formatPrices([])).toEqual([]);
    });
  });

  describe("getInitials()", function () {
    it("deberia devolver las iniciales de nombres de dos palabras", function () {
      expect(getInitials(["Ada Lovelace", "Grace Hopper"])).toEqual(["A.L.", "G.H."]);
    });

    it("deberia funcionar con un solo nombre en el array", function () {
      expect(getInitials(["Alan Turing"])).toEqual(["A.T."]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(getInitials([])).toEqual([]);
    });
  });
});


// ===========================================
// ITERACION 2 — .filter()
// ===========================================

describe("Iteracion 2 — .filter()", function () {

  describe("getEvenNumbers()", function () {
    it("deberia devolver solo los numeros pares", function () {
      expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it("deberia devolver un array vacio si no hay pares", function () {
      expect(getEvenNumbers([1, 3, 5, 7])).toEqual([]);
    });

    it("deberia incluir el 0 como numero par", function () {
      expect(getEvenNumbers([0, 1, 2])).toEqual([0, 2]);
    });
  });

  describe("getExpensiveProducts()", function () {
    it("deberia devolver productos con precio >= minPrice", function () {
      const products = [
        { name: "Camiseta", price: 20 },
        { name: "Pantalon", price: 50 },
        { name: "Zapatos", price: 80 },
        { name: "Calcetines", price: 5 }
      ];
      expect(getExpensiveProducts(products, 30)).toEqual([
        { name: "Pantalon", price: 50 },
        { name: "Zapatos", price: 80 }
      ]);
    });

    it("deberia devolver todos si todos cumplen el minimo", function () {
      const products = [
        { name: "A", price: 100 },
        { name: "B", price: 200 }
      ];
      expect(getExpensiveProducts(products, 50)).toEqual([
        { name: "A", price: 100 },
        { name: "B", price: 200 }
      ]);
    });

    it("deberia devolver un array vacio si ninguno cumple", function () {
      const products = [
        { name: "Chicle", price: 1 },
        { name: "Caramelo", price: 0.5 }
      ];
      expect(getExpensiveProducts(products, 10)).toEqual([]);
    });
  });

  describe("getActiveUsers()", function () {
    it("deberia devolver solo los usuarios activos", function () {
      const users = [
        { username: "ironhacker1", active: true },
        { username: "ironhacker2", active: false },
        { username: "ironhacker3", active: true }
      ];
      expect(getActiveUsers(users)).toEqual([
        { username: "ironhacker1", active: true },
        { username: "ironhacker3", active: true }
      ]);
    });

    it("deberia devolver un array vacio si nadie esta activo", function () {
      const users = [
        { username: "ghost", active: false }
      ];
      expect(getActiveUsers(users)).toEqual([]);
    });
  });

  describe("getLongWords()", function () {
    it("deberia devolver palabras con al menos minLength caracteres", function () {
      expect(getLongWords(["sol", "estrella", "luz", "universo", "luna"], 4)).toEqual([
        "estrella", "universo", "luna"
      ]);
    });

    it("deberia devolver todas si todas cumplen", function () {
      expect(getLongWords(["javascript", "ironhack"], 5)).toEqual([
        "javascript", "ironhack"
      ]);
    });

    it("deberia devolver un array vacio si ninguna cumple", function () {
      expect(getLongWords(["si", "no", "ya"], 5)).toEqual([]);
    });
  });
});


// ===========================================
// ITERACION 3 — .reduce()
// ===========================================

describe("Iteracion 3 — .reduce()", function () {

  describe("sumAll()", function () {
    it("deberia sumar todos los numeros del array", function () {
      expect(sumAll([1, 2, 3, 4, 5])).toBe(15);
    });

    it("deberia funcionar con numeros negativos", function () {
      expect(sumAll([10, -5, 3, -2])).toBe(6);
    });

    it("deberia devolver 0 para un array vacio", function () {
      expect(sumAll([])).toBe(0);
    });
  });

  describe("countOccurrences()", function () {
    it("deberia contar las ocurrencias de cada elemento", function () {
      expect(countOccurrences(["a", "b", "a", "c", "b", "a"])).toEqual({
        a: 3,
        b: 2,
        c: 1
      });
    });

    it("deberia funcionar con un solo tipo de elemento", function () {
      expect(countOccurrences(["x", "x", "x"])).toEqual({ x: 3 });
    });

    it("deberia devolver un objeto vacio para un array vacio", function () {
      expect(countOccurrences([])).toEqual({});
    });
  });

  describe("flattenArrays()", function () {
    it("deberia aplanar un array de arrays en un solo array", function () {
      expect(flattenArrays([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it("deberia funcionar con arrays vacios dentro", function () {
      expect(flattenArrays([[1], [], [2, 3]])).toEqual([1, 2, 3]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(flattenArrays([])).toEqual([]);
    });
  });

  describe("getOldest()", function () {
    it("deberia devolver el objeto de la persona con mas edad", function () {
      const people = [
        { name: "Ana", age: 25 },
        { name: "Carlos", age: 65 },
        { name: "Lucia", age: 40 }
      ];
      expect(getOldest(people)).toEqual({ name: "Carlos", age: 65 });
    });

    it("deberia devolver el primero si hay empate", function () {
      const people = [
        { name: "A", age: 30 },
        { name: "B", age: 30 }
      ];
      expect(getOldest(people)).toEqual({ name: "A", age: 30 });
    });
  });
});


// ===========================================
// ITERACION 4 — Combinando 2 metodos
// ===========================================

describe("Iteracion 4 — Combinando 2 metodos", function () {

  describe("getTotalExpensive() — filter + reduce", function () {
    it("deberia devolver la suma de los precios de los productos caros", function () {
      const products = [
        { name: "Camiseta", price: 20 },
        { name: "Pantalon", price: 50 },
        { name: "Zapatos", price: 80 },
        { name: "Calcetines", price: 5 }
      ];
      expect(getTotalExpensive(products, 30)).toBe(130);
    });

    it("deberia devolver 0 si ningun producto cumple el minimo", function () {
      const products = [
        { name: "Chicle", price: 1 },
        { name: "Caramelo", price: 2 }
      ];
      expect(getTotalExpensive(products, 10)).toBe(0);
    });

    it("deberia devolver 0 para un array vacio", function () {
      expect(getTotalExpensive([], 10)).toBe(0);
    });
  });

  describe("getAdultNames() — filter + map", function () {
    it("deberia devolver los nombres de las personas con 18+ anos", function () {
      const people = [
        { name: "Ana", age: 25 },
        { name: "Pedro", age: 15 },
        { name: "Lucia", age: 30 },
        { name: "Carlos", age: 12 }
      ];
      expect(getAdultNames(people)).toEqual(["Ana", "Lucia"]);
    });

    it("deberia incluir a personas con exactamente 18 anos", function () {
      const people = [
        { name: "Maria", age: 18 },
        { name: "Juan", age: 17 }
      ];
      expect(getAdultNames(people)).toEqual(["Maria"]);
    });

    it("deberia devolver un array vacio si no hay adultos", function () {
      const people = [
        { name: "Bebe", age: 1 }
      ];
      expect(getAdultNames(people)).toEqual([]);
    });
  });

  describe("getSquaresOfEvens() — filter + map", function () {
    it("deberia devolver los cuadrados de los numeros pares", function () {
      expect(getSquaresOfEvens([1, 2, 3, 4, 5, 6])).toEqual([4, 16, 36]);
    });

    it("deberia devolver un array vacio si no hay pares", function () {
      expect(getSquaresOfEvens([1, 3, 5])).toEqual([]);
    });

    it("deberia funcionar con numeros negativos pares", function () {
      expect(getSquaresOfEvens([-2, -3, 4])).toEqual([4, 16]);
    });
  });
});


// ===========================================
// BONUS — Combinando los 3 metodos
// ===========================================

describe("BONUS — Combinando los 3 metodos", function () {

  describe("getDiscountedTotal() — filter + map + reduce", function () {
    it("deberia calcular el total con descuento de una categoria", function () {
      const products = [
        { name: "Camiseta", price: 30, category: "ropa", discount: 10 },
        { name: "Pantalon", price: 50, category: "ropa", discount: 20 },
        { name: "Laptop", price: 1000, category: "tech", discount: 5 },
        { name: "Gorra", price: 15, category: "ropa", discount: 0 }
      ];
      // Ropa: Camiseta 30*0.9=27, Pantalon 50*0.8=40, Gorra 15*1=15 => 82
      expect(getDiscountedTotal(products, "ropa")).toBe(82);
    });

    it("deberia devolver 0 si no hay productos de esa categoria", function () {
      const products = [
        { name: "Laptop", price: 1000, category: "tech", discount: 5 }
      ];
      expect(getDiscountedTotal(products, "ropa")).toBe(0);
    });

    it("deberia manejar descuentos con decimales correctamente", function () {
      const products = [
        { name: "A", price: 100, category: "x", discount: 15 },
        { name: "B", price: 200, category: "x", discount: 25 }
      ];
      // A: 100*0.85=85, B: 200*0.75=150 => 235
      expect(getDiscountedTotal(products, "x")).toBe(235);
    });
  });

  describe("getPassingSummary() — filter + map + reduce", function () {
    it("deberia devolver los nombres de aprobados separados por coma y 'y'", function () {
      const students = [
        { name: "Ana", grade: 8 },
        { name: "Luis", grade: 3 },
        { name: "Marta", grade: 6 },
        { name: "Pedro", grade: 2 },
        { name: "Lucia", grade: 9 }
      ];
      expect(getPassingSummary(students)).toBe("Ana, Marta y Lucia");
    });

    it("deberia devolver solo el nombre si hay un unico aprobado", function () {
      const students = [
        { name: "Ana", grade: 7 },
        { name: "Luis", grade: 3 }
      ];
      expect(getPassingSummary(students)).toBe("Ana");
    });

    it("deberia devolver 'Ninguno' si nadie aprueba", function () {
      const students = [
        { name: "Ana", grade: 2 },
        { name: "Luis", grade: 4 }
      ];
      expect(getPassingSummary(students)).toBe("Ninguno");
    });

    it("deberia funcionar con dos aprobados", function () {
      const students = [
        { name: "Ana", grade: 5 },
        { name: "Luis", grade: 5 }
      ];
      expect(getPassingSummary(students)).toBe("Ana y Luis");
    });

    it("deberia incluir estudiantes con exactamente 5", function () {
      const students = [
        { name: "Justa", grade: 5 }
      ];
      expect(getPassingSummary(students)).toBe("Justa");
    });
  });
});

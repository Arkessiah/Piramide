 // ¿Te gustan las pirámides? Esperamos que sí, porque vas a aprender a hacer una con JavaScript! 

// Crea una función defina una variable string llamada `piramide` que empiece siendo un string vacío.
// Recorre todos los números comprendidos entre 1 y el 9m, incluyendo ambos, e intenta añadir ese número tantas veces como sea posible dado su valor:

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// Recuerda, para solucionar el problema debes hacer que tu string tenga "saltos de línea" al final de cada fila, eso lo conseguimos haciendo lo siguiente al final de cada bucle:

// piramide += '\n'; // Esto añade un salto de línea en la variable.

// Debemos aprovechar la potencia de los bucles para no rellenar nuestro fichero de código repetido.

var piramide = " ";
var almacen = " ";

piramide = 1 + '\n';
for (var i = 2;i < 10; i++){
  for (var j = i; j >=0;j--){
    if (j < 1){
      piramide += '\n';
    } else {
      piramide += i;
    }
  } 
}

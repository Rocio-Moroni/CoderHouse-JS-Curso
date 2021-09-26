/* DESAFÍO 03:
Crea un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.

Instrucciones: Realizar un programa que ingrese 3 números aleatorios entre los valores 1 y 3. Mostrar los 3 números ingresados, luego mostrar la suma de ellos y por último, dejar de realizar dicha repetición cuando la suma de mayor o igual a 5.
*/

let num1,num2,num3;
let suma;

do {
    num1 = Math.floor(Math.random()*(4-1)+1);
    num2 = Math.floor(Math.random()*(4-1)+1);
    num3 = Math.floor(Math.random()*(4-1)+1);
    console.log (num1,num2,num3);
    suma = num1 + num2 + num3;
    console.log (suma);
} while (suma <= 5)

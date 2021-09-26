/* DESAFÍO 02:
Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las condiciones cumplidas */

// Ingreso de datos por parte del usuario
let pago = prompt ('¿Desea pagar con tarjeta de crédito o transferencia bancaria?')

// Comparadores compuestos
if ((pago === "credito") || (pago === "transferencia")) {
    alert ('Usted va a pagar con ' + pago);
} else {
    alert ('Por favor ingrese si pagará con tarjeta de crédito o transferencia');
    prompt ('¿Desea pagar con tarjeta de crédito o transferencia bancaria?');
} 
if (pago === "credito") {
    let cuotas = parseInt(prompt('¿Desea pagar con 1, 2 o 3 cuotas?'));
switch (cuotas) {
    case 1:
        alert('Realizará el pago total en una sola cuota sin interés');
        break;
    case 2:
        alert('Realizará el pago total en dos cuotas sin interés');
        break;
    case 3:
        alert('Realizará el pago total en tres cuotas sin interés');
        break;
    default:
        alert('El número ingresado no es válido');
        break;
}} else if (pago === 'transferencia') {
    alert('Usted recibirá un 10% de descuento');
} 
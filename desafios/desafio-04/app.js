/* El objetivo de mi proyecto es poder realizar una página web de alquiler de cabañas, en donde el usuario vaya ingresando los datos solicitados para así poder realizar una reserva. */

// Saludo de bienvenida al usuario que ingresó su nombre.
let nombre = prompt ('Bienvenido, por favor ingrese su nombre');
alert (`¡Hola ${nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`);

// Ingreso de datos para calcular la cantidad de personas que se alojarán para poder asignarles una cabaña. 
let cantidadAdultos = parseInt (Number (prompt ('Por favor ingrese la cantidad de adultos que desean hospedarse')));
let cantidadNiños = parseInt (Number (prompt ('Por favor ingrese la cantidad de niños que desean hospedarse')));
// Ingreso de datos para saber cantidad de noches de alojamiento.
let cantidadNoches = parseInt (Number (prompt ('¿Cuántas noches desean alojarse?')));
// Cantidad total de alojados.
let suma = cantidadAdultos + cantidadNiños;
// Forma de pago.
let pago = prompt ('¿Desea pagar con tarjeta de crédito o transferencia bancaria?')


// Precio por noche dependiendo de cada cabaña.
let laCascada = 2000;
let losAromos = 4000;
let losEspinillos = 6000;

function precioPorNoche (i) {
    montoEstadia = cantidadNoches * i;
}

// Designación de cabaña en base a la cantidad de personas hospedadas y monto total a pagar de la estadía.
if (suma <= 4) {
    alert (`¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${suma} personas`);
    precioPorNoche(laCascada)
    alert (`El monto total de su estadía por ${cantidadNoches} noches es de $${montoEstadia}`);
} else if (suma > 4 && suma <= 8) {
    alert (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${suma} personas`);
    precioPorNoche(losAromos)
    alert (`El monto total de su estadía por ${cantidadNoches} noches es de $${montoEstadia}`);
} else if ( suma > 8 && suma <= 12) {
    alert (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${suma} personas`);
    precioPorNoche(losEspinillos)
    alert (`El monto total de su estadía por ${cantidadNoches} noches es de ${$montoEstadia}`);
} else {
    alert (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
}

// Forma de pago y cálculo de monto final.
if ((pago === "credito") || (pago === "transferencia")) {
    alert ('Usted va a pagar con ' + pago);
} else {
    alert ('Por favor ingrese si pagará con tarjeta de crédito o transferencia');
} 
if (pago === "credito") {
    let cuotas = parseInt(prompt('¿Desea pagar con 1, 2 o 3 cuotas?'));
switch (cuotas) {
    case 1:
        alert('Realizará el pago total en una sola cuota sin interés');
        break;
    case 2:
        alert(`Realizará el pago total en dos cuotas sin interés, cada cuota será de $${Math.round (montoEstadia / 2)}`);
        break;
    case 3:
        alert(`Realizará el pago total en tres cuotas sin interés, cada cuota será de $${Math.round (montoEstadia / 3)}`);
        break;
    default:
        alert('El número ingresado no es válido');
        break;
}} else if (pago === 'transferencia') {
    alert(`Usted recibirá un 10% de descuento, su monto final a pagar es de $${montoEstadia - (montoEstadia * 0.1)}`);
} 

// Solicitud de e-mail y despedida.
let mail = prompt ('Por favor ingrese su e-mail');
alert (`¡Muchas gracias por elegirnos, nos comunicaremos al e-mail ${mail} para darle el detalle de su reserva!`);
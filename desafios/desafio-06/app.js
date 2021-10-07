/* Se le incorpora a la página un sistema de servicio de comida para desayunos, almuerzos, meriendas y cenas */

/* Entidades*/
// Entidad "Servicio"
class Producto {
    constructor (colacion, precio) {
        this.colacion = colacion;
        this.precio = precio;
    }
}

/* Funciones*/
let desayunoYmerienda = [];
desayunoYmerienda.push(new Producto("Infusión a elección", 200))
desayunoYmerienda.push(new Producto("Cereales", 100))
desayunoYmerienda.push(new Producto("Porción de torta", 250))
desayunoYmerienda.push(new Producto("Tostadas", 150))
desayunoYmerienda.push(new Producto("Ensalada de frutas", 80))
desayunoYmerienda.push(new Producto("Huevos revueltos", 300))

let almuerzoYcena = [];
almuerzoYcena.push(new Producto("Gaseosa", 100))
almuerzoYcena.push(new Producto("Pastas", 500))
almuerzoYcena.push(new Producto("Hamburguesa", 500))
almuerzoYcena.push(new Producto("Ensalada", 350))
almuerzoYcena.push(new Producto("Sopa del día", 300))
almuerzoYcena.push(new Producto("Cerveza artesanal", 200))



// Reserva1
// Realizo el llamado a crearReserva para solicitar los datos del usuario.
const reserva1 = crearReserva ();
// Efectúo salidas mediante alert().
const saludarReserva1 = () => {
    alert (`¡Hola ${reserva1.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`)
}

const iniciarReserva1 = () => {
    if (reserva1.totalAlojados <= 4) {
        alert  (`¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${reserva1.totalAlojados} personas`);
        alert  (`El monto total de su estadía por ${reserva1.cantidadNoches} noches es de $${(reserva1.cantidadNoches * reserva1.laCascada)}`);
    } else if (reserva1.totalAlojados > 4 && reserva1.totalAlojados <= 8) {
        alert  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${reserva1.totalAlojados} personas`);
        alert  (`El monto total de su estadía por ${reserva1.cantidadNoches} noches es de $${reserva1.cantidadNoches * reserva1.losAromos}`);
    } else if (reserva1.totalAlojados > 8 && reserva1.totalAlojados <= 12) {
        alert  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${reserva1.totalAlojados} personas`);
        alert  (`El monto total de su estadía por ${reserva1.cantidadNoches} noches es de $${reserva1.cantidadNoches * reserva1.losEspinillos}`);
    } else {
        alert  (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
    }}

    // Forma de pago y cálculo de monto final de estadía.
const pagarReserva1 = () => {
if ((reserva1.formaDePago === "credito") || (reserva1.formaDePago === "transferencia")) {
    alert ('Usted va a pagar con ' + reserva1.formaDePago);
} else {
    alert ('Por favor reingrese si pagará con tarjeta de crédito o transferencia bancaria');
} 
if (reserva1.formaDePago === "credito") {
    let cuotas = parseInt(prompt('¿Desea pagar con 1, 2 o 3 cuotas?'));
switch (cuotas) {
    case 1:
        alert('Realizará el pago total en una sola cuota sin interés');
        break;
    case 2:
        alert(`Realizará el pago total en dos cuotas sin interés`);
        break;
    case 3:
        alert(`Realizará el pago total en tres cuotas sin interés`);
        break;
    default:
        alert('El número ingresado no es válido');
        break;
}} else if (reserva1.formaDePago === 'transferencia') {
    alert(`Usted recibirá un 10% de descuento`);
}}

const despedirReserva1 = () => {
    alert (`¡Muchas gracias por elegirnos, nos comunicaremos al e-mail ${reserva1.mail} para darle el detalle de su reserva!`);}
/* Lógica */ 

saludarReserva1()
iniciarReserva1()
pagarReserva1()
despedirReserva1()
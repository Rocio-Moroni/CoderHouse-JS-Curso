/* El objetivo de mi proyecto es poder realizar una página web de alquiler de cabañas, en donde el usuario vaya ingresando los datos solicitados para así poder realizar una reserva. */

/* Entidades*/
// Entidad "Reservas"
class Reservas {
    constructor (nombre, cantidadAdultos, cantidadNiños, cantidadNoches, laCascada, losAromos, losEspinillos, formaDePago, mail) {
        this.nombre = nombre;
        this.cantidadAdultos = cantidadAdultos;
        this.cantidadNiños = cantidadNiños;
        this.cantidadNoches = cantidadNoches;
        this.laCascada = laCascada;
        this.losAromos = losAromos;
        this.losEspinillos = losEspinillos;
        this.totalAlojados = cantidadAdultos + cantidadNiños;
        this.formaDePago = formaDePago;
        this.mail = mail;
    }
}

/* Funciones*/
// Se capturan entradas mediante prompt() y se define el precio por noche de cada cabaña.
function crearReserva () {
const nombre = prompt ('Bienvenido, por favor ingrese su nombre');
const cantidadAdultos = parseInt (Number (prompt ('Por favor ingrese la cantidad de adultos que desean hospedarse')));
const cantidadNiños = parseInt (Number (prompt ('Por favor ingrese la cantidad de niños que desean hospedarse')));
const cantidadNoches = parseInt (Number (prompt ('¿Cuántas noches desean alojarse?')));
const laCascada = 2000;
const losAromos = 4000;
const losEspinillos = 6000;
const formaDePago = prompt ('¿Desea pagar con tarjeta de crédito o transferencia bancaria?')
const mail = prompt ('Por favor ingrese su e-mail');
return new Reservas (nombre, cantidadAdultos, cantidadNiños, cantidadNoches, laCascada, losAromos, losEspinillos, formaDePago, mail);
}

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

// Forma de pago.
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
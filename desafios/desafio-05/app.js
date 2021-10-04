/* El objetivo de mi proyecto es poder realizar una página web de alquiler de cabañas, en donde el usuario vaya ingresando los datos solicitados para así poder realizar una reserva. */

// Entidad BIENVENIDA
class Saludo {
    constructor (nombre) {
        this.nombre = nombre;
    }}

// Entidad CANTIDAD DE ALOJADOS
class Alojados {
    constructor (cantidadAdultos, cantidadNiños) {
        this.cantidadAdultos = cantidadAdultos;
        this.cantidadNiños = cantidadNiños;
    }}

// Entidad CANTIDAD DE NOCHES y FORMA DE PAGO
class Monto {
    constructor (cantidadNoches, pago) {
        this.cantidadNoches = cantidadNoches;
        this.pago = pago;
    }}


// CONSTANTES
// Objeto Saludo
const saludo = new Saludo ();
this.nombre = prompt ('Bienvenido, por favor ingrese su nombre');
alert (`¡Hola ${this.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`);

// Objeto Alojados
const reserva = new Alojados ();
this.cantidadAdultos = parseInt (Number (prompt ('Por favor ingrese la cantidad de adultos que desean hospedarse')));
this.cantidadNiños = parseInt (Number (prompt ('Por favor ingrese la cantidad de niños que desean hospedarse')));
suma = cantidadAdultos + cantidadNiños;

// Objeto Monto
const pago = new Monto ();
this.cantidadNoches = parseInt (Number (prompt ('¿Cuántas noches desean alojarse?'))); 
this.pago = prompt ('¿Desea pagar con tarjeta de crédito o transferencia bancaria?');

// FUNCIÓN
const generarReserva = () => {

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
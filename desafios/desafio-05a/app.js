/* El objetivo de mi proyecto es poder realizar una página web de alquiler de cabañas, en donde el usuario vaya ingresando los datos solicitados para así poder realizar una reserva. */

// Entidad BIENVENIDA
class Saludo {
    constructor (nombre) {
        this.nombre = nombre;
    }}

// Entidad CANTIDAD DE ALOJADOS
class Alojados {
    constructor (cantidadAdultos, cantidadNiños, totalAlojados) {
        this.cantidadAdultos = cantidadAdultos;
        this.cantidadNiños = cantidadNiños;
        this.totalAlojados = totalAlojados;
    }}

// Entidad CANTIDAD DE NOCHES y FORMA DE PAGO
class Monto {
    constructor (cantidadNoches, pago, laCascada, losAromos, losEspinillos) {
        this.cantidadNoches = cantidadNoches;
        this.pago = pago;
        this.laCascada = laCascada;
        this.losAromos = losAromos;
        this.losEspinillos = losEspinillos;
    }}


/* CONSTANTES */
// Objeto "Saludo"
const bienvenida = new Saludo ({
    nombre: prompt ('Bienvenido, por favor ingrese su nombre')
});
alert (`¡Hola ${bienvenida.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`);

// Objeto "Alojados"
const reserva = new Alojados ({
    cantidadAdultos: parseInt (Number (prompt ('Por favor ingrese la cantidad de adultos que desean hospedarse'))),
    cantidadNiños: parseInt (Number (prompt ('Por favor ingrese la cantidad de niños que desean hospedarse'))),
    totalAlojados: cantidadAdultos + cantidadNiños
});

// Objeto "Monto"
const pago = new Monto ({
    cantidadNoches: parseInt (Number (prompt ('¿Cuántas noches desean alojarse?'))),
    pago: string (prompt ('¿Desea pagar con tarjeta de crédito o transferencia bancaria?')),
    laCascada: 2000,
    losAromos: 4000,
    losEspinillos: 6000,
});


/* FUNCIÓN */
iniciarReserva () ;{
    if (reserva.totalAlojados <= 4) {
        alert (`¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${reserva.totalAlojados} personas`);
        alert (`El monto total de su estadía por ${cantidadNoches} noches es de $${this.cantidadNoches * laCascada}`);
    } else if (reserva.totalAlojados > 4 && suma <= 8) {
        alert (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${reserva.totalAlojados} personas`);
        alert (`El monto total de su estadía por ${cantidadNoches} noches es de $${this.cantidadNoches * losAromos}`);
    } else if ( reserva.totalAlojados > 8 && suma <= 12) {
        alert (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${reserva.totalAlojados} personas`);
        alert (`El monto total de su estadía por ${cantidadNoches} noches es de ${this.cantidadNoches * losEspinillos}`);
    } else {
        alert (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
    }
}


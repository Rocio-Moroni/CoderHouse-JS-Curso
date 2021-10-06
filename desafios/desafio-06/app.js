/* El objetivo de mi proyecto es poder realizar una página web de alquiler de cabañas, en donde el usuario vaya ingresando los datos solicitados para así poder realizar una reserva. */

// Entidad "Reserva"
class Reservas {
    constructor (nombre, cantidadAdultos, cantidadNiños, cantidadNoches, laCascada, losAromos, losEspinillos) {
        this.nombre = nombre;
        this.cantidadAdultos = cantidadAdultos;
        this.cantidadNiños = cantidadNiños;
        this.cantidadNoches = cantidadNoches;
        this.laCascada = laCascada;
        this.losAromos = losAromos;
        this.losEspinillos = losEspinillos;
        this.totalAlojados = cantidadAdultos + cantidadNiños;
    }
}

/* Funciones*/

//Reserva1
const reserva1 = new Reservas ({
nombre: prompt ('Bienvenido, por favor ingrese su nombre'),
cantidadAdultos: parseInt (Number (prompt ('Por favor ingrese la cantidad de adultos que desean hospedarse'))),
cantidadNiños: parseInt (Number (prompt ('Por favor ingrese la cantidad de niños que desean hospedarse'))),
cantidadNoches: parseInt (Number (prompt ('¿Cuántas noches desean alojarse?'))),
laCascada: 2000,
losAromos: 4000,
losEspinillos: 6000
});
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
        alert  (`El monto total de su estadía por ${reserva1.cantidadNoches} noches es de ${reserva1.cantidadNoches * reserva1.losEspinillos}`);
    } else {
        alert  (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
    }}


    /* Lógica */ 
saludarReserva1()
iniciarReserva1()
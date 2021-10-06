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
const reserva1 = new Reservas ("Rocio", 2, 2, 4, 2000, 4000, 6000);
const saludarReserva1 = () => {
console.log (`¡Hola ${reserva1.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`)
}
const iniciarReserva1 = () => {
    if (reserva1.totalAlojados <= 4) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${reserva1.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva1.cantidadNoches} noches es de $${(reserva1.cantidadNoches * reserva1.laCascada)}`);
    } else if (reserva1.totalAlojados > 4 && reserva1.totalAlojados <= 8) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${reserva1.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva1.cantidadNoches} noches es de $${reserva1.cantidadNoches * reserva1.losAromos}`);
    } else if (reserva1.totalAlojados > 8 && reserva1.totalAlojados <= 12) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${reserva1.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva1.cantidadNoches} noches es de ${reserva1.cantidadNoches * reserva1.losEspinillos}`);
    } else {
        console.log  (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
    }}


    //Reserva2
    const reserva2 = new Reservas ("Julia", 6, 2, 6, 2000, 4000, 6000);
    const saludarReserva2 = () => {
        console.log (`¡Hola ${reserva2.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`)
        }
    const iniciarReserva2 = () => {
    if (reserva2.totalAlojados <= 4) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${reserva2.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva2.cantidadNoches} noches es de $${(reserva2.cantidadNoches * reserva2.laCascada)}`);
    } else if (reserva2.totalAlojados > 4 && reserva2.totalAlojados <= 8) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${reserva2.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva2.cantidadNoches} noches es de $${reserva2.cantidadNoches * reserva2.losAromos}`);
    } else if (reserva2.totalAlojados > 8 && reserva2.totalAlojados <= 12) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${reserva2.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva2.cantidadNoches} noches es de ${reserva2.cantidadNoches * reserva2.losEspinillos}`);
    } else {
        console.log  (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
    }}

    //Reserva3
    const reserva3 = new Reservas ("Federico", 6, 4, 2, 2000, 4000, 6000);
    const saludarReserva3 = () => {
        console.log (`¡Hola ${reserva3.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`)
        }
    const iniciarReserva3 = () => {
    if (reserva3.totalAlojados <= 4) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${reserva3.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva3.cantidadNoches} noches es de $${(reserva3.cantidadNoches * reserva3.laCascada)}`);
    } else if (reserva3.totalAlojados > 4 && reserva3.totalAlojados <= 8) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${reserva3.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva3.cantidadNoches} noches es de $${reserva3.cantidadNoches * reserva3.losAromos}`);
    } else if (reserva3.totalAlojados > 8 && reserva3.totalAlojados <= 12) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${reserva3.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva3.cantidadNoches} noches es de $${reserva3.cantidadNoches * reserva3.losEspinillos}`);
    } else {
        console.log  (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
    }}

    //Reserva4
    const reserva4 = new Reservas ("Leonardo", 8, 6, 8, 2000, 4000, 6000);
    const saludarReserva4 = () => {
        console.log (`¡Hola ${reserva4.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`)
        }
    const iniciarReserva4 = () => {
    if (reserva4.totalAlojados <= 4) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${reserva4.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva4.cantidadNoches} noches es de $${(reserva4.cantidadNoches * reserva4.laCascada)}`);
    } else if (reserva4.totalAlojados > 4 && reserva4.totalAlojados <= 8) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${reserva4.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva4.cantidadNoches} noches es de $${reserva4.cantidadNoches * reserva4.losAromos}`);
    } else if (reserva4.totalAlojados > 8 && reserva4.totalAlojados <= 12) {
        console.log  (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${reserva4.totalAlojados} personas`);
        console.log  (`El monto total de su estadía por ${reserva4.cantidadNoches} noches es de $${reserva4.cantidadNoches * reserva4.losEspinillos}`);
    } else {
        console.log  (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
    }}


/* Lógica */ 
saludarReserva1()
iniciarReserva1()
saludarReserva2()
iniciarReserva2()
saludarReserva3()
iniciarReserva3()
saludarReserva4()
iniciarReserva4()
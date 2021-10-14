/* El objetivo de mi proyecto es poder realizar una página web de alquiler de cabañas, en donde el usuario vaya ingresando los datos solicitados para así poder realizar una reserva. */

/* Entidades*/
// Entidad "Reservas"
class Reservas {
    constructor ({nombre, cantidadAdultos, cantidadMenores, cantidadNoches, laCascada, losAromos, losEspinillos, formaDePago, mail}) {
        this.nombre = nombre;
        this.cantidadAdultos = cantidadAdultos;
        this.cantidadMenores = cantidadMenores;
        this.cantidadNoches = cantidadNoches;
        this.laCascada = laCascada;
        this.losAromos = losAromos;
        this.losEspinillos = losEspinillos;
        this.totalAlojados = cantidadAdultos + cantidadMenores;
        this.formaDePago = formaDePago;
        this.mail = mail;
    }
}

const generarReserva = () => {

    const reserva = new Reservas ({
    nombre: document.getElementById("nombre").value,
    cantidadAdultos: +document.getElementById("adultos").value,
    cantidadMenores: +document.getElementById("menores").value,
    cantidadNoches: +document.getElementById("noches").value,
    laCascada: 2000,
    losAromos: 4000,
    losEspinillos: 6000,
    formaDePago: document.getElementById("pago").value,
    mail: document.getElementById("mail").value
    })

    const mensajesDeReserva = document.createElement("div");

    const bienvenida = document.createElement("h2");
    bienvenida.textContent = `¡Hola ${reserva.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`;
    mensajesDeReserva.appendChild(bienvenida);

    const iniciarReserva1 = () => {
        if (reserva.totalAlojados <= 4) {
            const cabañaLc = document.createElement("p");
            cabañaLc.textContent = `¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${reserva.totalAlojados} personas`;
            mensajesDeReserva.appendChild(cabañaLc);
    
            const montoLc = document.createElement("p");
            montoLc.textContent = `El monto total de su estadía por ${reserva.cantidadNoches} noches es de $${(reserva.cantidadNoches * reserva.laCascada)}`;
            mensajesDeReserva.appendChild(montoLc);
    
        } else if (reserva.totalAlojados > 4 && reserva.totalAlojados <= 8) {
            const cabañaLa = document.createElement("p");
            cabañaLa.textContent = `¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${reserva.totalAlojados} personas`;
            mensajesDeReserva.appendChild(cabañaLa);
    
            const montoLa = document.createElement("p");
            montoLa.textContent = `El monto total de su estadía por ${reserva.cantidadNoches} noches es de $${reserva.cantidadNoches * reserva.losAromos}`;
            mensajesDeReserva.appendChild(montoLa);
    
        } else if (reserva.totalAlojados > 8 && reserva.totalAlojados <= 12) {
            const cabañaLe = document.createElement("p");
            cabañaLe.textContent = `¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${reserva.totalAlojados} personas`;
            mensajesDeReserva.appendChild(cabañaLe);
    
            const montoLe = document.createElement("p");
            montoLe.textContent = `El monto total de su estadía por ${reserva.cantidadNoches} noches es de $${reserva.cantidadNoches * reserva.losEspinillos}`;
            mensajesDeReserva.appendChild(montoLe);
    
        } else {
            const superiorAdoce = document.createElement("p");
            superiorAdoce.textContent = `Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`;
            mensajesDeReserva.appendChild(superiorAdoce);
        }}
        

        const despedirReserva1 = () => {
            const despedida = document.createElement("p");
            despedida.textContent = `¡Muchas gracias por elegirnos, nos comunicaremos al e-mail ${reserva.mail} para darle el detalle de su reserva!`;
            mensajesDeReserva.appendChild(despedida);
        }

    document.getElementById("div1").appendChild(mensajesDeReserva);

    iniciarReserva1()
    despedirReserva1()
    return reserva;
    
}

document.getElementById("btn").addEventListener("click", () => {
    generarReserva()
})



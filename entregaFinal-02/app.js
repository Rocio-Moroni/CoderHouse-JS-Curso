// ENTIDADES | FACTORY | ENTIDAD "RESERVA"
class Reservas {
    constructor ({
        nombre, 
        cantidadAdultos, 
        cantidadMenores, 
        totalAlojados,
        cantidadNoches, 
        designacionDeCabaña,
        montoEstadia,
        formaDePago, 
        mail}) 
        {
        this.nombre              = nombre;
        this.cantidadAdultos     = cantidadAdultos;
        this.cantidadMenores     = cantidadMenores;
        this.totalAlojados       = totalAlojados;
        this.cantidadNoches      = cantidadNoches;
        this.designacionDeCabaña = designacionDeCabaña;
        this.montoEstadia        = montoEstadia;
        this.formaDePago         = formaDePago;
        this.mail                = mail;
    }
}

// FUNCIONES:

// Function "resetForm()" (Se elimina la información ingresada en los inputs dejando el formulario en blanco luego de apretar el botón "Book").
const resetForm = () => {
    document.getElementById('form').reset();
}

// Function "extraerDatos" (Extrae datos de los inputs y genera un usuario).
const extraerDatos = () => {
    designacionDeCabañaFuncion = designacionDeCabaña();
    totalAlojadosCalculado = totalAlojadosFuncion();
    montoEstadiaCalculado = montoEstadia();

    const nuevaReserva = new Reservas ({
        nombre: document.getElementById("form__name").value,
        cantidadAdultos: +document.getElementById("form__adults").value,
        cantidadMenores: +document.getElementById("form__children").value,
        totalAlojados: totalAlojadosCalculado,
        cantidadNoches: +document.getElementById("form__nights").value,
        designacionDeCabaña: designacionDeCabañaFuncion,
        montoEstadia: montoEstadiaCalculado,
        formaDePago: document.getElementById("form__credit").value,
        mail: document.getElementById("form__mail").value
        })

        return nuevaReserva;
}


// Function "totalalojadosFuncion()" (Se suman la cantidad de adultos y la cantidad de menores que quieren alojarse por reserva).
const totalAlojadosFuncion = () => {
    let adultos = +document.getElementById("form__adults").value;
    let menores = +document.getElementById("form__children").value;

    let totalAlojadosCalculado = adultos + menores;
    return totalAlojadosCalculado;
}


// Function "designacionDeCabaña()" (Dependiendo del "totalAlojados" designa una cabaña acorde a su capacidad de personas para alojar).
const designacionDeCabaña = () => {
    let totalAlojados = (+document.getElementById("form__adults").value) + (+document.getElementById("form__children").value);

    if ((totalAlojados) <= 4) {
        return cabañaDesignada = "La Cascada";
    } else if (totalAlojados > 4 && totalAlojados <= 8) {
        return cabañaDesignada = "Los Aromos";
    } else if (totalAlojados > 8 && totalAlojados <= 12) {
        return cabañaDesignada = "Los Espinillos";
}
}


// Function "montoEstadia()" (Cálculo del monto total de la estadía dependiendo de la cantidad de noches y la cabaña asignada).
const montoEstadia = () => {
    let montoEstadia;
    let cabañaSeleccionada = designacionDeCabaña();
    let cantidadNoches = +document.getElementById("form__nights").value;

    if (cabañaSeleccionada == "La Cascada") {
        cabañaSeleccionada = 2000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    } else if (cabañaSeleccionada == "Los Aromos") {
        cabañaSeleccionada = 4000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    } else if (cabañaSeleccionada == "Los Espinillos") {
        cabañaSeleccionada = 6000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    } 
}

// // Function "formaDePago()" (Elección de forma de pago, si es en cuotas se calcula el monto final a pagar por cuotas y si es por transferencia bancaria se realiza un 10% de descuento sobre el monto final a abonar por la reserva).


// Function "guardarLocalStorage()".
const guardarLocalStorage = () => {
    if(JSON.parse(localStorage.getItem('listaReservas')) == null) {
        let listaReservas = [];
        listaReservas.push(extraerDatos());
        localStorage.setItem('listaReservas', JSON.stringify(listaReservas));
    } else {
        listaReservas = JSON.parse(localStorage.getItem('listaReservas'));
        listaReservas.push(extraerDatos());
        localStorage.setItem('listaReservas', JSON.stringify(listaReservas));
    }
}


// Function "mensajeFinal" (Si el total de alojados es inferior a 12 se mostrará el mensaje con el resúmen de la reserva, si es mayor a 12 se indicará que solo se pueden alojar hasta 12 personas)
const mensajeFinal = () => {
    let mensajeFinal1;
    let nombre = document.getElementById("form__name").value;
    let totalAlojadosCalculado = totalAlojadosFuncion();
    let designacionDeCabañaFuncion = designacionDeCabaña();
    let cantidadNoches = +document.getElementById("form__nights").value;
    let montoEstadiaCalculado = montoEstadia();
    let formaDePago= document.getElementById("form__credit").value;
    let mail= document.getElementById("form__mail").value;
    
    // Mensaje mostrado en HTML con el resúmen de la reserva:
    const mensajeDeReservaFinal = document.createElement("div");

    if (totalAlojadosCalculado < 13) {
        const mensajeUno =  document.createElement("p");
        mensajeUno.textContent =`¡Hola ` + nombre + `! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas.
                            ¡Buenas noticias! Tenemos disponible la Cabaña ${designacionDeCabañaFuncion} para recibir a ${totalAlojadosCalculado} personas. El monto total de su estadía por ${cantidadNoches} noches es de $${montoEstadiaCalculado}. El pago se realizará con ${formaDePago}. Nos estaremos comunicando al mail ${mail} para enviarle mayor información sobre su reserva.`;
        mensajeDeReservaFinal.appendChild(mensajeUno);
        document.getElementById("div1").appendChild(mensajeDeReservaFinal);
        return mensajeFinal1;   
    } else {
        const superiorAdoce = document.createElement("p");
        superiorAdoce.textContent = `Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`;
        mensajeDeReservaFinal.appendChild(superiorAdoce);
        document.getElementById("div1").appendChild(mensajeDeReservaFinal);
        return mensajeFinal1;   
    }
}   

// Botón ejecuta: guardarLocalStorage() y resetForm(): Los datos ingresados se almacenarán automáticamente en el Local Storage al presionar el botón y se reseteará para dejar los inputs vacíos nuevamente.
document.getElementById('btn').addEventListener('click', () => {guardarLocalStorage(),resetForm(), mensajeFinal()});


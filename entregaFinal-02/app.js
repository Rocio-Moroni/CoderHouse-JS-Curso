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

    // Mensaje mostrado en HTML con el resúmen de la reserva:
    const mensajeDeReservaFinal = document.createElement("div");
        // Elemento:
        let elemento = new Reservas(
        mensajeUno =  document.createElement("p"),
        mensajeUno.textContent =`¡Hola ${nuevaReserva.nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas.
                            ¡Buenas noticias! Tenemos disponible la Cabaña ${designacionDeCabañaFuncion} para recibir a ${totalAlojadosCalculado} personas. El monto total de su estadía por ${nuevaReserva.cantidadNoches} noches es de $${montoEstadiaCalculado}. El pago se realizará con ${nuevaReserva.formaDePago}. Nos estaremos comunicando al mail ${nuevaReserva.mail} para enviarle mayor información sobre su reserva.`,
        
        mensajeDeReservaFinal.appendChild(mensajeUno),
        document.getElementById("div1").appendChild(mensajeDeReservaFinal),)
        
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
    let cabañaDesignada;
    let totalAlojados = (+document.getElementById("form__adults").value) + (+document.getElementById("form__children").value);
    if ((totalAlojados) <= 4) {
        return cabañaDesignada = "La Cascada";
    } else if (totalAlojados > 4 && totalAlojados <= 8) {
        return cabañaDesignada = "Los Aromos";
    } else if (totalAlojados > 8 && totalAlojados <= 12) {
        return cabañaDesignada = "Los Espinillos";
    } else if (totalAlojados > 12) {
        const mensajesDeReserva = document.getElementById("div1");
        const superiorAdoce = document.createElement("p");
        superiorAdoce.textContent = `Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`;
        mensajesDeReserva.appendChild(superiorAdoce);
    } 
}


// Function "montoEstadia()" (Cálculo del monto total de la estadía dependiendo de la cantidad de noches y la cabaña asignada).
const montoEstadia = () => {
    let cabañaSeleccionada = designacionDeCabaña();
    let cantidadNoches = +document.getElementById("form__nights").value;
    let montoEstadia;

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
// const formaDePago = () => {
//     let monto = montoEstadia();
//     let credito =  document.getElementById("credit").value;
//     let trans =  document.getElementById("wireTransfer").value;

//     if (form__payment === credito) {
//         let cuotas = parseInt(prompt('¿Desea pagar con 1, 2 o 3 cuotas?'));
//         switch (cuotas){
//             case 1:
//                 const cuotaUno = document.createElement("p");
//                 cuotaUno.textContent = `Realizará el pago total en una sola cuota sin interés.`;
//                 mensajesDeReserva.appendChild(cuotaUno);







//                 Math.round (monto / 2);
//                 break;
//             case 2:
//                 Math.round (monto / 3);
//                 break;
//             case 3:
//                 Math.round (monto / 2);
//         }
//     }
// }




// // Forma de pago y cálculo de monto final.
// if ((pago === "credito") || (pago === "transferencia")) {
//     alert ('Usted va a pagar con ' + pago);
// } else {
//     alert ('Por favor ingrese si pagará con tarjeta de crédito o transferencia');
// } 
// if (pago === "credito") {
//     let cuotas = parseInt(prompt('¿Desea pagar con 1, 2 o 3 cuotas?'));
// switch (cuotas) {
//     case 1:
//         alert('Realizará el pago total en una sola cuota sin interés');
//         break;
//     case 2:
//         alert(`Realizará el pago total en dos cuotas sin interés, cada cuota será de $${Math.round (montoEstadia / 2)}`);
//         break;
//     case 3:
//         alert(`Realizará el pago total en tres cuotas sin interés, cada cuota será de $${Math.round (montoEstadia / 3)}`);
//         break;
//     default:
//         alert('El número ingresado no es válido');
//         break;
// }} else if (pago === 'transferencia') {
//     alert(`Usted recibirá un 10% de descuento, su monto final a pagar es de $${montoEstadia - (montoEstadia * 0.1)}`);
// } 







// Botón ejecuta: guardarLocalStorage() y resetForm(): Los datos ingresados se almacenarán automáticamente en el Local Storage al presionar el botón y se reseteará para dejar los inputs vacíos nuevamente.
document.getElementById('btn').addEventListener('click', () => {guardarLocalStorage(),resetForm()});


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

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

// Function "resetForm()".
const resetForm = () => {
    document.getElementById('form').reset();
}

// Function "extraerDatos" (extrae datos de los inputs y genera un usuario).
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


// Function "designacionDeCabaña()" (dependiendo del "totalAlojados" designa una cabaña acorde a su capacidad de personas para alojar).
const designacionDeCabaña = () => {
    let cabañaDesignada;
    let totalAlojados = (+document.getElementById("form__adults").value) + (+document.getElementById("form__children").value);
    if ((totalAlojados) <= 4) {
        return cabañaDesignada = "laCascada";
    } else if (totalAlojados > 4 && totalAlojados <= 8) {
        return cabañaDesignada = "losAromos";
    } else if (totalAlojados > 8 && totalAlojados <= 12) {
        return cabañaDesignada = "losEspinillos";
    } else if (totalAlojados > 12) {
        const mensajesDeReserva = document.getElementById("div1");
        const superiorAdoce = document.createElement("p");
        superiorAdoce.textContent = `Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`;
        mensajesDeReserva.appendChild(superiorAdoce);
    } 
}


// Function "montoEstadia()" (cálculo del monto total de la estadía dependiendo de la cantidad de noches y la cabaña asignada).
const montoEstadia = () => {
    let cabañaSeleccionada = designacionDeCabaña();
    let cantidadNoches = +document.getElementById("form__nights").value;
    let montoEstadia;

    if (cabañaSeleccionada == "laCascada") {
        cabañaSeleccionada = 2000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    } else if (cabañaSeleccionada == "losAromos") {
        cabañaSeleccionada = 4000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    } else if (cabañaSeleccionada == "losEspinillos") {
        cabañaSeleccionada = 6000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    } 
}


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

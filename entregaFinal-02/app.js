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
        this.totalAlojados       = cantidadAdultos + cantidadMenores;
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
    const nuevaReserva = new Reservas ({
        nombre: document.getElementById("form__name").value,
        cantidadAdultos: +document.getElementById("form__adults").value,
        cantidadMenores: +document.getElementById("form__children").value,
        totalAlojados: totalAlojados,
        cantidadNoches: +document.getElementById("form__nights").value,
        designacionDeCabaña: designacionDeCabaña(),
        montoEstadia: montoEstadia(),
        formaDePago: document.getElementById("form__credit").value,
        mail: document.getElementById("form__mail").value
        })
        return nuevaReserva;
}

// Function "designacionDeCabaña()" (dependiendo del "totalAlojados" designa una cabaña acorde a su capacidad de personas para alojar)
const designacionDeCabaña = () => {
    let designacionDeCabaña;
    if ((totalAlojados) <= 4) {
        const designacionDeCabaña = laCascada;
        return designacionDeCabaña;
    } else if (totalAlojados > 4 && reserva.totalAlojados <= 8) {
        const designacionDeCabaña = losAromos;
        return designacionDeCabaña;
    } else if (totalAlojados > 8 && reserva.totalAlojados <= 12) {
        const designacionDeCabaña = losEspinillos;
        return designacionDeCabaña;
    } else {
        const superiorAdoce = document.createElement("p");
        superiorAdoce.textContent = `Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`;
        mensajesDeReserva.appendChild(superiorAdoce);
    } 
    return designacionDeCabaña;
}

// Function "montoEstadia()" (cálculo del monto total de la estadía dependiendo de la cantidad de noches y la cabaña asignada).
const montoEstadia = (designacionDeCabaña) => {
    const montoEstadia = cantidadNoches * i;
    return montoEstadia;
}


// Botón ejecuta: guardarLocalStorages() y resetForm(): Los datos ingresados se almacenarán automáticamente en el Local Storage al presionar el botón y se reseteará para dejar los inputs vacíos nuevamente.
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

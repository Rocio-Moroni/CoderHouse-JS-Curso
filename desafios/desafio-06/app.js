/* Se le incorpora a la página un sistema de servicio de envío de Desayuno a la cabaña, el usuario podrá elegir entre tres opciones de menúes de desayunos distintos. */

class ReservaDesayuno {
    constructor (apellido, cabaña, menu){
        this.apellido = apellido;
        this.cabaña = cabaña;
        this.menu = menu;
    }
}

function carta () {
    alert (`A continuación le mostramos los 3 desayunos que tenemos para ofrecerle.`)
}
carta()

function crearReserva1 () {
    apellido = prompt ('¡Hola!¿Cuál es el apellido de nuestro huesped?');
    cabaña = prompt ('¿Se aloja en la cabaña "La Cascada", "Los Aromos" o "Los Espinillos"?');
    menu = prompt('¿Elige el menú de desayuno Argentino, Americano o Fit?');
    return new ReservaDesayuno (apellido, cabaña, menu);
}


// Arrays que simulan el menu de cada desayuno.
const argentino = {
    id : 1,
    nombre : "ARGENTINO",
    precio : 1000,
    incluye : "Infusión a elección, jugo de naranja exprimido, dos croissants o dos tostadas de pan casero, dulce de frambuesa casero, dulce de leche, queso untable"
}

const americano = {
    id : 2,
    nombre : "AMERICANO",
    precio : 1300,
    incluye : "Una infusión a elección, huevos revueltos, tostadas francesas, pancakes con miel y panceta"
}

const fit = {
    id : 3,
    nombre : "FIT",
    precio : 1100,
    incluye : "Infusión a elección, yogurt descremado, ensalada de frutas, granola o cereales, avocado toast con pan integral"
}

desayunos = [argentino, americano, fit]

for (const argentino of desayunos) {
    alert (`El desayuno ${argentino.nombre} incluye: ${argentino.incluye} y su precio es de $${argentino.precio}`)
}

const reserva1 = crearReserva1 ();
const registrar = () => {
    alert(`El huesped ${apellido} alojado en la cabaña ${cabaña} va a desayunar el menú ${menu}`);
}

registrar()
desayunos = ["Argentino", "Americano", "Fit"];
desayunos.push ("Buffet") 
alert (`Hemos agregado un nuevo desayuno a la carta, ofrecemos ahora los siguientes menúes: ${desayunos}, si desea cambiar su elección por favor comuníquese a través de whatsapp al número +3556387951`)
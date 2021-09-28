/* El objetivo de mi proyecto es poder realizar una página web de alquiler de cabañas, en donde el usuario vaya ingresando los datos solicitados para así poder realizar una reserva. */

// Saludo de bienvenida al usuario que ingresó su nombre.
let nombre = prompt('Bienvenido, por favor ingrese su nombre');
alert (`¡Hola ${nombre}! Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas`);

// Ingreso de datos para calcular la cantidad de personas que se alojarán para poder asignarles una cabaña. 
let cantidadAdultos = parseInt (Number (prompt ('Por favor ingrese la cantidad de adultos que desean hospedarse')));
let cantidadNiños = parseInt (Number (prompt ('Por favor ingrese la cantidad de niños que desean hospedarse')));
// Ingreso de datos para saber cantidad de noches de alojamiento.
let cantidadNoches = parseInt (Number (prompt ('¿Cuántas noches desean alojarse?')));
// Cantidad total de alojados.
let suma = cantidadAdultos + cantidadNiños;


// Precio por noche dependiendo de cada cabaña.
let laCascada = 2000;
let losAromos = 4000;
let losEspinillos = 6000;

function precioPorNoche (i) {
    montoEstadia = cantidadNoches * i;
}

// Designación de cabaña en base a la cantidad de personas hospedadas. Monto total de la estadía.
if (suma <= 4) {
    alert (`¡Buenas noticias! Tenemos disponible la Cabaña "La Cascada" para recibir a ${suma} personas`);
    precioPorNoche (laCascada);
    alert (`El monto total de su estadía por ${cantidadNoches} noches es de $ ${montoEstadia}`);
} 
else if (4 < suma <= 8) {
    alert (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Aromos" para recibir a ${suma} personas`);
    precioPorNoche (losAromos);
    alert (`El monto total de su estadía por ${cantidadNoches} noches es de $ ${montoEstadia}`);
}
else if (8 < suma <= 12) {
    alert (`¡Buenas noticias! Tenemos disponible la Cabaña "Los Espinillos" para recibir a ${suma} personas`);
    precioPorNoche (losEspinillos);
    alert (`El monto total de su estadía por ${cantidadNoches} noches es de $ ${montoEstadia}`);
}
else {
    alert (`Lo sentimos, no disponemos de cabañas para alojar a más de 12 personas`);
}



// 





// let preguntaTipoPagina = parseInt(Number(prompt("Si queres una landing page ingresa 1, sino ingresa 2.")));
// let preguntaViewportsLanding = parseInt(Number(prompt("Cuantos viewports queres que tenga tu Landing page")));

// let tipoDePagina = preguntaTipoPagina => {
// if (preguntaTipoPagina == 1) {
//     paginaLandingPage(preguntaViewportsLanding);
// } else if (preguntaTipoPagina == 2) {
//     paginaNotLandingPage();
// } else {
//     alert ("El dato ingresado no es valido");
// }};

// let paginaLandingPage = (preguntaViewportsLanding) => {
// let resultado;
// if (preguntaViewportsLanding <= 3) {
//     resultado = "La pagina vale $10,000";
// } else if (3 < preguntaViewportsLanding <= 5) {
//     resultado = "La pagina vale $20,000";
// } else {resultado = "El precio no puede ser estimado facilmente, envianos un mensaje en Contacto con tu idea!"}
// console.log(resultado);
// };

// let paginaNotLandingPage = (preguntaViewportsLanding) => {
// let mensaje = "No trabajamos este tipo de paginas web";
// console.log(mensaje);
// }

// console.log(tipoDePagina(preguntaTipoPagina));
/* DESAFÍO N°1:
Crea un script en JS que le solicite al usuario ingresar uno o más datos. Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las entradas teniendo en cuenta el tipo de dato. Al finalizar mostrar el resultados con alert() o console.log() */

// Ingreso de datos por parte del usuario
let nombre = prompt ('Bienvenido, por favor ingrese su nombre')
let cabaña = prompt ('¿En qué cabaña desearían alojarse?')
let cantidadAdultos = Number (prompt ('Por favor ingrese la cantidad de adultos que desean hospedarse'))
let cantidadNiños = Number (prompt ('Por favor ingrese la cantidad de niños que desean hospedarse'))
let cantidadDias = Number (prompt ('¿Cuántas noches desean alojarse en nuestras cabañas?'))

// Operaciones matemáticas y concanetación de los datos recibidos
let saludo = nombre + ' ¡Te damos la bienvenida a nuestras Cabañas en Estancia Las Cañitas!'
let disponibilidad = '¡Buenas noticias! Tenemos disponible la Cabaña ' + cabaña + ' para recibir a ' + (cantidadAdultos + cantidadNiños) + ' personas durante ' + cantidadDias + ' noches.'

// Muestra de resultado
console.log (saludo)
console.log (disponibilidad)

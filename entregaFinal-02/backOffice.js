let arrayDatosLocalMostrar;

class User {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}

const userLogin = new User ('rocio',2712);

// Boton ejecuta chequeoLogin()

document.getElementById('btn-bo').addEventListener('click', () => {chequeoLogin(), resetForm()});

const resetForm = () => {
    document.getElementById('formBo').reset();
}

const chequeoLogin = () => {
usuario = document.getElementById('user').value;
contra = Number(document.getElementById('password').value);

    if ((usuario === 'rocio') && (contra === 2712)) {
        imprimirDatos();
    } else {
        alert('Usuario Incorrecto')
    }
}

const extraerDatosLocalMostrar = () => {
    if (JSON.parse(localStorage.getItem('listaReservas')) == null) {
        alert('No hay datos para mostrar');
    } else {
        arrayDatosLocalMostrar = JSON.parse(localStorage.getItem('listaReservas'));
        return arrayDatosLocalMostrar;
    }
}

const imprimirDatos = () => {
    let indice = 0;
    extraerDatosLocalMostrar().forEach(element => {
        indice += 1;

        document.getElementById('table__booking').innerHTML += `
        <tr>
            <td>${indice}</td>
            <td>${element.name}</td>
            <td>${element.adults}</td>
            <td>${element.children}</td>
            <td>${element.nights}</td>
            <td>${element.payment}</td>
            <td>${element.mail}</td>
        </tr>
        `
    })
}


// Buscador

const guardarValorBuscado = () => {
let valorBuscado = document.getElementById('buscador').value;
return valorBuscado;
}

// Boton buscar guardarValorBuscado()

document.getElementById('btn-search').addEventListener('click', () => {guardarValorBuscado(), imprimirDatosBuscador()});


const imprimirDatosBuscador = () => {
    let indice = 0;
    buscar().forEach(element => {
        indice += 1;

        document.getElementById('table__search').innerHTML += `
        <tr>
        <td>${indice}</td>
        <td>${element.name}</td>
        <td>${element.adults}</td>
        <td>${element.children}</td>
        <td>${element.nights}</td>
        <td>${element.payment}</td>
        <td>${element.mail}</td>
        </tr>
        `
    })
}


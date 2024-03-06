
// Referencias HTML
const lblTicket1 = document.querySelector('#lblTicket1');
const lblEscritorio1 = document.querySelector('#lblEscritorio1');
const lblTicket2 = document.querySelector('#lblTicket2');
const lblEscritorio2 = document.querySelector('#lblEscritorio2');
const lblTicket3 = document.querySelector('#lblTicket3');
const lblEscritorio3 = document.querySelector('#lblEscritorio3');
const lblTicket4 = document.querySelector('#lblTicket4');
const lblEscritorio4 = document.querySelector('#lblEscritorio4');
const lblTicket5 = document.querySelector('#lblTicket5');
const lblEscritorio5 = document.querySelector('#lblEscritorio5');
const lblTicket6 = document.querySelector('#lblTicket6');
const lblEscritorio6 = document.querySelector('#lblEscritorio6');
const lblTicket7 = document.querySelector('#lblTicket7');
const lblEscritorio7 = document.querySelector('#lblEscritorio7');
const lblTicket8 = document.querySelector('#lblTicket8');
const lblEscritorio8 = document.querySelector('#lblEscritorio8');
const lblTicket9 = document.querySelector('#lblTicket9');
const lblEscritorio9 = document.querySelector('#lblEscritorio9');
const lblTicket10 = document.querySelector('#lblTicket10');
const lblEscritorio10 = document.querySelector('#lblEscritorio10');
const lblTicket11 = document.querySelector('#lblTicket11');
const lblEscritorio11 = document.querySelector('#lblEscritorio11');
const lblTicket12 = document.querySelector('#lblTicket12');
const lblEscritorio12 = document.querySelector('#lblEscritorio12');
const lblTicket13 = document.querySelector('#lblTicket13');
const lblEscritorio13 = document.querySelector('#lblEscritorio13');
const lblTicket14 = document.querySelector('#lblTicket14');
const lblEscritorio14 = document.querySelector('#lblEscritorio14');

const proxTurno1 = document.querySelector('#prox-turno-1');
const proxTurno2 = document.querySelector('#prox-turno-2');
const proxTurno3 = document.querySelector('#prox-turno-3');
const proxTurno4 = document.querySelector('#prox-turno-4');
const proxTurno5 = document.querySelector('#prox-turno-5');
const socket = io();

// Objeto para almacenar los tickets actuales de cada escritorio
const escritorios = {};

// Función para actualizar la pantalla pública con los tickets actuales
function actualizarPantalla() {
    for (let escritorio in escritorios) {
        const lblTicket = document.querySelector(`#lblTicket${escritorio}`);
        const lblEscritorio = document.querySelector(`#lblEscritorio${escritorio}`);

        if (escritorios[escritorio]) {
            lblTicket.innerText = escritorios[escritorio].numero;
            lblEscritorio.innerText = escritorios[escritorio].escritorio;
        } else {
            lblTicket.innerText = '';
            lblEscritorio.innerText = '';
        }
    }
}

socket.on('estado-actual', (payload) => {
    // Obtener el último ticket atendido

    payload.forEach((ticket) => {
        escritorios[ticket.escritorio] = ticket;
    });

    // Actualizar la pantalla pública
    actualizarPantalla();




    // Calcular los próximos 5 tickets
    
});
socket.on('nuevo-ticket', (payload) => {
    const { escritorio, ticket } = payload;

    // Identificar el elemento de la tabla correspondiente al escritorio
    const filaEscritorio = document.getElementById(`escritorio${escritorio}`);

    // Actualizar el contenido de los elementos en esa fila con la información del nuevo ticket
    filaEscritorio.querySelector('#lblTicket1').innerText = ticket.numero;
    filaEscritorio.querySelector('#lblEscritorio1').innerText = escritorio;

    // Actualizar la pantalla pública
    actualizarPantalla();
});


socket.on('actualizar-ticket', (payload) => {
    const { escritorio, ticket } = payload;
    const elementoEscritorio = document.getElementById(`lblEscritorio${escritorio}`);
    const elementoTicket = document.getElementById(`lblTicket${escritorio}`);

    if (elementoEscritorio && elementoTicket) {
        elementoEscritorio.innerText = escritorio;
        elementoTicket.innerText = ticket.numero;
      
    }
});


const socket2 = io('http://10.105.17.44:8000');

socket2.on('connect', () => {
  console.log('Conectado al servidor emisor');
});



//
socket2.on('recibir-turnos', (payload) => {

    if (payload && Array.isArray(payload.turnosEnEspera)) {
        const turnosEnEspera = payload.turnosEnEspera;

        const primeros5Turnos = turnosEnEspera.slice(0, 5);

        primeros5Turnos.forEach((turno, index) => {
            const spanProximoTurno = document.querySelector(`#prox-turno-${index + 1}`);
            spanProximoTurno.innerText = turno.folioTurno;
        });

        // Guardar los turnos en el localStorage
        localStorage.setItem('proximosTurnos', JSON.stringify(primeros5Turnos));
    } else {
        console.error('Los datos de turnosEnEspera no son válidos:', payload);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Recuperar los datos del almacenamiento local
    const proximosTurnosString = localStorage.getItem('proximosTurnos');

    // Verificar si hay datos guardados
    if (proximosTurnosString) {
        // Convertir los datos de cadena JSON a objeto JavaScript
        const proximosTurnos = JSON.parse(proximosTurnosString);

        // Actualizar las etiquetas <span> correspondientes en publico.html
        proximosTurnos.forEach((turno, index) => {
            const spanProximoTurno = document.querySelector(`#prox-turno-${index + 1}`);
            spanProximoTurno.innerText = turno.folioTurno;
        });
    }
});



// const socket = io();



// socket.on('estado-actual', ( payload ) => {

//     const audio = new Audio('./audio/new-ticket.mp3');
//     audio.play();


//     const [ ticket1, ticket2, ticket3, ticket4,ticket5,ticket6,ticket7,ticket8,ticket9,ticket10,ticket11,ticket12,ticket13,ticket14 ] = payload;

//     if( ticket1 ){
//         lblTicket1.innerText =  ticket1.numero;
//         lblEscritorio1.innerText = ticket1.escritorio;
     
//     }
    
//     if( ticket2 ){
//         lblTicket2.innerText =  ticket2.numero;
//         lblEscritorio2.innerText = ticket2.escritorio;
     
//     }
    
//     if( ticket3 ){
//         lblTicket3.innerText =  ticket3.numero;
//         lblEscritorio3.innerText = ticket3.escritorio;
     
//     }
    
//     if( ticket4 ){
//         lblTicket4.innerText =  ticket4.numero;
//         lblEscritorio4.innerText = ticket4.escritorio;
     
//     }
//     if( ticket5){
//         lblTicket5.innerText =  ticket5.numero;
//         lblEscritorio5.innerText = ticket5.escritorio;
     
//     }
//     if( ticket6 ){
//         lblTicket6.innerText =  ticket6.numero;
//         lblEscritorio6.innerText = ticket6.escritorio;
     
//     }
//     if( ticket7 ){
//         lblTicket7.innerText =  ticket7.numero;
//         lblEscritorio7.innerText = ticket7.escritorio;
     
//     }
//     if( ticket8 ){
//         lblTicket8.innerText =  ticket8.numero;
//         lblEscritorio8.innerText = ticket8.escritorio;
//     }
//     if( ticket9 ){
//         lblTicket9.innerText =  ticket9.numero;
//         lblEscritorio9.innerText = ticket9.escritorio;
//     }
//     if( ticket10 ){
//         lblTicket10.innerText =  ticket10.numero;
//         lblEscritorio10.innerText = ticket10.escritorio;
//     }
//     if( ticket11 ){
//         lblTicket11.innerText =  ticket11.numero;
//         lblEscritorio11.innerText = ticket11.escritorio;
//     }
//     if( ticket12 ){
//         lblTicket12.innerText =  ticket12.numero;
//         lblEscritorio12.innerText = ticket12.escritorio;
//     }
//     if( ticket13 ){
//         lblTicket13.innerText =  ticket13.numero;
//         lblEscritorio13.innerText = ticket13.escritorio;
//     }
//     if( ticket14 ){
//         lblTicket14.innerText =  ticket14.numero;
//         lblEscritorio14.innerText = ticket14.escritorio;
//     }
    


// });
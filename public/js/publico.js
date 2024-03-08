
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
const selectedStandId = localStorage.getItem('selectedStandId');
  const id = selectedStandId; 
const socket2 = io('http://10.105.17.44:8000');


socket2.on('connect', () => {
  console.log('Conectado al servidor emisor');
  const selectedStandId = localStorage.getItem('selectedStandId');
  const id = selectedStandId; 
  console.log(id);




//
socket2.on(`recibir-turnos-${id}`, (payload) => {
    console.log(payload);
  
    console.log(id);
    if (payload && Array.isArray(payload.turnosEnEspera) && Array.isArray(payload.turnosSiendoAtendidos)) {
        const turnosEnEspera = payload.turnosEnEspera;
        const turnosSiendoAtendidos = payload.turnosSiendoAtendidos;

        // Limpiar posiciones anteriores
        limpiarPosiciones();

        // Obtener los primeros 5 turnos en espera
        const primeros5TurnosEspera = turnosEnEspera.slice(0, 5);

        // Mostrar los primeros 5 turnos en espera en la pantalla
        primeros5TurnosEspera.forEach((turno, index) => {
            const spanProximoTurno = document.querySelector(`#prox-turno-${index + 1}`);
            spanProximoTurno.innerText = turno.folioTurno;
        });

         // Mostrar solo los próximos turnos disponibles y dejar los demás espacios vacíos
        for (let i = primeros5TurnosEspera.length + 1; i <= 5; i++) {
            const spanProximoTurno = document.querySelector(`#prox-turno-${i}`);
            spanProximoTurno.innerText = ''; // Dejar el espacio vacío
        }

        // Mostrar los turnos siendo atendidos en las posiciones correspondientes
        turnosSiendoAtendidos.forEach((turno) => {
            const posicion = turno.posicion;
            const folioTurno = turno.folioTurno;
            const status = turno.status;
        
            // Obtener los elementos correspondientes a la posición en la pantalla
            const elementoEscritorio = document.getElementById(`lblEscritorio${posicion}`);
            const elementoTicket = document.getElementById(`lblTicket${posicion}`);
        
            if (elementoEscritorio && elementoTicket) {
                if (status === 'llamando') {
                    
                    elementoEscritorio.innerText = posicion;
                    elementoTicket.innerText = folioTurno;
                    elementoTicket.parentElement.classList.add('parpadeo');
                } else if (status === 'atendiendo') {
               
                    elementoEscritorio.innerText = posicion;
                    elementoTicket.innerText = folioTurno;
                    elementoTicket.parentElement.classList.remove('parpadeo'); 
                } else if (status === 'finalizando') {
            
                    elementoEscritorio.innerText = posicion;
                    elementoTicket.innerText = folioTurno;
                    elementoTicket.parentElement.classList.remove('parpadeo'); 
                }
            }
        });
        
    } else {
        console.error('Los datos de turnosEnEspera o turnosSiendoAtendidos no son válidos:', payload);
    }
});});


// Función para limpiar las posiciones y tickets anteriores
function limpiarPosiciones() {
    const posicionesEnPantalla = Array.from(document.querySelectorAll('[id^=lblEscritorio]')).map(elemento => elemento.id.replace('lblEscritorio', ''));
    posicionesEnPantalla.forEach(posicion => {
        const elementoEscritorio = document.getElementById(`lblEscritorio${posicion}`);
        const elementoTicket = document.getElementById(`lblTicket${posicion}`);
        if (elementoEscritorio && elementoTicket) {
            elementoEscritorio.innerText = posicion;
            elementoTicket.innerText = '';
            elementoTicket.parentElement.classList.remove('parpadeo');
        }
    });
}





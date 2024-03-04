
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



const socket = io();



socket.on('estado-actual', ( payload ) => {

    const audio = new Audio('./audio/new-ticket.mp3');
    audio.play();


    const [ ticket1, ticket2, ticket3, ticket4,ticket5,ticket6,ticket7,ticket8,ticket9,ticket10,ticket11,ticket12,ticket13,ticket14 ] = payload;

    if( ticket1 ){
        lblTicket1.innerText =  ticket1.numero;
     
    }
    
    if( ticket2 ){
        lblTicket2.innerText =  ticket2.numero;
     
    }
    
    if( ticket3 ){
        lblTicket3.innerText =  ticket3.numero;
     
    }
    
    if( ticket4 ){
        lblTicket4.innerText =  ticket4.numero;
     
    }
    if( ticket5){
        lblTicket5.innerText =  ticket5.numero;
     
    }
    if( ticket6 ){
        lblTicket6.innerText =  ticket6.numero;
     
    }
    if( ticket7 ){
        lblTicket7.innerText =  ticket7.numero;
     
    }
    if( ticket8 ){
        lblTicket8.innerText =  ticket8.numero;
     
    }
    if( ticket9 ){
        lblTicket9.innerText =  ticket9.numero;
     
    }
    if( ticket10 ){
        lblTicket10.innerText =  ticket10.numero;
     
    }
    if( ticket11 ){
        lblTicket11.innerText =  ticket11.numero;
     
    }
    if( ticket12 ){
        lblTicket12.innerText =  ticket12.numero;
     
    }
    if( ticket13 ){
        lblTicket13.innerText =  ticket13.numero;
     
    }
    if( ticket14 ){
        lblTicket14.innerText =  ticket14.numero;
     
    }
    


});
const reloj = document.getElementById('reloj');
const fecha = document.getElementById('fecha');
const agujaHora = document.getElementById('agujaHora');
const agujaMinutos = document.getElementById('agujaMinutos');
const agujaSegundos = document.getElementById('agujaSegundos');


const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let horas;
let minutos;
let segundos;

function actualizarReloj(horaReloj, minutosReloj, segundosReloj){
    let degPerSecond = 6;
    let degPerMinute = 6;
    let degPerHour = 30;

    let gradosIniciales = 90;

    let hoursReloj = (gradosIniciales) + (horaReloj * degPerHour) + (minutos * 0.5);
    
    agujaHora.style.transform = `rotate(${hoursReloj}deg)`;
    
    let mtsReloj = (gradosIniciales) + (minutosReloj * degPerMinute);
    agujaMinutos.style.transform = `rotate(${mtsReloj}deg)`;
    
    let segReloj = (gradosIniciales) + (segundosReloj * degPerSecond);
    agujaSegundos.style.transform = `rotate(${(segReloj)}deg)`;
    


}

function actualizarTiempo(){
    const date = new Date;

    horas = date.getHours();
    minutos = date.getMinutes();
    segundos = date.getSeconds();

    let mes = meses[date.getMonth()];

    actualizarReloj(horas, minutos, segundos);

    fecha.innerHTML = `${date.getDate()} de ${mes} ${date.getFullYear()}`

    // reloj.innerHTML = `
    // ${horas
    //     .toString()
    //     .padStart(2,0)
    // }:${minutos
    //     .toString()
    //     .padStart(2,0)
    // }:${segundos
    //     .toString()
    //     .padStart(2,0)}`;    
}


actualizarTiempo();
setInterval(actualizarTiempo,1000)
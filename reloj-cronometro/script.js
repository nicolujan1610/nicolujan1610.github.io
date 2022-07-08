const reloj = document.getElementById('reloj');
let horas;
let minutos;
let segundos;
function actualizarTiempo(){
    const date = new Date;
    horas = date.getHours();
    minutos = date.getMinutes();
    segundos = date.getSeconds();

    reloj.innerHTML = `
    ${horas
        .toString()
        .padStart(2,0)
    }:${minutos
        .toString()
        .padStart(2,0)
    }:${segundos
        .toString()
        .padStart(2,0)}`;    
}
actualizarTiempo();
setInterval(actualizarTiempo,1000)
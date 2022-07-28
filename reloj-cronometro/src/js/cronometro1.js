const cronometro = document.getElementById('cronometro');
const btnIniciarCronometro = document.getElementById('btnIniciarCronometro');
const btnDetenerCronometro = document.getElementById('btnDetenerCronometro');
const btnResetearCronometro = document.getElementById('btnResetearCronometro');
const btnReanudarCronometro = document.getElementById('btnReanudarCronometro');

let horas = 00;
let minutos = 00;
let segundos = 00;
let milisegundos = 00;

btnIniciarCronometro.addEventListener('click', ()=>{
    if(cronometro.innerText === "00:00:00"){
        cronometro.innerText = "00:00:00";
    } 
    btnIniciarCronometro.style.display = "none";
    btnDetenerCronometro.style.display = "flex";
    intervaloSumarTiempo = setInterval(sumarTiempo, 1000/60);
});


btnResetearCronometro.addEventListener('click',()=>{
    clearInterval(intervaloSumarTiempo);
    cronometro.innerText = "00:00:00";
    horas = 0;
    minutos = 0;
    segundos = 0;
    btnReanudarCronometro.style.display = "none";
    btnDetenerCronometro.style.display = "none";
    btnIniciarCronometro.style.display = "flex";
});

btnDetenerCronometro.addEventListener('click', ()=>{
    clearInterval(intervaloSumarTiempo);
    btnDetenerCronometro.style.display = "none";
    btnReanudarCronometro.style.display = "flex";
});

btnReanudarCronometro.addEventListener('click', ()=>{
    intervaloSumarTiempo = setInterval(sumarTiempo, 1000/60);
    btnReanudarCronometro.style.display = "none";
    btnDetenerCronometro.style.display = "flex";
})



function sumarTiempo(){
    if(segundos < 59){
        segundos++;   
        cronometro.innerText = `${horas.toString().padStart(2,0)}:${minutos.toString().padStart(2,0)}:${segundos.toString().padStart(2, 0)}`;
    } else if (minutos < 59){
        minutos++;
        segundos = 0;
        cronometro.innerText = `${horas.toString().padStart(2,0)}:${minutos.toString().padStart(2,0)}:${segundos.toString().padStart(2,0)}`
    } else {
        horas++;
        minutos = 0;
        segundos = 0;
        cronometro.innerText = `${horas.toString().padStart(2,0)}:${minutos.toString().padStart(2,0)}:${segundos.toString().padStart(2, 0)}`;
    }
}




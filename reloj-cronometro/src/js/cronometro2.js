const cronometro = document.getElementById('cronometro');
const btnIniciarCronometro = document.getElementById('btnIniciarCronometro');
const btnVueltaCronometro = document.getElementById('btnVueltaCronometro');
const btnDetenerCronometro = document.getElementById('btnDetenerCronometro');
const btnReanudarCronometro = document.getElementById('btnReanudarCronometro');
const vueltasCronometro = document.getElementById('vueltasCronometro');
const btnCleanLaps = document.getElementById('btnCleanLaps');

let cronometrar = false;

function formatearMS(tiempo_ms){
    let MS = (tiempo_ms % 1000).toString();
    let St = Math.floor(((tiempo_ms - MS) / 1000));
    let S = St % 60;
    let M = Math.floor((St / 60) % 60);
    let H = Math.floor((St/ 60 / 60));

    MS2 = MS.slice(0, -1);

    return `${M.toString().padStart(2,0)}:${S.toString().padStart(2,0)}:${MS2.padStart(2,0)}`; 
};   


btnIniciarCronometro.addEventListener('click', (e)=>{
    cronometrar = true;
    acumulado = 0;
    tiempoRef = Date.now();
    
    intervaloTiempo = setInterval(()=>{
        if(cronometrar){
            acumulado = Date.now() - tiempoRef;
        }
        cronometro.innerHTML = formatearMS(acumulado);
    }, 1000/60);
    
    btnIniciarCronometro.style.display = "none";
    btnVueltaCronometro.style.display = "flex";
});

let contadorVueltas = 0;
btnVueltaCronometro.addEventListener('click',(e)=>{
    contadorVueltas++;
    let vuelta = document.createElement('p');
    vuelta.innerText = `Vuelta ${contadorVueltas}: ${cronometro.innerHTML}`
    vueltasCronometro.appendChild(vuelta);

});


btnDetenerCronometro.addEventListener('click',()=>{
    contadorVueltas = 0;
    cronometrar = false;
    clearInterval(intervaloTiempo);
    cronometro.innerHTML = "00:00:00";
    btnVueltaCronometro.style.display = "none";
    btnIniciarCronometro.style.display = "flex";
});

btnCleanLaps.addEventListener('click',(e)=>{
    vueltasCronometro.innerHTML = "";
});




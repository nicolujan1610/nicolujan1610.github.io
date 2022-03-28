
// SUMAR Y RESTAR ENERGIA, ROUND COUNTER Y BTN NEW GAME;

const roundCounter = document.getElementById('roundCounter');
const energyCounter = document.getElementById('energyCounter');
const btnEnergyPlus = document.getElementById('btnEnergyPlus');
const btnEnergyLess = document.getElementById('btnEnergyLess');
const btnNextRound = document.getElementById('btnNextRound');
const btnNewGame = document.getElementById('btnNewGame');

btnEnergyLess.addEventListener('click', lessEnergy);
btnEnergyPlus.addEventListener('click', plusEnergy);
btnNextRound.addEventListener('click', nextRound);
btnNewGame.addEventListener('click', newGame);
document.addEventListener('keydown', KeyBind);

function KeyBind(e){
    let teclaBindeadaLess = document.getElementById('keyBindLessEnergy').innerHTML;
    let teclaBindeadaPlus = document.getElementById('keyBindPlusEnergy').innerHTML;
    let teclaBindeadaNextRound = document.getElementById('keyBindNextRound').innerHTML;
    let teclaBindeadaNewGame = document.getElementById('keyBindNewGame').innerHTML;
    if(e.key == teclaBindeadaLess){
        lessEnergy();
    }
    else if(e.key == teclaBindeadaPlus){
        plusEnergy();
    }
    else if(e.key == teclaBindeadaNextRound){
        nextRound();
    }
    else if(e.key == teclaBindeadaNewGame || e.code == teclaBindeadaNewGame){
        newGame();
    }
}

function lessEnergy(e)
{  
    let energyActual = energyCounter.innerHTML;
    if(energyActual > 0){
    energyActual--;
    }
    energyCounter.innerHTML = `${energyActual}`

}

function plusEnergy()
{
    let energyActual = energyCounter.innerHTML;
    if(energyActual < 10){
        energyActual++;
    }
    energyCounter.innerHTML = `${energyActual}`
}

function nextRound()
{
    roundCounter.innerHTML++;
    let energyActual = energyCounter.innerHTML;
    if(energyActual < 10){
        energyActual++;
        energyActual++;
    }
    if (energyActual > 10){
        energyActual = 10;
    }
    energyCounter.innerHTML = `${energyActual}`;
}

function newGame()
{
    roundCounter.innerHTML = 1;
    energyCounter.innerHTML = 3;
}

// BOTONES PARA MOVER EL MENU;

const btnLeftArrow = document.getElementById('btnLeftArrow');
const btnRightArrow = document.getElementById('btnRightArrow');
const calcAlign = document.getElementById('calcAlign');

btnLeftArrow.addEventListener('click',()=>{
    calcAlign.classList.remove("calc-align-right");
    calcAlign.classList.add("calc-align-left")
});
btnRightArrow.addEventListener('click',()=>{
    calcAlign.classList.remove("calc-align-left");
    calcAlign.classList.add("calc-align-right");
});

// KEY BINDER;

const elementBindKeys = document.getElementById('bindKeys');
const btnCerrarBinder = document.getElementById('btnCerrarBinder');
const btnAbrirBinder = document.getElementById('btnOpenBinder');
const btnBindLessEnergy = document.getElementById('bindLessEnergy');
const pressAnyKeyDiv = document.getElementById('pressAnyKeyDiv');
const bindPlusEnergy = document.getElementById('bindPlusEnergy');
const bindNextRound = document.getElementById('bindNextRound');
const bindNewGame = document.getElementById('bindNewGame');

btnCerrarBinder.addEventListener('click', cerrarBinder);
btnAbrirBinder.addEventListener('click', abrirBinder);
btnBindLessEnergy.addEventListener('click', bindearTeclaLessEnergy);
bindPlusEnergy.addEventListener('click',bindearTeclaPlusEnergy);
bindNextRound.addEventListener('click', bindearTeclaNextRound);
bindNewGame.addEventListener('click', bindearTeclaNewGame);

function bindearTeclaLessEnergy()
{
    pressAnyKeyDiv.classList.remove("presionar-tecla-hidden");
    pressAnyKeyDiv.classList.add("presionar-tecla-visible");
    const incluyePressAnyKey = pressAnyKeyDiv.classList.contains("presionar-tecla-visible");
    if(incluyePressAnyKey){
        document.addEventListener("keyup", asd);     
        function asd(e){
            let keyCodeLessEnergy = e.code;
            document.getElementById('keyBindLessEnergy').innerHTML = `${keyCodeLessEnergy}`;
            pressAnyKeyDiv.classList.remove("presionar-tecla-visible");
            pressAnyKeyDiv.classList.add("presionar-tecla-hidden");
            document.removeEventListener("keyup",asd);
        }
    }
}

function bindearTeclaPlusEnergy()
{
    pressAnyKeyDiv.classList.remove("presionar-tecla-hidden");
    pressAnyKeyDiv.classList.add("presionar-tecla-visible");
    const incluyePressAnyKey = pressAnyKeyDiv.classList.contains("presionar-tecla-visible");
    if(incluyePressAnyKey){
        document.addEventListener("keyup", asd);     
        function asd(e){
            let keyCodeLessEnergy = e.key;
            document.getElementById('keyBindPlusEnergy').innerHTML = `${keyCodeLessEnergy}`;
            pressAnyKeyDiv.classList.remove("presionar-tecla-visible");
            pressAnyKeyDiv.classList.add("presionar-tecla-hidden");
            document.removeEventListener("keyup",asd);
        }
    }
}

function bindearTeclaNextRound()
{
    pressAnyKeyDiv.classList.remove("presionar-tecla-hidden");
    pressAnyKeyDiv.classList.add("presionar-tecla-visible");
    const incluyePressAnyKey = pressAnyKeyDiv.classList.contains("presionar-tecla-visible");
    if(incluyePressAnyKey){
        document.addEventListener("keyup", asd);     
        function asd(e){
            let keyCodeLessEnergy = e.key;
            document.getElementById('keyBindNextRound').innerHTML = `${keyCodeLessEnergy}`;
            pressAnyKeyDiv.classList.remove("presionar-tecla-visible");
            pressAnyKeyDiv.classList.add("presionar-tecla-hidden");
            document.removeEventListener("keyup",asd);
        }
    }
}

function bindearTeclaNewGame()
{
    pressAnyKeyDiv.classList.remove("presionar-tecla-hidden");
    pressAnyKeyDiv.classList.add("presionar-tecla-visible");
    const incluyePressAnyKey = pressAnyKeyDiv.classList.contains("presionar-tecla-visible");
    if(incluyePressAnyKey){
        document.addEventListener("keyup", asd);     
        function asd(e){
            let keyCodeLessEnergy = e.key;
            document.getElementById('keyBindNewGame').innerHTML = `${keyCodeLessEnergy}`;
            pressAnyKeyDiv.classList.remove("presionar-tecla-visible");
            pressAnyKeyDiv.classList.add("presionar-tecla-hidden");
            document.removeEventListener("keyup",asd);
        }
    }
}


function cerrarBinder()
{
    elementBindKeys.classList.remove("binder-visible");
    elementBindKeys.classList.add("binder-hidden");
}

function abrirBinder(e)
{
    e.preventDefault();
    elementBindKeys.classList.remove("binder-hidden");
    elementBindKeys.classList.add("binder-visible")
}




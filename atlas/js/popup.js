const btnAbrirPopup = document.getElementById('login');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
})

btnCerrarPopup.addEventListener('click',function(){
	overlay.classList.remove('active');
	popup.classList.remove('active');
})


const carritoContainer = document.getElementById('carrito-container');
const btnAbrirCarrito = document.getElementById('btn-abrir-carrito');
const btnCerrarCarrito = document.getElementById('btn-cerrar-carrito');


btnAbrirCarrito.addEventListener('click', (e)=>{
	e.preventDefault();
	carritoContainer.classList.add('activo');
})

btnCerrarCarrito.addEventListener('click', (e)=>{
	e.preventDefault();
	carritoContainer.classList.remove('activo');
})
	



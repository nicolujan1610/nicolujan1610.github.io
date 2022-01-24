var btnAbrirPopup = document.getElementById('login'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
})

btnCerrarPopup.addEventListener('click',function(){
	overlay.classList.remove('active');
	popup.classList.remove('active');
})


var carritoContainer = document.getElementById('carrito-container'),
	btnAbrirCarrito = document.getElementById('btn-abrir-carrito'),
	btnCerrarCarrito = document.getElementById('btn-cerrar-carrito');


btnAbrirCarrito.addEventListener('click', (e)=>{
	e.preventDefault();
	carritoContainer.classList.add('activo');
})

btnCerrarCarrito.addEventListener('click', (e)=>{
	e.preventDefault();
	carritoContainer.classList.remove('activo');
})
	



const addToShoppingCartButtons = document.querySelectorAll('.addToCart');

addToShoppingCartButtons.forEach(addToCartButton => {
	addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');

comprarButton.addEventListener('click', comprarButtonClicked);

shoppingCartItemsContainer = document.querySelector('.shoppingCartItemContainer'
);


function addToCartClicked(event){
	const button = event.target;
	const item = button.closest('.img');

	const itemPrice = item.querySelector('.precio').textContent;
	const itemImage = item.querySelector('.item-image').src;
	

	addItemToShoppingCart(itemPrice, itemImage);
}

function addItemToShoppingCart(itemPrice, itemImage){

	const elementsImage = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemImage');

	for(let i = 0; i < elementsImage.length; i++){
		if (elementsImage[i].src === itemImage) {
			let elementQuantity = elementsImage[i].parentElement.parentElement.querySelector('.shoppingCartItemQuantity'
		);
		elementQuantity.value++
		updateShoppingCartTotal();
		return;
	 }
	}



	const shoppingCartRow = document.createElement('div');
	const shoppingCartContent = `
	<div class="carrito-item shoppingCartItem">
		<div class="item-img">
			<img class="shoppingCartItemImage" src=${itemImage}>
		</div>
		<div class="item-price">
			<b class="shoppingCartItemPrice">${itemPrice}</b>
		</div>	
		<div class="item-quantity">
			<input type="number" value="1" class="shoppingCartItemQuantity">
			<a class="btn-eliminar-item buttonDelete"><i class="fas fa-times"></i></a>
		</div>
	</div>`;
	shoppingCartRow.innerHTML = shoppingCartContent;
	shoppingCartItemsContainer.append(shoppingCartRow);


	shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)

	shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged)

	updateShoppingCartTotal();
}

function updateShoppingCartTotal(){
	let total = 0;
	const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
	const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

	shoppingCartItems.forEach(shoppingCartItem => {

		const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice'
		);
		const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$','')
		);

		const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity'
		);

		const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value
		);

		total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
	});
	shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`
}

function removeShoppingCartItem(event){
	const buttonClicked = event.target;
	buttonClicked.closest('.shoppingCartItem').remove();
	updateShoppingCartTotal();
}

function quantityChanged(event){
	const input = event.target;
	if (input.value <= 0) {
		input.value = 1;
	}
	updateShoppingCartTotal();
}

function comprarButtonClicked(){
	shoppingCartItemsContainer.innerHTML = '';
	updateShoppingCartTotal();
}
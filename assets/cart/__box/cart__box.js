import {Component} from '../../scripts/component.js';
import {Cart} from '../../scripts/ecommerce/cart.js';
import {hideCartBox} from '../__box_hide/cart__box_hide.js';
import {showCartBox} from '../__box_show/cart__box_show.js';

export class CartBox extends Component {
	/**
	 * @param {HTMLElement} renderHook 
	 * @param {Cart} cart 
	 */
	constructor(renderHook, cart) {
		super(renderHook);
		this.cart = cart;
		this.productsToRender = [];

		this.render();
	}

	render = () => {
		if(this.cart.productsInCart.length === 0) {
			this.renderListItemEmpty();
			return;
		}
		this.updateView();
	}

	renderListItemEmpty = () => {
		const emptyCartEl = this.getComponent(
			'li',
			'cart__list-item_empty'
		);
		emptyCartEl.textContent = 'Empty';

		const cartItemsList = this.renderHook
			.querySelector('.cart__items-list');

		cartItemsList.appendChild(emptyCartEl);
	}

	updateView = () => {
		this.cart.productsInCart.forEach(
			productInCart => {
				if(this.hasBeenRendered(productInCart)){
					this.incrementProductAmount(productInCart);
				}
				else {
					this.renderNewListItem(productInCart);
				}
				
				this.updateTotalPrice();
			}
		)
	}

	hasBeenRendered(productInCart) {
		const beenRendered = this.productsToRender.some(
			productToRender =>
				productToRender.product.id === productInCart.product.id
		);
		return beenRendered;
	}

	incrementProductAmount = (productInCart) => {
		const productToRender = this.productsToRender.find(
			productToRender => 
				productToRender.product.id === productInCart.product.id
		);
		const listItemAmountEl = 
			productToRender
			.element
			.querySelector('.cart__list-item-amount');
		
		listItemAmountEl.textContent = `x${productInCart.amount}`;
	}

	renderNewListItem = (productInCart) => {
		const itemsList = this.renderHook.querySelector(
			'.cart__items-list'
		);
		const {amount} = productInCart;
		const cartListItem = this.getCartListItemComponent(productInCart);
		this.productsToRender.push(
			{
				product: productInCart.product,
				amount: amount,
				element: cartListItem
			}
		);
		itemsList.appendChild(cartListItem);
	}

	getCartListItemComponent = (productInCart) => {
		const {name} = productInCart.product;
		const {amount} = productInCart;
		const cartListItemComponent = this.getComponent(
			'li',
			'cart__list-item'
		);
		cartListItemComponent.innerHTML = `
			<span class="cart__list-item-name">${name}</span>
			<span class="cart__list-item-amount">x${amount}</span>
		`;
		return cartListItemComponent;
	}

	updateTotalPrice = () => {
		const totalPriceEl = this.renderHook
			.querySelector('.cart__total-amount');
		totalPriceEl.textContent = `$${this.cart.totalPrice.toFixed(2)}`;
	}

	toogleBoxVisibility = () => {
		const cartBoxElement = document.querySelector('.cart__box');
		if(cartBoxElement.classList.contains('cart__box_show')) {
			hideCartBox(cartBoxElement);
		}
		else {
			showCartBox(cartBoxElement);
		}
	}
}
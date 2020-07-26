import {Ecommerce} from './ecommerce/ecommerce.js';
import {Product} from './ecommerce/product.js';
import {ProductsList} from '../products/__list/products__list.js';
import { CartBox } from '../cart/__box/cart__box.js';


class Main {
	constructor() {
		this.ecommerce = new Ecommerce();
		this.init();
	}

	init() {
		const cartBoxItem = document.querySelector('.cart__box');
		const cartBox = new CartBox(cartBoxItem, this.ecommerce.cart);

		const cartButton = document.querySelector('.cart__button');
		cartButton.addEventListener("click", cartBox.toogleBoxVisibility);
		
		const productsListEl = document.querySelector(`.products__list`);
		this.productsList = new ProductsList(productsListEl, this.ecommerce, cartBox);
		this.productsList.add(
			new Product(
				'Italian Cottage',
				6.99,
				'Olives, egg and salami - feel taste of Italian cottage',
				'https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=231&q=80'
			)
		);

	}
}

new Main();
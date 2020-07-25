import {Product} from './product.js';
import {CartBox} from '../../cart/__box/cart__box.js';

export class Cart {
	constructor() {
		this.productsInCart = [];
		this.totalPrice = 0;
	}

	addProduct(product) {
		let thisProductInCart = this.productsInCart.find(
			(productInCart) => productInCart.product.id === product.id
		);
		if(thisProductInCart){
			thisProductInCart.amount++;
		}
		else {
			thisProductInCart = {product: product, amount: 1};
			this.productsInCart.push(thisProductInCart);
		}

		this.totalPrice += product.price;
		return thisProductInCart;
	}
}
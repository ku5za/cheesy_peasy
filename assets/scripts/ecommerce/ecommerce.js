import {Product} from './product.js';
import {Cart} from './cart.js';
import {CartBox} from '../../cart/__box/cart__box.js';

export class Ecommerce {
	constructor() {
		this.itemsSet = [
			new Product(
				`Pepperoni`,
				5.99,
				`Cheesy pizza with classic pepperoni sausage`,
				`https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80`
			),
			new Product(
				`Margheritta`,
				4.99,
				`Classic cheesy pizza`,
				`https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`
			),
			new Product(
				`Supreme`,
				7.99,
				`Our best selling pizza with meat and vegetables`,
				`https://images.unsplash.com/photo-1589840700256-f78d6ed1ae21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80`
			)
		];

		this.cart = new Cart();
	}
}
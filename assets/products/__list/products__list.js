import {Component} from '../../scripts/component.js';
import {ProductThumbnail} from '../../product-thumbnail/product-thumbnail.js';
import {Ecommerce} from '../../scripts/ecommerce/ecommerce.js';
import { CartBox } from '../../cart/__box/cart__box.js';

export class ProductsList extends Component {
	/**
	 * 
	 * @param {HTMLElement} renderHook 
	 * @param {Ecommerce} ecommerce
	 * @param {CartBox} cartBox
	 */
	constructor(renderHook, ecommerce, cartBox) {
		super(renderHook);
		this.productsList = ecommerce.itemsSet;
		this.cart = ecommerce.cart;
		this.cartBox = cartBox;

		this.render();
	}

	render = () => {
		if(this.productsList.length == 0 || this.productsList == null)
			return;
		this.productsList.map(product => {
				const listItem = this.getNewListItem(product);
				this.renderHook.appendChild(listItem);
			}
		);
	}

	add = (product) => {
		if(product == null)
			return;
		this.renderHook.appendChild(
			this.getNewListItem(product)
		);
		this.productsList.push(product);
	}

	getNewListItem = (product) => {
		const listItem = this.getComponent(
			`li`,
			`products__list-item`
		);
		new ProductThumbnail(listItem, product, () => {
			this.cart.addProduct(product);
			this.cartBox.updateView();
		});
		return listItem;
	}
}
import {Component} from '../../scripts/component.js';
import {ProductThumbnail} from '../../product-thumbnail/product-thumbnail.js';

export class ProductsList extends Component {
	constructor(renderHook, productsList = []) {
		super(renderHook);
		this.productsList = productsList;

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
		new ProductThumbnail(listItem, product);
		return listItem;
	}
}
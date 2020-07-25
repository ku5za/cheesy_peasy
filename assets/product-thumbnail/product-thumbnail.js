import {Component} 
	from '../scripts/component.js';

export class ProductThumbnail extends Component {
	constructor(renderHook, product) {
		super(renderHook);
		this.product = product;

		this.render();
	}

	render = () => {
		const {name, price, description, pictureURL} = this.product;
		const el = this.getComponent(
			`div`,
			`product-thumbnail`
		);
		
		el.innerHTML = `
			<div class="product-thumbnail__name-container">
				<h3 class="product-thumbnail__name">
					${name}
				</h3>
			</div>
			<img class="product-thumbnail__image"
				src="${pictureURL}"
				alt="${name} pizza picture"/>
			<div class="product-thumbnail__footer">
				<p class="product-thumbnail__description">
					${description}
				</p>
				<div class="product-thumbnail__purchase-details">
					<span class="product-thumbnail__price">
						$${price}
					</span>
					<button class="product-thumbnail__button button">
						buy now
					</button>
				</div>
			</div>
		`

		this.renderHook.appendChild(el);
	}
}
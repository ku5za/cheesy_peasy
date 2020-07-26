import {Component} 
	from '../scripts/component.js';

export class ProductThumbnail extends Component {
	constructor(renderHook, product, buttonCallbackFn) {
		super(renderHook);
		this.product = product;
		this.buttonCallbackFn = buttonCallbackFn;

		this.render();
	}

	render = () => {
		const component = this.getProductThumbnailComponent();
		this.setButtonOnClickEvent(component);

		this.renderHook.appendChild(component);
	}

	getProductThumbnailComponent = () => {
		const {name, price, description, pictureURL} = this.product;
		const component = this.getComponent(
			`div`,
			`product-thumbnail`
		);
		
		component.innerHTML = `
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
		`;

		return component;
	}

	setButtonOnClickEvent = (productThumbnailElement) => {
		const button = productThumbnailElement.querySelector('.product-thumbnail__button');
		button.addEventListener("click", this.buttonCallbackFn);
	}
}
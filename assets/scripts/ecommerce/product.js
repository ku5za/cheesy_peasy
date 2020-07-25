export class Product {
	constructor(name, price, description, pictureURL) {
		this.id = Math.random();
		this.name = name;
		this.price = price;
		this.description = description;
		this.pictureURL = pictureURL;
	}
}
export class Product {
	constructor(name, price, description, pictureURL) {
		this.ID = Math.random();
		this.name = name;
		this.price = price;
		this.description = description;
		this.pictureURL = pictureURL;
	}
}
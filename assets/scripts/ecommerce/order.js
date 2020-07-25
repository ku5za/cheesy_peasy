export class Order {
	constructor(itemsList = []) {
		this.itemsList = itemsList;
	}

	sendOrder() {
		console.table(this.itemsList);
	}
}
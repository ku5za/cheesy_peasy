export class Component {
	/**
	 * Takes HTMLElement where rendered content will be placed
	 * @param {HTMLElement} renderHook 
	 */
	constructor(renderHook) {
		if(renderHook == null)
			return;
		this.renderHook = renderHook;
	}

	render() {}

	/**
	 * @param {String} elementTag
	 * @param {String} classesList 
	 * @param {Attribute[]} attributes 
	 */
	getComponent(elementTag, classesList = "", attributes = []) {
		if(elementTag == null)
			return;
		const element = document.createElement(elementTag);
		
		const classesArray = classesList.split(` `);
		element.classList.add(...classesArray);

		if(attributes.length != 0 && attributes != null) {
			for(const attribute of attributes) {
				const {name, value} = attribute;
				element.setAttribute(name, value);
			}
		}

		return element;
	}
}
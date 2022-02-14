class TodoClass {
	id: string;
	text: string;
	constructor(text: string, id?: string) {
		this.text = text;
		this.id = id ? id : new Date().toISOString();
	}
}

export default TodoClass;

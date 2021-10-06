// implement a stack for plates

class stack {
	constructor(limit = 10) {
		this.limit = limit;
		this.list = [];
	}
	add(number) {
		if (this.list.length < this.limit) {
			this.list.push(number);
		}
	}
	remove() {
		return this.list.pop();
	}
}

const main = () => {
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	let myStack = new stack(15);
	for (i in numbers) {
		myStack.add(numbers[i]);
	}
	console.log(myStack);
	let test = myStack.remove();
	while (test != undefined) {
		console.log(test);
		test = myStack.remove();
	}
};

main();

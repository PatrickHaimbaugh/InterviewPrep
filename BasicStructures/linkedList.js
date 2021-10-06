// just a list

const { node } = require("prop-types");

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(root = null) {
		this.root = root;
	}
	add(node) {
		let current = this.root;
		if (current == null) {
			this.root = node;
		} else {
			while (current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
	}

	delete(node) {
		let current = this.root;
		if (this.root == null) {
			return;
		} else if (node == this.root) {
			this.root = this.root.next;
		} else {
			while (current.next != node) {
				current = current.next;
			}
			current.next = current.next.next;
		}
	}

	print() {
		let current = this.root;
		while (current != null) {
			console.log(current.value);
			current = current.next;
		}
	}
}

const main = () => {
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let mylist = new LinkedList();
	for (i in numbers) {
		mylist.add(new Node(numbers[i]));
	}
	mylist.print();
};

main();

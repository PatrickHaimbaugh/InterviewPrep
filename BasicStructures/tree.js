// create a basic tree to store intgers given

class node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class tree {
	constructor(root) {
		this.root = root;
	}

	//adding when there is no root doesn't work
	add(newNode, current = this.root) {
		if (this.root == null) {
			this.root = newNode;
			return;
		}
		if (newNode.value < current.value) {
			// go left
			if (current.left == null) {
				current.left = newNode;
			} else {
				this.add(newNode, current.left);
			}
		} else {
			// go right
			if (current.right == null) {
				current.right = newNode;
			} else {
				this.add(newNode, current.right);
			}
		}
	}

	iterativeAdd(newNode) {
		let current = this.root;
		if (this.root == null) {
			this.root = newNode;
			return;
		}
		while (true) {
			if (newNode.value < current.value) {
				if (current.left == null) {
					current.left = newNode;
					break;
				} else {
					current = current.left;
				}
			} else {
				if (current.right == null) {
					current.right = newNode;
					break;
				} else {
					current = current.right;
				}
			}
		}
	}

	// initial should be remove(int to delete) other parameters are for recursiveness
	remove(toDelete, current = this.root, parent = null) {
		if (current.value == toDelete) {
			// found the current node to delete, get the next biggest and replace
			if (current.right != null) {
				// get the next biggest and switch
				let curChild = current.right;
				let curParent = current;
				while (curChild.left != null) {
					curParent = curChild;
					curChild = curChild.left;
				}
				if (current != curParent) {
					curParent.left = curChild.right;
				}

				current.value = curChild.value;
			} else if (current.left != null) {
				// switch the left child to parent left
				if (parent != null) {
					parent.left = current.left;
				}
			} else if (parent != null) {
				// no children and has parent
				if (parent.left == current) {
					parent.left = null;
				} else {
					parent.right = null;
				}
			} else {
				// single node at root;
				this.root = null;
			}
			return true;
		} else if (toDelete < current.value) {
			// go left
			if (current.left == null) {
				return false;
			} else {
				this.remove(toDelete, current.left, current);
			}
		} else {
			if (current.right == null) {
				return false;
			} else {
				this.remove(toDelete, current.right, current);
			}
		}
	}

	iterativeRemove(toDelete) {
		let current = this.root;
		let parent = null;
		while (true) {
			if (current.value == toDelete) {
				// found the current node to delete, get the next biggest and replace
				if (current.right != null) {
					// get the next biggest and switch
					let curChild = current.right;
					let curParent = current;
					while (curChild.left != null) {
						curParent = curChild;
						curChild = curChild.left;
					}
					if (current != curParent) {
						curParent.left = curChild.right;
					}

					current.value = curChild.value;
				} else if (current.left != null) {
					// switch the left child to parent left
					if (parent != null) {
						parent.left = current.left;
					}
				} else if (parent != null) {
					// no children and has parent
					if (parent.left == current) {
						parent.left = null;
					} else {
						parent.right = null;
					}
				} else {
					// single node at root;
					this.root = null;
				}
				return true;
			} else if (toDelete < current.value) {
				// go left
				if (current.left == null) {
					return false;
				} else {
					parent = current;
					current = current.left;
				}
			} else {
				if (current.right == null) {
					return false;
				} else {
					parent = current;
					current = current.right;
				}
			}
		}
	}

	printLowest(current = this.root) {
		if (current == null) {
			return;
		} else {
			this.printLowest(current.left);
			console.log(current.value);
			this.printLowest(current.right);
		}
	}
}

const main = () => {
	let numbers = [3, 4, 8, 1, 7, 9, 11, 16, 12, 20];
	let root = new node(5);
	let newTree = new tree(root);
	for (i in numbers) {
		console.log("adding ", numbers[i]);
		let current = new node(numbers[i]);
		newTree.iterativeAdd(current);
	}
	newTree.iterativeRemove(5);
	console.log("printing tree");
	newTree.printLowest();
};

main();

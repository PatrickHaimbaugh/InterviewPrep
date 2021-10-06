// create a queue for the a line of ppl and
class queue {
	constructor(max) {
		this.max = max;
		this.queue = [];
	}
	enqueue(name) {
		if (this.queue.length < this.max) {
			this.queue.push(name);
			return true;
		} else {
			return false;
		}
	}
	dequeue() {
		if (this.queue.length > 0) {
			return this.queue.shift();
		} else {
			return false;
		}
	}
}

const main = () => {
	let names = ["pat", "kelbyu", "emily", "dagon", "checking"];
	let test = 0;
	let myQueue = new queue(6);
	do {
		myQueue.enqueue(names[test++]);
	} while (names[test]);

	let name;
	while ((name = myQueue.dequeue()) != false) {
		console.log("dequeing ", name);
	}
};

main();

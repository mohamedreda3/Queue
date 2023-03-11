class Queue {
    constructor() {
        this.values = [];
        this.rear = -1;
        this.front = 0;
        this.length = 0;
    }

    enqueue(value) {
        ++this.rear;
        this.values[this.rear] = value;
        this.length++;
    }

    dequeue() {
        if (this.rear == this.front) return null;
        this.front++;
        this.length--;
    }

    peek() {
        if (this.rear == this.front) return null;
        return this.values[this.front]
    }

    size() {
        return this.length;
    }

    print() {
        return this.values.filter((val, index) => index >= this.front && index <= this.rear);
    }
}

const queue = new Queue;

queue.enqueue(7);
queue.enqueue(78);
queue.enqueue(780);
queue.enqueue(7800);
queue.enqueue(1780);
queue.dequeue();
queue.dequeue();
queue.enqueue(1780);
queue.enqueue(1780);
queue.enqueue(1780);
queue.dequeue();
queue.dequeue();
queue.enqueue(17890);



console.log("Queue", queue.print());
console.log("Size", queue.size());
console.log("Peek", queue.peek());
console.log("Rear", queue.rear);
console.log("Front", queue.front);
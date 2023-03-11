class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.rear = null;
        this.front = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.rear && !this.front) {
            this.rear = newNode;
            this.front = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (this.rear == this.front) return null;
        this.front = this.front.next;
        this.length--;
    }
    print() {
        let current = this.front;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
}

const queue = new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(8);
queue.dequeue();
queue.enqueue(9);
queue.enqueue(10);

console.log(queue.print());
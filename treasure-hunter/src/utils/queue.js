class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

export default class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(value) {
        let node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    dequeue() {
        const value = this.head.value
        this.head = this.head.next
        this.length--
        return value
    }
}

// q = new Queue()
// console.log(q.length)
// q.enqueue(1)
// q.enqueue(3)
// q.enqueue(2)
// console.log(q.length)

// console.log(q.dequeue())
// console.log(q.length)
// console.log(q.dequeue())
// console.log(q.length)
// console.log(q.dequeue())
// console.log(q.length)

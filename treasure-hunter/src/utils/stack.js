class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

export default class Stack {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.length++
    }

    pop() {
        const value = this.head.value
        this.head = this.head.next
        this.length--
        return value
    }
}
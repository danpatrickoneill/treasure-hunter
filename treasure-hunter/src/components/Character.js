import React from 'react';
import Queue from '../utils/queue'


const q = new Queue()
console.log(q.length)
q.enqueue(1)
q.enqueue(3)
q.enqueue(2)
console.log(q.length)
q.enqueue(5)
q.enqueue(4)

console.log(q.dequeue())
console.log(q.length)
const value = q.dequeue()
console.log(q.length)

const Character = () => {
    return (
        <div>
            {value}
            {q.length}
        </div>
    )
}

export default Character
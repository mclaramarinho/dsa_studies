class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next ?? null;
    }
}

class LinkedList {
    constructor(val) {
        if (val === null) {
            this.length = 0;
        } else {
            const node = new ListNode(val);
            this.head = node;
            this.tail = node;
            this.length = 1;
        }
    }

    // 1 --> 2 --> 3 --> 4 --> 5

    pop() {
        if (this.length === 0) return;
        if (this.length === 1) {
            const temp = this.tail;
            this.head = null;
            this.tail = null;
            return temp;
        }

        const beforeTail = this.get(this.length - 1 - 1);
        beforeTail.next = null;
        this.tail = beforeTail;
        this.length--;
        return this.tail;
    }

    push(val) {
        const newNode = new ListNode(val, null);

        if (this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    shift() {
        if (this.length === 0) return;
        if (this.length === 1) {
            const temp = this.head;

            this.head = null;
            this.tail = null;

            this.length--;

            return temp;
        }

        const prevHead = this.head;

        this.head = prevHead.next;
        prevHead.next = null;
        this.length--;

        if (this.length === 1) {
            this.tail = this.head;
        }

        return prevHead;
    }

    unshift(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.length++;
    }

    insert(index, val) {
        if (index < 0) {
            this.unshift(val);
            return;
        } else if (index > this.length - 1) {
            this.push(val);
            return;
        }

        const newNode = new ListNode(val, null);

        let prev = null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
        }
        newNode.next = current;
        prev.next = newNode;

        if (index === this.length - 1) {
            this.tail = newNode;
        } else if (index === 0) {
            this.head = newNode;
        }

        this.length++;
    }

    // TODO - remove
    remove(index) {
        if (index < 0 || index > this.length - 1) return;
        let prev = null;
        let current = this.head;
        for (let i = 0; i <= index; i++) {
            prev = current;
            current = current.next;
        }

        prev.next = current.next;

        this.length--;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) return;

        let temp = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return temp;
            }

            temp = temp.next;
        }
    }


    // TODO - set

    // TODO - reverse
}


const list = new LinkedList(1); // 1

console.log(list.push(2)) // 1 --> 2

console.log(list.get(1))

console.log(list.unshift(3)) // 3 --> 1 --> 2

console.log(list.shift()) // 1 --> 2

console.log(list.insert(1, 3)) // 1 --> 3 --> 2
console.log(list.insert(2, 5)) // 1 --> 3 --> 5
console.log(list.insert(3, 7)) // 1 --> 3 --> 5 --> 7


console.log(list.remove(1)) // 1 --> 5 --> 7
// console.log(list.remove(0)) // 5 --> 7
// console.log(list.remove(1)) // 5
// console.log(list.remove(0)) // 

// console.log(list.shift())
// console.log(list.pop())
console.log(list.head)
console.log(list.tail)
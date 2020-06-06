class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }
  // Add element to top of stack
  push(e) {
    this.items[this.count] = e
    console.log(`${e} added to ${this.count}`);
    this.count += 1
    console.log(this.count);
    console.log(this.count - 1);
    return this.count -1
  }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
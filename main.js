class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }
  // Add element to top of stack

  // return and remove top element in stack
  // return undefind if stack is empty
  pop() {
    if (this.count == 0) {return undefined}
    let deleteItem = this.items[this.count -1]
    this.count -= 1
    console.log(`${deleteItem} removed`);
    return deleteItem}
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

stack.pop()
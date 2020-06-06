class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }
  // Add element to top of stack

  // return and remove top element in stack
  push(e) {
    this.items[this.count] = e
    console.log(`${e} added to ${this.count}`);
    this.count += 1
    console.log(this.count - 1);
    return this.count -1
  }
  // return undefind if stack is empty
  pop() {
    if (this.count == 0) {return undefined}
    let deleteItem = this.items[this.count -1]
    this.count -= 1
    console.log(`${deleteItem} removed`);
    return deleteItem}
  // Check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1]
  }
  // Check if stack is empty
  isEmpty() {
    // console.log(this.count == 0 ? 'Stack is empty' : 'Stack is not empty');
    return this.count == 0
  }

  // Print element in stack
  print() {
    let str = ''
    for( let i = 0; i < this.count; i++ ) {
      str += this.items + ''
      console.log(this.items[i]);
    }
    return str
  }
  // Check size of stack
  size() {
    console.log(`${this.count} element in size`);
    return this.count
  }
}

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)
stack.peek()
stack.push(300)
stack.push(400)

stack.pop()
stack.pop()
stack.pop()
stack.print()
stack.pop()

stack.size()
stack.isEmpty()

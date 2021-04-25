interface IListNode {
  data: unknown;
  next: IListNode;
}

function getSize() {
  let count = 0;
  let node = this.head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
}

function clear(): void {
  this.head = null;
}

function getLast() {
  let lastNode = this.head;
  if (!lastNode) {
    return null;
  }
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  return lastNode;
}

function getFirst() {
  return this.head;
}

export { IListNode };

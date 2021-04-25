interface IListNode {
  data: unknown,
  next: IListNode
}
class LinkedList {
  head: IListNode

  constructor(head = null) {
    this.head = head;
  }

  private getSize () {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  private clear (): void {
    this.head = null;
  }

  private getLast () {
    let lastNode = this.head;
    if (!lastNode) { return null }
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  private getFirst () {
    return this.head;
  }
}

export {
  IListNode,
  LinkedList
};
interface IListNode {
  data: unknown,
  next: IListNode
}

class LinkedList {
  head: IListNode[]

  constructor(head = null) {
    this.head = head
  }
}

export {
  IListNode,
  LinkedList
}
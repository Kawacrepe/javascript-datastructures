interface IListNode {
  data: unknown;
  next: IListNode;
}

interface ILinkedList {
  head: IListNode;
}

function linkedList(node = null): ILinkedList {
  const linkedList: ILinkedList = Object.create({
    head: null,
  });
  if (typeof node === "object") {
    linkedList.head = node;
  }
  return linkedList;
}

function getSize(linkedList: ILinkedList): number {
  let count = 0;
  let node = linkedList.head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
}

function addNode(linkedList: ILinkedList, node: IListNode): void {
  if (!linkedList || !linkedList.head) {
    return;
  }

  let currNode = linkedList.head;

  while (node) {
    if (!currNode.next) {
      currNode.next = node;
      break;
    }
    currNode = currNode.next;
  }
}

function getLast(linkedList: ILinkedList): IListNode {
  let lastNode = linkedList.head;
  if (!lastNode) {
    return null;
  }
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  return lastNode;
}

function getFirst(linkedList: ILinkedList): IListNode {
  return linkedList.head;
}

export {
  IListNode,
  ILinkedList,
  linkedList,
  getSize,
  addNode,
  getFirst,
  getLast,
};

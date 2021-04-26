import { IListNode, linkedList, ILinkedList, getSize, addNode } from "../index";

describe("LinkedList test suite", () => {
  const node1: IListNode = {
    data: 1,
    next: null,
  };

  const node2: IListNode = {
    data: 2,
    next: null,
  };

  node1.next = node2;

  const ll = linkedList(node1);

  test("Verify if linkedList equal expectedList", () => {
    const expectedList: ILinkedList = {
      head: {
        data: 1,
        next: {
          data: 2,
          next: null,
        },
      },
    };

    expect(ll).toEqual(expectedList);
  });

  test("Get size of linkedList", () => {
    expect(getSize(ll)).toBe(2);
  });

  test("Add node onto linkedList", () => {
    const newNode: IListNode = {
      data: "hello world!",
      next: null,
    };
    addNode(ll, newNode);

    const res: ILinkedList = {
      head: {
        data: 1,
        next: {
          data: 2,
          next: {
            data: "hello world!",
            next: null,
          },
        },
      },
    };

    expect(ll).toEqual(res);
  });
});

import { IListNode, LinkedList } from '../index'

describe('LinkedList create', () => {
  let node1: IListNode = {
    data: 1,
    next: null
  }

  let node2: IListNode = {
    data:2,
    next: null
  }

  node1.next = node2

  const linkedList = new LinkedList(node1)

  const expectedList = {
    head: {
      data: 1,
      next: {
        data: 2,
        next: null
      }
    }
  }

  test('Verify if linkedList equal expectedList', () => {
    expect(linkedList).toEqual(expectedList)
  })
})
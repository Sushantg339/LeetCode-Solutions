/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(!head || left === right) return head

    let dummy = new ListNode(-1, head)
    let prevLeft = dummy

    for(let i=1 ; i<left ; i++){
        prevLeft  = prevLeft.next
    }

    let curr = prevLeft.next
    let prev = null

    for(let i=left ; i<= right ; i++){
        let node = curr.next
        curr.next = prev
        prev = curr
        curr = node
    }

    let leftNode = prevLeft.next
    prevLeft.next = prev
    leftNode.next = curr

    return dummy.next
};
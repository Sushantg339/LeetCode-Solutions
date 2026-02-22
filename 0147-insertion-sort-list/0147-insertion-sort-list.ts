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

function insertionSortList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head

    let dummy: ListNode = new ListNode(-1)
    let curr: ListNode = head

    while(curr){
        let next = curr.next
        let prev = dummy

        while(prev.next && prev.next.val < curr.val) prev = prev.next

        curr.next = prev.next
        prev.next = curr

        curr = next
    }

    return dummy.next
};
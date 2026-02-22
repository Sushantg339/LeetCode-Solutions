/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if(!head || !head.next) return head

    let dummy = new ListNode(-1)
    let curr = head

    while(curr){
        let next = curr.next
        let prev = dummy

        while(prev.next && prev.next.val < curr.val){
            prev = prev.next
        }

        curr.next = prev.next
        prev.next = curr

        curr = next
    }

    return dummy.next
};
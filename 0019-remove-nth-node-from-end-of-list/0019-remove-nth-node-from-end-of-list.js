/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0

    let temp = head

    while(temp){
        length++
        temp = temp.next
    }

    if(length === n) return head.next

    let x = length - n
    temp = head
    while(x > 1){
        temp = temp.next
        x--
    }

    temp.next = temp.next.next

    return head

};
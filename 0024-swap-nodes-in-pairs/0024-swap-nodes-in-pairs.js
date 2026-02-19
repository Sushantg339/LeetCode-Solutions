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
var swapPairs = function(head) {
    if(!head || !head.next) return head


    let temp = head
    while(temp && temp.next){
        let x = temp.val
        temp.val = temp.next.val
        temp.next.val = x
        temp = temp.next.next || null
    }

    return head
};
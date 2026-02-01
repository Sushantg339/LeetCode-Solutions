/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null || head.next === null) return null

    let map = new Map()

    let temp= head

    while(temp !== null){
        if(map.has(temp)){
            return temp
        }else{
            map.set(temp , 1)
        }

        temp = temp.next
    }

    return null

};
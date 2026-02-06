/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head) return null
    let temp = head
    while(temp){
        let newNode = new _Node(temp.val)
        newNode.next = temp.next
        temp.next = newNode
        temp = temp.next.next
    }

    temp = head
    while(temp){
        let copyNode = temp.next
        copyNode.random = temp.random ? temp.random.next : null
        temp = temp.next.next
    }

    temp = head
    let newHead = head.next
    while(temp){
        let copyNode = temp.next
        temp.next = copyNode.next
        copyNode.next = copyNode.next ? copyNode.next.next : null
        temp = temp.next
    }

    return newHead
};
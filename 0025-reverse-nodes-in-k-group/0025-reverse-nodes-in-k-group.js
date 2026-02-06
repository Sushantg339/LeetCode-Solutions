/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let temp = head
    let prevNode = null
    while(temp){
        let kth = findKthNode(temp, k)
        if(!kth){
            if(prevNode){
                prevNode.next = temp
            }
            break
        }
        let nextNode = kth.next
        kth.next = null
        reverse(temp)
        if(temp === head) head = kth
        else{
            prevNode.next = kth
        }
        prevNode = temp
        temp = nextNode
    }

    return head
};

var findKthNode = function(head , k){
    for(let i=0 ; i<k-1 && head; i++){
        head = head.next
    }
    return head
}

var reverse = function(head){
    if(!head || !head.next) return head

    let prev = null
    let curr = head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
}
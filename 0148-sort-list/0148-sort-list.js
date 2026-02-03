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
var sortList = function(head) {
    return mergeSort(head)
};

var mergeSort = function(head){
    if(head === null || head.next === null) return head

    let mid = findMiddle(head)
    let leftHead = head , rightHead = mid.next
    mid.next = null

    leftHead = mergeSort(leftHead)
    rightHead = mergeSort(rightHead)

    return merge(leftHead, rightHead)
}

var merge = function(head1, head2){
    let dummy = new ListNode(-1)
    let temp = dummy

    let t1 = head1
    let t2 = head2

    while(t1 && t2){
        if(t1.val < t2.val){
            temp.next = t1
            t1 = t1.next
            temp = temp.next
            temp.next = null
        }else{
            temp.next = t2
            t2 = t2.next
            temp = temp.next
            temp.next = null
        }
    }

    while(t1){
        temp.next = t1
        t1 = t1.next
        temp = temp.next
        temp.next = null
    }

    while(t2){
        temp.next = t2
        t2 = t2.next
        temp = temp.next
        temp.next = null
    }

    return dummy.next
}

var findMiddle = function(head){
    let slow = head
    let fast = head.next

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next 
    }

    return slow
}
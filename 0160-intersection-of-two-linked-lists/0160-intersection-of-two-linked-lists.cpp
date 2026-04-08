/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if(!headA || !headB) return nullptr;

        ListNode* i = headA;
        ListNode* j = headB;

        while(i != nullptr && j!= nullptr){
            i = i->next;
            j = j->next;
        }

        if(i == nullptr){
            i = headB;
            while(j != nullptr){
                i = i->next;
                j = j->next;
            }
            j = headA;
        }
        if(j == nullptr){
            j = headA;
            while(i != nullptr){
                i = i->next;
                j = j->next;
            }
            i = headB;
        }

        while(i != j){
            i = i->next;
            j = j->next;
        }

        return i;
    }
};
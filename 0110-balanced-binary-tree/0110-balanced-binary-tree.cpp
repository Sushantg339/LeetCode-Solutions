/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int findHeight(TreeNode* node){
        if(node == NULL) return 0;

        return 1 + max(findHeight(node->left), findHeight(node->right));
    }
    bool isBalanced(TreeNode* root) {
        if(root == NULL) return true;

        int lHeight = findHeight(root->left);
        int rHeight = findHeight(root->right);

        if(abs(lHeight - rHeight) > 1) return false;

        bool left = isBalanced(root->left);
        bool right = isBalanced(root->right);

        if(!left || !right) return false;

        return true;
    }
};
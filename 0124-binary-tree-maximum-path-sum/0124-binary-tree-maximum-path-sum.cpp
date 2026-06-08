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
    int maxSum = INT_MIN;

    int solve(TreeNode* node){
        if(node == NULL) return 0;

        int maxL = max(0, solve(node->left));
        int maxR = max(0, solve(node->right));

        int currVal = node->val + maxL + maxR;

        maxSum = max(maxSum, currVal);

        return node->val + max(maxL, maxR);
    }
    int maxPathSum(TreeNode* root) {
        if(root == NULL) return 0;
        solve(root);

        return maxSum;
    }
};
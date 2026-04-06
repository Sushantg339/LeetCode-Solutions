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
    int findSum(TreeNode* node){
        if(!node) return 0;

        int leftSum = max(0, findSum(node->left));
        int rightSum =max(0, findSum(node->right));

        int currSum = leftSum+rightSum+node->val;
        maxSum = max(maxSum, currSum);

        return node->val + max(leftSum, rightSum);
    }
    int maxPathSum(TreeNode* root) {
        findSum(root);

        return maxSum;
    }
};
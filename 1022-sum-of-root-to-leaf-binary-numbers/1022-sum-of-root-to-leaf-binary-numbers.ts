/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumRootToLeaf(root: TreeNode | null): number {
    let ans: number = 0

    function solve(node: TreeNode | null, num: number){
        if(!node){
            return
        }

        num = num * 2 + node.val;

        if (!node.left && !node.right) {
            ans += num;
            return;
        }

        solve(node.left, num);
        solve(node.right, num);
    }

    solve(root, 0)

    return ans
};
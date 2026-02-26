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

function sumNumbers(root: TreeNode | null): number {
    let sum = 0

    function solve(node: TreeNode | null, num:number): void{
        if(!node) return

        num = num * 10 + node.val;

        if(!node.left && !node.right){
            sum += num
            return
        }
        solve(node.left, num)
        solve(node.right, num)
    }

    solve(root, 0)

    return sum
};
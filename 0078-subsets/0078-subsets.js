/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = []

    let solve = function(i, ds){
        if(i===nums.length){
            ans.push([...ds])
            return
        }

        ds.push(nums[i])
        solve(i+1, ds)
        ds.pop()
        solve(i+1, ds)
    }

    solve(0, [])

    return ans
};
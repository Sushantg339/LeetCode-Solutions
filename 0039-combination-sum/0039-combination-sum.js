/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = []
    solve(0, target , [], ans, candidates)

    return ans
};

var solve = function(i, target, ds , ans, arr){
    if(target === 0){
        ans.push([...ds])
        return 
    }

    if (i === arr.length || target < 0) return

    ds.push(arr[i])
    solve(i,target-arr[i], ds, ans, arr)
    ds.pop()
    solve(i+1, target, ds , ans, arr)
}
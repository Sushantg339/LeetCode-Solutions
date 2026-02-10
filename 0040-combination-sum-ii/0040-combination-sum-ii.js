/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    let ans = []
    solve(0, target, [], ans, candidates)

    return ans
};

var solve = function(i, target, ds, ans, arr){
    if(target === 0){
        ans.push([...ds])
        return
    }

    for(let j=i ; j<arr.length ; j++){
        if(j>i && arr[j] === arr[j-1]) continue
        if(arr[j] > target) break

        ds.push(arr[j])
        solve(j + 1, target - arr[j], ds, ans, arr)
        ds.pop()
    }
}
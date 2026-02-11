/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let ans = []

    function solve(i, ds, rem){
        if(ds.length === k && rem === 0){
            ans.push([...ds])
            return
        }

        if (ds.length > k || rem < 0 || i > 9) return
        ds.push(i)
        solve(i+1, ds, rem-i)
        ds.pop()
        solve(i+1, ds,rem)
    }

    solve(1, [], n)

    return ans
};
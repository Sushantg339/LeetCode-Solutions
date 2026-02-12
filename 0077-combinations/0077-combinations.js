/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = []

    function backtrack(start, ds){
        if(ds.length === k){
            ans.push([...ds])
            return
        }

        for(let i=start ; i<=n ; i++){
            ds.push(i)
            backtrack(i+1, ds)
            ds.pop()
        }
    }

    backtrack(1,[])

    return ans
};
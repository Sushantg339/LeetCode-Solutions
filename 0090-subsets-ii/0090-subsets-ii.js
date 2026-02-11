/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => b-a)
    let ans = []

    var solve = function(i, ds){
        ans.push([...ds])

        for(let j=i ; j<nums.length ; j++){
            if(j>i && nums[j] === nums[j-1]) continue
        
            ds.push(nums[j])
            solve(j+1, ds)
            ds.pop()
        }
    }

    solve(0, [])

    return ans
};
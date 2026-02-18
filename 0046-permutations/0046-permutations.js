/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!Array.isArray(nums)) return []
    let ans = []
    let arr = [...nums]
    function solve(i){
        if(i === arr.length){
            ans.push([...arr])
            return
        }

        for(let j = i; j < arr.length; j++){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j]= temp

            solve(i+1)

            temp = arr[i]
            arr[i] = arr[j]
            arr[j]= temp
        }
    }

    solve(0)
    return ans
};

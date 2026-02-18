/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let ans = []
    let arr = [...nums]

    function solve(i){
        if(i === arr.length){
            ans.push([...arr])
            return
        }

        let set = new Set()

        for(let j=i ; j<arr.length ; j++){
            if(set.has(arr[j])) continue

            set.add(arr[j])

            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            solve(i+1)

            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

        }
    }

    solve(0)

    return ans
};
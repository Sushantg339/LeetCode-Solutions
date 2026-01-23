/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    let ans = new Array()

    let i=0
    while(i<nums.length-2){
        if(i>0 && nums[i] === nums[i-1]){
            i++
            continue
        }

        let j = i+1
        let k = nums.length-1

        while(j<k){
            let sum = nums[i]+nums[j]+nums[k]

            if(sum > 0) k--
            else if(sum < 0) j++
            else{
                ans.push([nums[i], nums[j], nums[k]])
                j++
                k--

                while(j<k && nums[j] == nums[j-1]) j++
                while(j<k && nums[k] == nums[k+1]) k--
            }
        }
        i++
    }
    return ans
};
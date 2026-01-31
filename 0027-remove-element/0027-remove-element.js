/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    let j = 0

    while(i<nums.length){
        if(nums[i] !== val){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }
        i++
    }

    return j
};
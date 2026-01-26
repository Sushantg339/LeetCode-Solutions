/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let s = 0
    let e = nums.length-1
    let ans = -1
    while(s<e){
        let mid = Math.floor(s + (e-s)/2)
        if(nums[mid] > nums[e]){
            s = mid+1
        }else{
            e = mid
        }
    }

    return nums[s]
};
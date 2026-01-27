/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0

    let s = 0
    let e = nums.length-1

    if(nums[s] > nums[s+1]) return s
    if(nums[e] > nums[e-1]) return e

    s++
    e--

    while(s<e){
        let mid = Math.floor(s + (e-s)/2)
        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) return mid
        else if(nums[mid] > nums[mid+1]) e = mid-1
        else if(nums[mid] > nums[mid-1]) s = mid+1
        else s = mid+1
    }

    return s
};
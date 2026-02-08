/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length
    let ind = -1

    for(let i=n-2 ; i>=0 ; i--){
        if(nums[i] < nums[i+1]){
            ind = i
            break
        }
    }

    if(ind === -1){
        return reverse(nums, 0, nums.length-1)
    }

    for(let i=n-1 ; i>ind ; i--){
        if(nums[i] > nums[ind]){
            let temp = nums[ind]
            nums[ind] = nums[i]
            nums[i] = temp
            break
        }
    }

    reverse(nums , ind+1 , nums.length-1)
};

var reverse = function(arr, i , j){
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
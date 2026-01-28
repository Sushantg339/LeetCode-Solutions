/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let s = 1
    let e =  Math.max(...nums)

    let ans = e
    while(s<=e){
        let mid = Math.floor(s + (e-s)/2)
        let sum = 0
        for(let i=0 ; i<nums.length ; i++){
            sum += Math.ceil(nums[i] / mid)
        }

        if(sum <= threshold){
            ans = mid
            e = mid-1
        }else{
            s = mid+1
        }
    }

    return ans
};
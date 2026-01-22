/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map()

    let prefSum = 0
    let count = 0

    map.set(prefSum, 1)
    for(let i=0 ; i<nums.length ; i++){
        prefSum += nums[i]
        if(map.has(prefSum - k)) {
            count += map.get(prefSum - k)
        }

        map.set(prefSum, (map.get(prefSum) || 0) + 1)
    }
    return count
};
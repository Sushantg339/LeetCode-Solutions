/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (nums.length === 1) return nums[0]

    if (nums[0] !== nums[1]) return nums[0]
    if (nums[nums.length - 1] !== nums[nums.length - 2]) return nums[nums.length - 1]

    let s = 1
    let e = nums.length - 2

    while (s < e) {
        let mid = Math.floor(s + (e - s) / 2)
        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) return nums[mid]

        if (
            (mid % 2 !== 0 && nums[mid] === nums[mid - 1]) ||
            (mid % 2 === 0 && nums[mid] === nums[mid + 1])
        ) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }

    }

    return nums[s]
};
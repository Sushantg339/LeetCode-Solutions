function smallestBalancedIndex(nums: number[]): number {
    let n: number = nums.length

    let suffix = new Array(n).fill(1)

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1]
    }

    let leftSum = 0

    for(let i=0 ; i<n ; i++){
        if(leftSum === suffix[i]) return i

        leftSum += nums[i]
    }

    return -1
};
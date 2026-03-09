function smallestBalancedIndex(nums: number[]): number {
    let n: number = nums.length

    let totalProduct = 1

    for(let i=1 ; i<n ; i++){
        totalProduct *= nums[i]
    }

    let leftSum = 0
    let rightProduct = totalProduct

    for(let i=0 ; i<n ; i++){
        if(i>0){
            rightProduct /= nums[i]
        }

        if(leftSum === rightProduct) return i

        leftSum += nums[i]
    }

    return -1
};
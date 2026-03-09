function smallestBalancedIndex(nums: number[]): number {
    let sum: number[] = new Array(nums.length)
    sum[0] = 0

    for(let i=1 ; i<nums.length ; i++){
        sum[i] = sum[i-1] + nums[i-1]
    }

    let mul: number[] = new Array(nums.length)

    mul[mul.length-1] = 1

    for(let i=mul.length-2 ; i>=0 ; i--){
        mul[i] = mul[i+1] * nums[i+1]
    }

    for(let i=0 ; i<nums.length ; i++){
        if(mul[i] === sum[i]){
            return i
        }
    }

    return -1
};
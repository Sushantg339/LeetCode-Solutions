function productExceptSelf(nums: number[]): number[] {
    let ans:number[] = new Array(nums.length)

    let prefix:number = 1
    for(let i=0 ; i<nums.length ; i++){
        ans[i] = prefix
        prefix = prefix * nums[i]
    }

    let suffix:number = 1

    for(let i=nums.length-1 ; i>=0 ; i--){
        ans[i] = ans[i] * suffix
        suffix = suffix * nums[i]
    }

    return ans
};
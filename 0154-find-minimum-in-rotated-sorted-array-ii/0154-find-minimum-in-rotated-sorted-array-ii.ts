function findMin(nums: number[]): number {
    let s = 0
    let e = nums.length-1
    let ans = -1

    while(s <= e){
        let mid = Math.floor(s + (e-s)/2)
        if(nums[mid] > nums[e]){
            s = mid+1
        }else if(nums[mid] < nums[e]){
            e = mid
        }else{
            e--
        }
    }
    return nums[s]
};
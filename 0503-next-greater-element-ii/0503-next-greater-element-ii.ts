function nextGreaterElements(nums: number[]): number[] {
    let n = nums.length


    let ans: number[] = []

    for(let i=0 ; i<nums.length ; i++){
        let elem = -1
        
        for(let step = 1; step < n ; step++){
            let j = (i+step)%n

            if(nums[j] > nums[i]){
                elem = nums[j]
                break
            }
        }

        ans.push(elem)
    }

    return ans
};
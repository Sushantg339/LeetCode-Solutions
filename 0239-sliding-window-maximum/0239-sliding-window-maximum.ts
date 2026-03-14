function maxSlidingWindow(nums: number[], k: number): number[] {
    let dq: number[] = []
    let ans: number[] =  []
    for(let i=0 ; i<nums.length ; i++){

        if(dq.length && dq[0] <= i-k){
            dq.shift()
        }

        while(dq.length && nums[dq[dq.length-1]] <= nums[i]){
            dq.pop()
        }

        dq.push(i)
        
        if(i>=k-1){
            ans.push(nums[dq[0]])
        }
    }

    return ans
};
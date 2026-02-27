function majorityElement(nums: number[]): number[] {
    let num1: number | null= null
    let num2: number | null = null
    let count1 = 0
    let count2 =0

    for(let i=0 ; i<nums.length ; i++){
        if(nums[i] === num1) count1++
        else if(nums[i] === num2) count2++
        else if(count1 === 0){
            num1 = nums[i]
            count1++
        }else if(count2 === 0){
            num2 = nums[i]
            count2++
        }else{
            count1--
            count2--
        }
    }

    count1 = 0
    count2 = 0

    for(let i=0 ; i<nums.length ; i++){
        if(nums[i] === num1) count1++
        else if(nums[i] === num2) count2++
    }

    let n: number = nums.length
    let ans: number[] = []

    if(count1 > Math.floor(n/3)) ans.push(num1)
    if(count2 > Math.floor(n/3)) ans.push(num2)

    return ans
};
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let ans: number[] = []
    for(let i=0 ; i<nums1.length ; i++){
        let j=0 
        for(; j<nums2.length ; j++){
            if(nums1[i] === nums2[j]) break
        }

        let elem = -1
        for(let k=j+1 ; k<nums2.length ; k++){
            if(nums2[k] > nums1[i]){
                elem = nums2[k]
                break
            }
        }
        ans.push(elem)
    }

    return ans
};
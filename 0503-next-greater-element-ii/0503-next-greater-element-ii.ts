function nextGreaterElements(nums: number[]): number[] {
    let st: number[] = []
    let n: number = nums.length

    let nge: number[] = new Array(n)

    for(let i=2*n-1 ; i>=0 ; i--){
        while(st.length && st[st.length-1] <= nums[i%n]){
            st.pop()
        }

        if(i<n){
            if(!st.length){
                nge[i] = -1
            }else{
                nge[i] = st[st.length-1]
            }
        }

        st.push(nums[i%n])
    }

    return nge
};
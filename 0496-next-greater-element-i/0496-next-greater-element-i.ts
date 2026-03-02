function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let map = new Map<number, number>()
    let st: number[] = []

    for(let i=nums2.length-1 ; i>=0 ; i--){
        while(st.length && st[st.length-1] <= nums2[i]){
            st.pop()
        }

        map.set(nums2[i], st.length ? st[st.length-1] : -1)
        st.push(nums2[i])
    }

    return nums1.map(num => map.get(num))
};
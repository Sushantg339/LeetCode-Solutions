function largestRectangleArea(heights: number[]): number {
    let st: number[] = []
    let n = heights.length
    let maxArea = 0

    for(let i=0 ; i<n ; i++){
        while(st.length && heights[st[st.length-1]] > heights[i]){
            let height = heights[st.pop()]

            let pse = st.length ? st[st.length-1] : -1
            let width = i - pse - 1

            maxArea = Math.max(maxArea , height * width)
        }
        st.push(i)
    }

    while(st.length){
        let height = heights[st.pop()]

        let pse = st.length ? st[st.length-1] : -1
        let width = heights.length - pse - 1

        maxArea = Math.max(maxArea , height * width)
    }

    return maxArea
};
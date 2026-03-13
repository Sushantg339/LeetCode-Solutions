function maximalRectangle(matrix: string[][]): number {
    let n = matrix[0].length
    let heights: number[] = new Array(n).fill(0)
    let maxArea = 0

    for(let i=0 ; i<matrix.length ; i++){
        for(let j=0 ; j<n ; j++){
            if(matrix[i][j] === '1') heights[j]++
            else heights[j] = 0
        }
        maxArea = Math.max(maxArea , largestAreaRectangle(heights))
    }

    return maxArea
};

function largestAreaRectangle(arr: number[]): number{
    arr.push(0)
    let st: number[] = []
    let maxArea = 0
    let n = arr.length

    for(let i=0 ; i<n ; i++){
        while(st.length && arr[st[st.length-1]] > arr[i]){
            let height = arr[st.pop()]

            let pse = st.length ? st[st.length-1] : -1
            let width = i - pse - 1

            maxArea = Math.max(maxArea, height*width)
        }
        st.push(i)
    }

    return maxArea
}
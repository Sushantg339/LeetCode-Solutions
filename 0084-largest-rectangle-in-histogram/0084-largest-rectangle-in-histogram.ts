function largestRectangleArea(arr: number[]): number {
    let nse: number[] = findNSE(arr)
    let pse: number[] = findPSE(arr)

    let max = 0;

    for(let i=0 ; i<arr.length ; i++){
        let width = nse[i] - pse[i] - 1
        let area = width * arr[i]

        max = max > area ? max : area
    }

    return max
};

function findNSE(arr: number[]): number[]{
    let st: number[] = []
    let n = arr.length
    let nse: number[] = new Array(n)

    for(let i=n-1 ; i>=0 ; i--){
        while(st.length && arr[st[st.length-1]] >= arr[i]){
            st.pop()
        }

        nse[i] = st.length ? st[st.length-1] : n

        st.push(i)
    }

    return nse
}

function findPSE(arr: number[]): number[]{
    let st: number[] = []
    let n: number = arr.length
    let pse: number[] = new Array(n)

    for(let i=0 ; i<n ; i++){
        while(st.length && arr[st[st.length-1]] >= arr[i]){
            st.pop()
        }

        pse[i] = st.length ? st[st.length-1] : -1

        st.push(i)
    }

    return pse
}
function sumSubarrayMins(arr: number[]): number {
    let nse: number[] = findNSE(arr)
    let pse: number[] = findPSE(arr)

    const MOD = 1000000007

    let total = 0

    for(let i=0 ; i<arr.length ; i++){
        let left = i - pse[i]
        let right = nse[i] - i

        total = (total + (left*right*arr[i])) % MOD
    }

    return total
};

function findNSE(arr: number[]): number[]{
    let n: number = arr.length
    let nse: number[] = new Array(n)
    let st: number[] = []
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
    let n = arr.length
    let pse: number[] = new Array(n)
    let st: number[] = []

    for(let i=0 ; i<n ; i++){
        while(st.length && arr[st[st.length-1]] > arr[i]){
            st.pop()
        }

        pse[i] = st.length ? st[st.length-1] : -1

        st.push(i)
    }

    return pse
}
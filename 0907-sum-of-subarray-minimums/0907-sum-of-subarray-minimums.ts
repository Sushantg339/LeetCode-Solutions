function sumSubarrayMins(arr: number[]): number {
    let nse: number[] = findNSE(arr)
    let pse: number[] = findPSE(arr)

    let total = 0
    const MOD = 1000000007

    for(let i=0 ; i<arr.length ; i++){
        let left = i- pse[i] 
        let right = nse[i] - i

        let contri = (arr[i] * left * right) % MOD

        total = (total + contri)%MOD
    }

    return total
};

function findNSE(arr: number[]): number[]{
    let st: number[] = []
    let ans: number[] = new Array(arr.length)

    for(let i=arr.length-1 ; i>=0 ; i--){
        while(st.length && arr[st[st.length-1]] >= arr[i]){
            st.pop()
        }

        ans[i] = st.length ? st[st.length-1] : arr.length
        st.push(i)
    }

    return ans
}

function findPSE(arr: number[]): number[]{
    let n = arr.length
    let ans: number[] = new Array(n)
    let st: number[] = []

    for(let i=0 ; i<n ; i++){
        while(st.length && arr[st[st.length-1]] > arr[i]){
            st.pop()
        }

        ans[i] = st.length ? st[st.length-1] : -1
        st.push(i)
    }

    return ans
}
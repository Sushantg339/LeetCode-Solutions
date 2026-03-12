function subArrayRanges(nums: number[]): number {
    let largest: number = subarrayMaximum(nums)
    let smallest: number = subarrayMinimum(nums)

    return largest-smallest
};

function subarrayMaximum(arr: number[]): number{
    let nge: number[] = findNGE(arr)
    let pge: number[] = findPGE(arr)
    let total = 0
    for(let i=0 ; i<arr.length ; i++){
        let left = i - pge[i]
        let right = nge[i] - i
        total += (left * right * arr[i])
    }

    return total
}

function subarrayMinimum(arr: number[]): number{
    let nse: number[] = findNSE(arr)
    let pse: number[] = findPSE(arr)
    let total = 0
    for(let i=0 ; i<arr.length ; i++){
        let left = i - pse[i]
        let right = nse[i] - i
        total += (left * right * arr[i])
    }

    return total
}

function findNGE(arr: number[]): number[]{
    let st: number[] = []
    let n = arr.length
    let nge: number[] = new Array(n)

    for(let i=n-1 ; i>=0 ; i--){
        while(st.length && arr[st[st.length-1]] <= arr[i]){
            st.pop();
        }

        nge[i] = st.length ? st[st.length-1] : n

        st.push(i)
    }

    return nge
}

function findPGE(arr: number[]): number[]{
    let st: number[] = []
    let n = arr.length
    let pge: number[] = new Array(n)

    for(let i=0 ; i<n ; i++){
        while(st.length && arr[st[st.length-1]] < arr[i]){
            st.pop()
        }

        pge[i] = st.length ? st[st.length-1] : -1

        st.push(i)
    }

    return pge
}

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
    let n = arr.length
    let pse: number[] = new Array(n)

    for(let i=0 ; i<n ; i++){
        while(st.length && arr[st[st.length-1]] > arr[i]){
            st.pop()
        }

        pse[i] = st.length ? st[st.length-1] : -1

        st.push(i)
    }
    return pse
}
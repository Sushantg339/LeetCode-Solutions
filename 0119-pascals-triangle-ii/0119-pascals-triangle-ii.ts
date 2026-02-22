function getRow(rowIndex: number): number[] {
    let ans: number[] = new Array(rowIndex+1)

    ans[0] = 1

    for(let i=1 ; i<=rowIndex ; i++){
        ans[i] = ans[i-1] * (rowIndex-i+1) / i
    }

    return ans
};
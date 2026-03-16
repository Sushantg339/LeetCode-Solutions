function generateMatrix(n: number): number[][] {
    let ans: number[][] = new Array()
    for(let i=0 ; i<n ; i++){
        ans[i] = new Array()
    }

    let minR = 0, minC = 0
    let maxR = n-1, maxC = n-1
    let a = 1
    while(minR <= maxR && minC <= maxC){
        for(let i=minC ; i<=maxC ; i++){
            ans[minR][i] = a
            a++
        }
        minR++

        for(let i=minR ; i<=maxR ; i++){
            ans[i][maxC] = a
            a++
        }
        maxC--

        if(minR <= maxR){
            for(let i=maxC ; i>=minC ; i--){
                ans[maxR][i] = a
                a++
            }
            maxR--
        }

        if(minC <= maxC){
            for(let i=maxR ; i>=minR ; i--){
                ans[i][minC] = a
                a++
            }
            minC++
        }
    }

    return ans
};
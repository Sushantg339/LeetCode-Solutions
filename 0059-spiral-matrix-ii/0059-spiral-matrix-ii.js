/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let mat = new Array(n)

    for(let i=0 ; i<mat.length ; i++){
        mat[i] = new Array(n)
    }

    let minR=0, minC=0
    let maxC= n-1
    let maxR = n-1
    let val = 1
    while(minR <= maxR && minC <= maxC){
        for(let i=minC ; i<=maxC ; i++){
            mat[minR][i] = val++
        }
        minR++

        for(let i=minR ; i<=maxR ; i++){
            mat[i][maxC] = val++
        }
        maxC--

        if(minR <= maxR){
            for(let i=maxC ; i>=minC ; i--){
                mat[maxR][i] = val++
            }
            maxR--
        }

        if(minC <= maxC){
            for(let i=maxR ; i>=minR ; i-- ){
                mat[i][minC] = val++
            }
            minC++
        }
    }

    return mat
};
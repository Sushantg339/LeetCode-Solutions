/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = new Array(numRows)
    for(let i=0 ; i<numRows ; i++){
        ans[i] = new Array(i+1);
        for(let j=0 ; j<=i ; j++){
            ans[i][j] = combination(i,j)
        }
    }

    return ans;
};

var combination = function(n,r){
    let res = 1;

    for(let i=0 ; i<r ; i++){
        res = res * (n-i)
        res = Math.floor(res/(i+1))
    }

    return res
}
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length, cols = matrix[0].length

    let s = 0, e = cols-1

    while(s < rows && e>=0){
        if(matrix[s][e] === target) return true
        else if(matrix[s][e] > target){
            e--
        }else s++
    }

    return false
};
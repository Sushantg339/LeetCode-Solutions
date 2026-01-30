/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length

    let s = 0
    let e = rows * cols -1

    while(s<=e){
        let mid = Math.floor(s + (e-s)/2)

        let r = Math.floor(mid / cols)
        let c = mid % cols

        if(matrix[r][c] === target) return true
        else if(matrix[r][c] > target) e = mid-1
        else s = mid+1
    }

    return false
};
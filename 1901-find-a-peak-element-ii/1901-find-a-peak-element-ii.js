/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(matrix) {
    let s = 0
    let e = matrix[0].length-1

    while(s<=e){
        let mid = Math.floor(s + (e-s)/2)

        let maxRow = 0

        for(let i=0 ; i<matrix.length ; i++){
            if(matrix[i][mid] > matrix[maxRow][mid]){
                maxRow = i
            }
        }

        let left = mid-1 >= 0 ? matrix[maxRow][mid-1] : -1
        let right = mid+1 <= matrix[0].length-1 ? matrix[maxRow][mid+1] : -1

        let elem = matrix[maxRow][mid]

        if(elem > left && elem > right) return [maxRow, mid]
        else if(elem < right) s = mid+1
        else e = mid-1
    }

    return [-1,-1]
};
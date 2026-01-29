/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let s = 0
    let e = arr.length-1

    while(s<=e){
        let mid = Math.floor(s + (e-s)/2)
        let missingNumbers = arr[mid]-(mid+1)

        if(missingNumbers < k) s = mid+1
        else e = mid-1
    }

    return s + k
};
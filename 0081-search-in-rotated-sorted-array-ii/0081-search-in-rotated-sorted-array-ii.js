/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(arr, target) {
    let i=0
    let j = arr.length-1

    while(i<=j){
        let mid = Math.floor(i + (j-i)/2)
        if(arr[mid] === target) return true
        else if(arr[i] == arr[mid] && arr[j] == arr[mid]){
            i++
            j--
        }
        else if(arr[i] <= arr[mid]){
            if(arr[i] <= target && target < arr[mid]){
                j = mid-1
            }else{
                i = mid+1
            }
        }else{
            if(arr[mid] < target && target <= arr[j]){
                i = mid+1
            }else{
                j = mid-1
            }
        }
    }

    return false
};
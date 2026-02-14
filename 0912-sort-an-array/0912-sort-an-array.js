/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    mergeSort(nums , 0 , nums.length-1)

    return nums
};

var mergeSort = function(arr , s , e){
    if(s>=e) return

    let mid = Math.floor(s + (e-s)/2)

    mergeSort(arr, s, mid)
    mergeSort(arr, mid+1, e)

    merge(arr, s , mid, e)

    return arr
}

var merge = function(arr, s , mid, e){
    let newArr = new Array(e-s+1)

    let k = 0;
    let i = s
    let j = mid+1
    while(i<=mid && j<= e){
        if(arr[i] > arr[j]){
            newArr[k++] = arr[j++]
        }else{
            newArr[k++] = arr[i++]
        }
    }

    while(i<=mid){
        newArr[k++] = arr[i++]
    }
    while(j<=e){
        newArr[k++] = arr[j++]
    }

    for(let x = 0; x<newArr.length ; x++){
        arr[s+x] = newArr[x]
    }
}
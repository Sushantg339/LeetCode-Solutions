/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length
    let newArr = new Array()
    let i = 0
    let j = 0

    while(i<n1 && j<n2){
        if(nums1[i] < nums2[j]){
            newArr.push(nums1[i])
            i++
        }else{
            newArr.push(nums2[j])
            j++
        }
    }

    while(i<n1){
        newArr.push(nums1[i])
        i++
    }

    while(j<n2){
        newArr.push(nums2[j])
        j++
    }

    let mid = Math.floor(newArr.length / 2)
    if(newArr.length % 2 === 0){
        return (newArr[mid] + newArr[mid-1]) / 2
    }

    return newArr[mid]
};
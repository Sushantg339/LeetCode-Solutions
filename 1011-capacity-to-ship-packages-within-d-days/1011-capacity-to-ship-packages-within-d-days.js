/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let s = Math.max(...weights)
    let e = 0
    for(let i=0 ; i<weights.length ; i++){
        e += weights[i]
    }

    while(s<=e){
        let mid = Math.floor(s + (e-s)/2)
        let daysReq = calcDays(weights, mid)

        if(daysReq <= days) {
            ans = mid
            e = mid-1
        }
        else s = mid+1
    }

    return ans
};

var calcDays = function(arr, cap){
    let dayReq = 1, load = 0;
    for(let i=0 ; i<arr.length ; i++){
        if(load + arr[i] > cap){
            dayReq++
            load = arr[i]
        }else{
            load += arr[i]
        }
    }
    return dayReq
}
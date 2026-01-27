/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(n) {
    if(n<2) return n

    let s = 1
    let e = Math.floor(n/2)
    let ans = 1

    while(s<=e){
        let mid = Math.floor(s + (e-s)/2)
        let sqMid = mid*mid

        if(sqMid === n) return mid
        else if(sqMid < n){
            ans = mid
            s = mid+1
        }else e = mid-1
    }

    return ans
};
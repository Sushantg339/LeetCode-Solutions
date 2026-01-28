/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(m*k > bloomDay.length) return -1

    let s = Math.min(...bloomDay)
    let e = Math.max(...bloomDay)

    while(s<e){
        let mid = Math.floor(s + (e-s)/2)

        let count = 0
        let boq = 0

        for(let i=0 ; i<bloomDay.length ; i++){
            if(bloomDay[i] <= mid){
                count++

                if(count === k){
                    boq++
                    count = 0
                }
            }else{
                count = 0
            }
        }

        if(boq >= m){
            e = mid
        }else{
            s = mid+1
        }
    }

    return s

    return -1
};
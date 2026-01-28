/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let s = 1
    let e = piles[0]

    for(let i=1 ; i<piles.length ; i++){
        e = e > piles[i] ? e : piles[i]
    }

    let ans = e
    while(s<=e){
        let mid = Math.floor(s + (e-s)/2)

        let totalHours = 0
        for(let i=0; i<piles.length ; i++){
            totalHours += Math.ceil(piles[i] / mid)
        }

        if(totalHours <= h){
            ans = mid
            e = mid-1
        }else{
            s = mid+1
        }
    }

    return ans
};
function isPerfectSquare(num: number): boolean {
    if(num < 1) return false

    let s = 1
    let e = num

    while(s <= e){
        let mid = Math.floor(s + (e-s)/2)

        if(mid*mid === num) return true
        else if(mid > num/mid) e = mid-1
        else s = mid+1
    }

    return false
};
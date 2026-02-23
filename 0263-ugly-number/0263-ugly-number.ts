function isUgly(n: number): boolean {
    if(n <= 0) return false
    for(let x of [2,3,5]){
        while(n%x === 0){
            n = n/x
        }
    }

    return n === 1
};
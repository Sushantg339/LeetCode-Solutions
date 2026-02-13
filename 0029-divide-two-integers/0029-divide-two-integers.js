/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(n, d) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if(n === INT_MIN && d===-1) return INT_MAX

    let sign = ((n<0) ^ (d<0)) ? -1 : 1

    n = Math.abs(n);
    d = Math.abs(d);

    let ans = 0;

    while(n >= d){
        let temp = d
        let multiple = 1 

        while(n >= temp + temp){
            temp += temp
            multiple += multiple
        }

        n-= temp
        ans += multiple
    }

    return sign === 1 ? ans : -ans
};
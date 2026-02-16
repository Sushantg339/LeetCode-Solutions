/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x>0 ? 1 : -1
    x = Math.abs(x)

    let rev = 0
    while(x>0){
        if(rev > Math.floor(2 ** 31 / 10) || (rev === Math.floor(2**31 / 10) && x%10 > 7)){
            return 0  
        } 
        rev = rev*10 + (x%10)
        x = Math.floor(x/10)
    }

    return sign*rev
};
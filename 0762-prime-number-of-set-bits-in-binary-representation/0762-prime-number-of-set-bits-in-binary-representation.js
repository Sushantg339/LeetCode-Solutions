/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0
    for(let i=left ; i<=right ; i++){
        let setBits = countSetBits(i)

        if(isPrime(setBits)){
            count++
        }
    }

    return count
};

var isPrime = function(n){
    if(n<2) return false
    for(let i=2 ; i*i <= n ; i++){
        if(n % i === 0) return false
    }

    return true
}

var countSetBits = function(num){
    let count = 0;
    while(num){
        num = num & (num - 1);
        count++;
    }
    return count;
}
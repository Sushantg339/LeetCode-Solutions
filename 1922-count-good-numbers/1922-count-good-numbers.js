/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1000000007n

    let evenIndices = BigInt(Math.floor((n+1)/2))
    let oddIndices = BigInt(Math.floor(n/2))

    let ans = (modPow(5n, evenIndices, MOD)*modPow(4n, oddIndices, MOD))%MOD

    return Number(ans)
};

var modPow = function(n,x,mod){
    if(x===0n) return 1n

    let half = modPow(n, x/2n, mod)
    let res = (half*half)%mod

    if(x%2n === 0n) return res

    return (res*n)%mod

}
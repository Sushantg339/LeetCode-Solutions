/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim()
    if(s.length === 0) return 0
    let i = 0
    let ans = ''
    if(s[0] === '-' || s[0] === '+'){
        ans = s[0]
        i=1
    }

    while(i<s.length && s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57){
        ans += s[i]
        i++
    }

    let num = Number(ans)
    if(isNaN(num)) return 0

    if (num < -(2 ** 31)) return -(2 ** 31);
    if (num > (2 ** 31 - 1)) return (2 ** 31 - 1);
    
    return num
};
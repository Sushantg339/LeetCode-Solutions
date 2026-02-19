/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    let arr = s.split(' ')
    let word = arr[arr.length-1]

    return word.length
};
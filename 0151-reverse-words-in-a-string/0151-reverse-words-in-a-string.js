/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = []
    let word = ''

    for(let i=s.length-1 ; i>=0 ; i--){
        if(s[i] !== ' '){
            word = s[i] + word
        }else if(word.length > 0){
            arr.push(word)
            word = ''
        }
    }

    if(word.length > 0){
        arr.push(word)
    }

    return arr.join(' ')
};
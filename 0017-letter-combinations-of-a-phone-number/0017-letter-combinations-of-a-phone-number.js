/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let ans = []
    if(digits.length === 0) return ans
    
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    function solve(i, str){
        if(i === digits.length){
            ans.push(str)
            return
        }
        let characters = map[digits[i]]
        for(let ch of characters){
            solve(i+1, str+ch)
        }
    }

    solve(0, '')

    return ans
};
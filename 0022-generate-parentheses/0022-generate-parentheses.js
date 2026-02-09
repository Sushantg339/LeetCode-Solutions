/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    solve('', 0, 0, n , res)

    return res
};

var solve = function(str, open, close, n , res){
    if(str.length === 2*n){
        res.push(str)
        return
    }

    if(open < n){
        solve(str + '(', open+1, close, n, res)
    }

    if(close < open){
        solve(str + ')', open , close+1, n , res)
    }
}
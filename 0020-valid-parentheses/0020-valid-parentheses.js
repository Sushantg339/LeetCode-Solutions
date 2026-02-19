/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = []
    let top = -1
    for(let i=0 ; i<s.length ; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            top++
            st.push(s[i])
        } else if(s[i] === ')' && st[top] === '('){
            st.pop()
            top--
        } else if(s[i] === ']' && st[top] === '['){
            st.pop()
            top--
        } else if(s[i] === '}' && st[top] === '{') {
            st.pop()
            top--    
        } else {
            return false
        }
    }

    return st.length === 0
};
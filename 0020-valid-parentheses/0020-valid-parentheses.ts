function isValid(s: string): boolean {
    let st: string[] = []

    for(let i=0 ; i<s.length ; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            st.push(s[i])
        }else{
            if(s[i] === ')' && st[st.length-1] === '('){
                st.pop()
            }else if(s[i] === '}' && st[st.length-1] === '{'){
                st.pop()
            }else if(s[i] === ']' && st[st.length-1] === '['){
                st.pop()
            }else{
                return false
            }
        }
    }

    return st.length === 0
};
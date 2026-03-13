function removeKdigits(num: string, k: number): string {
    let st: string[] = []

    for(let i=0 ; i<num.length ; i++){
        while(st.length && k>0 && st[st.length-1] > num[i]){
            st.pop()
            k--
        }

        st.push(num[i])
    }

    while(k>0){
        st.pop()
        k--
    }

    let result = st.join('').replace(/^0+/, '')

    return result === "" ? "0" : result
};
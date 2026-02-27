/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let st = 0
    let e = s.length-1

    while(st<e){
        let temp = s[st]
        s[st] = s[e]
        s[e]= temp
        st++
        e--
    }
};
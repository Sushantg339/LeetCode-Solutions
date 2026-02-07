/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false

    let m1 = new Map()
    let m2 = new Map()
    for(let i=0 ; i<s.length ; i++){
        let c1 = s[i]
        let c2 = t[i]

        if((m1.has(c1) && m1.get(c1) !== c2) || (m2.has(c2) && m2.get(c2) !== c1)){
            return false
        }

        m1.set(c1, c2)
        m2.set(c2, c1)
    }

    return true
};
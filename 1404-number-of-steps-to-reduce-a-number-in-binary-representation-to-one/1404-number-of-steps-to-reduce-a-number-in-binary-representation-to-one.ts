function numSteps(s: string): number {
    let steps: number = 0
    let carry: number = 0

    for(let i=s.length-1 ; i>0 ; i--){
        let bit = Number(s[i])

        if((bit + carry) === 1){
            steps += 2
            carry = 1
        }else{
            steps += 1
        }
    }

    return steps+carry
};
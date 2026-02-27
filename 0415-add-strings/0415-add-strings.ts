function addStrings(num1: string, num2: string): string {
    let i = num1.length-1
    let j = num2.length-1
    let carry = 0
    let ans = ''

    while(i>=0 || j>=0 || carry > 0){
        let d1 = i>=0 ? Number(num1[i]) : 0
        let d2 = j>=0 ? Number(num2[j]) : 0

        let sum = d1 + d2 + carry
        ans = (sum%10) + ans
        carry = Math.floor(sum / 10)

        i--
        j--
    }

    return ans
};
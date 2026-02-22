function twoSum(numbers: number[], target: number): number[] {
    let s: number = 0;
    let e: number = numbers.length-1

    while(s<e){
        let sum = numbers[s] + numbers[e]

        if(sum === target) return [s+1, e+1]
        else if(sum < target) s++
        else e--
    }

    return [-1,-1]
};
function minBitFlips(start: number, goal: number): number {
    let ans = start > goal? start ^ goal : goal ^ start

    let count = 0;

    while(ans > 0){
        if(ans & 1) count++

        ans = ans >> 1;
    }

    return count
};
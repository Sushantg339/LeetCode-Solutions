function findDifferentBinaryString(nums: string[]): string {
    let n: number = nums[0].length
    let ans = ""
    function solve(i, s){
        if(i === n){
            if(!nums.includes(s)){
                ans = s
            }
            return
        }
        if (ans !== "") return;

        solve(i+1, s + '0')
        solve(i+1, s + '1')
    }

    solve(0, "")

    return ans
};
function trap(height: number[]): number {
    let s = 0
    let e = height.length-1

    let leftMax = 0
    let rightMax = 0

    let total = 0

    while(s<e){
        if(height[s] < height[e]){
            if(height[s] >= leftMax){
                leftMax = height[s]
            }else{
                total += leftMax - height[s]
            }
            s++
        }else{
            if(height[e] >= rightMax){
                rightMax = height[e]
            }else{
                total += rightMax - height[e]
            }
            e--
        }
    }

    return total
};
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = new Array(height.length)
    let right = new Array(height.length)

    left[0] = height[0], right[right.length-1] = height[height.length-1]
    let maxLeft = left[0]
    for(let i=1; i<left.length ; i++){
        maxLeft = maxLeft > height[i] ? maxLeft  : height[i]
        left[i] = maxLeft
    }

    let maxRight = height[height.length-1]
    for(let i=right.length-2; i>=0 ; i--){
        maxRight = maxRight > height[i] ? maxRight : height[i]
        right[i] = maxRight
    }

    let totalWater = 0
    for(let i=0 ; i<height.length ; i++){
        let water = Math.min(left[i],right[i]) - height[i]
        totalWater += water
    }

    return totalWater
};
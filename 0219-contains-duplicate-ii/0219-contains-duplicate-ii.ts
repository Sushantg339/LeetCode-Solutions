function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map()
    for(let i=0 ; i<nums.length ; i++){
        if(map.has(nums[i])){
            let diff = i - map.get(nums[i])
            if(diff <= k) return true
        }
        map.set(nums[i], i)
    }

    return false
};
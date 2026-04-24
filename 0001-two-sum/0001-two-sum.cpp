class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> mpp;
        int n = nums.size();
        for(int i=0 ; i<n ; i++){
            int newTar = target - nums[i];

            if(mpp.find(newTar) != mpp.end()){
                return {i, mpp[newTar]};
            }
            mpp[nums[i]] = i;
        }

        return {-1, -1};
    }
};
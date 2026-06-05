class Solution {
public:
    int maxProfit(vector<int>& nums) {
        int n = nums.size();

        int maxi = 0;
        int currMax = nums[n-1];
        for(int i=n-2 ; i>=0 ; i--){
            currMax = max(currMax, nums[i]);
            maxi = max(maxi, currMax-nums[i]);
        }

        return maxi;
    }
};
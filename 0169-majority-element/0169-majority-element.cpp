class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int ans = nums[0];
        int vote = 1;
        int n = nums.size();
        for (int i = 1; i < n; i++) {
            if (vote == 0) {
                vote++;
                ans = nums[i];
            } else if (nums[i] == ans) {
                vote++;
            } else {
                vote--;
            }
        }
        return ans;
    }
};
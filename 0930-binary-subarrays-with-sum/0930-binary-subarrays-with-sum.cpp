class Solution {
public:
    int countSubarray(vector<int>& nums, int goal) {
        if (goal < 0)
            return 0;

        int count = 0, l = 0, r = 0, n = nums.size();
        int sum = 0;
        while (r < n) {
            sum += nums[r];

            while (sum > goal) {
                sum -= nums[l];
                l++;
            }

            count += (r - l + 1);
            r++;
        }

        return count;
    }
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        int a = countSubarray(nums, goal);
        int b = countSubarray(nums, goal - 1);

        return a - b;
    }
};
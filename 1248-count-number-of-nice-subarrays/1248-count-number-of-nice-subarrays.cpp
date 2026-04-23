class Solution {
public:
    int countSubarray(vector<int>& nums, int k) {
        int l = 0, r = 0, count = 0, curr = 0;
        int n = nums.size();
        while (r < n) {
            if (nums[r] % 2) {
                curr++;
            }

            while (curr > k) {
                if (nums[l] % 2) {
                    curr--;
                }
                l++;
            }

            count += (r - l + 1);
            r++;
        }
        return count;
    }
    int numberOfSubarrays(vector<int>& nums, int k) {
        return countSubarray(nums, k) - countSubarray(nums, k - 1);
    }
};
class Solution {
public:
    vector<int> pivotArray(vector<int>& nums, int pivot) {
        int lessCount = 0;
        int equalCount = 0;
        int n = nums.size();

        for(int i=0 ; i<n ; i++){
            if(nums[i] == pivot) equalCount++;
            if(nums[i] < pivot) lessCount++;
        }

        int i =0;
        int j = lessCount;
        int k = lessCount + equalCount;

        vector<int> ans(nums.size());

        for(auto &num: nums){
            if(num < pivot){
                ans[i++] = num;
            }else if(num == pivot){
                ans[j++] = num;
            }else{
                ans[k++] = num;
            }
        }
        
        return ans;
    }
};
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int i=0;
        int j=0;
        int k = nums.size()-1;

        while(i<=k){
            if(nums[i] == 0){
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j++;
                i++;
            }else if(nums[i] == 2){
                int temp = nums[i];
                nums[i] = nums[k];
                nums[k] = temp;
                k--;
            }else i++;
        }
    }
};
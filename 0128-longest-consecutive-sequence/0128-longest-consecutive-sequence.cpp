class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int n = nums.size();
        int longest = 0;
        unordered_set<int> st(nums.begin(), nums.end());

        for(int num: st){
            if(st.find(num-1) == st.end()){
                int currNum = num;
                int count = 1;

                while(st.find(currNum+1) != st.end()){
                    count++;
                    currNum++;
                }

                longest = max(longest, count);
            }
        }

        return longest;
    }
};
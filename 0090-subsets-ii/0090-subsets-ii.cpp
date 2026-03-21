class Solution {
public:
    void solve(int i, vector<int>& ds, vector<int>& nums, vector<vector<int>>& ans, set<vector<int>>& stt){
        if(i==nums.size()){
            if(stt.find(ds) != stt.end()){
                return;
            }

            ans.push_back(ds);
            stt.insert(ds);
            return;
        }

        ds.push_back(nums[i]);
        solve(i+1, ds, nums, ans, stt);
        ds.pop_back();

        solve(i+1, ds, nums, ans, stt);
    }
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        vector<vector<int>> ans;
        vector<int> ds;
        set<vector<int>> stt;

        solve(0, ds, nums, ans, stt);

        return ans;
    }
};
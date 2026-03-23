class Solution {
public:
    vector<vector<int>> ans;

    void solve(int i, vector<int>& ds, int target, vector<int>& candidates){
        if(target == 0){
            ans.push_back(ds);
            return;
        }

        for(int j=i ; j<candidates.size() ; j++){
            if(j>i && candidates[j] == candidates[j-1]) continue;
            if(candidates[j] > target) break;

            ds.push_back(candidates[j]);
            solve(j+1, ds, target-candidates[j], candidates);
            ds.pop_back();
        }
    }
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {

        sort(candidates.begin(), candidates.end());
        vector<int> ds;

        solve(0, ds, target, candidates);

        return ans;
    }
};
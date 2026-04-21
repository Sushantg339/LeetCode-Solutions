class Solution {
public:
    int characterReplacement(string s, int k) {
        int l=0, r=0, maxLen = 0, maxFreq=0;
        int n = s.size();

        unordered_map<char, int> mpp;

        while(r<n){
            mpp[s[r]]++;

            maxFreq = max(maxFreq, mpp[s[r]]);

            int changes = r-l+1 - maxFreq;

            if(changes > k){
                mpp[s[l]]--;
                l++;
            }else maxLen = max(maxLen, r-l+1);

            r++;
        }
        return maxLen;
    }
};
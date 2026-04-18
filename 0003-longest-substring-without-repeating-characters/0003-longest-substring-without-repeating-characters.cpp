class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> mpp;
        int l = 0, r = 0, maxLen = 0;
        int n = s.length();
        while (r < n) {
            if (mpp.find(s[r]) != mpp.end()) {
                l = max(l, mpp[s[r]] + 1);
            }
            mpp[s[r]] = r;
            maxLen = max(maxLen, r - l + 1);
            r++;
        }
        return maxLen;
    }
};
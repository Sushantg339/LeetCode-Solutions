class Solution {
public:
    int maxScore(vector<int>& cardPoints, int k) {
        int lSum = 0, rSum = 0;
        int maxSum = 0;
        int l = k - 1;
        int r = cardPoints.size();
        for (int i = l; i >= 0; i--) {
            lSum += cardPoints[i];
        }

        maxSum = max(maxSum, lSum + rSum);

        while (l >= 0) {
            lSum -= cardPoints[l];
            l--;
            r--;
            rSum += cardPoints[r];

            maxSum = max(maxSum, lSum + rSum);
        }

        return maxSum;
    }
};
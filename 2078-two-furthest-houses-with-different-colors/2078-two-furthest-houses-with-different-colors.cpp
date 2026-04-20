class Solution {
public:
    int maxDistance(vector<int>& colors) {
        int maxDist = 0;
        int n = colors.size();

        for(int i=0 ; i<n ; i++){
            for(int j=i ; j<n ; j++){
                if(colors[i] != colors[j]){
                    maxDist = max(maxDist, abs(i-j));
                }
            }
        }
        return maxDist;
    }
};
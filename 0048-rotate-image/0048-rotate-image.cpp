class Solution {
public:
    void reverse(vector<int> &arr){
        int i=0;
        int j=arr.size()-1;
        while(i<j){
            swap(arr[i], arr[j]);
            i++;
            j--;
        }
    }
    void rotate(vector<vector<int>>& matrix) {
        // transpose

        int n = matrix.size();
        int m = matrix[0].size();

        for(int i=0 ; i<n ; i++){
            for(int j=i+1 ; j<m ; j++){
                swap(matrix[i][j], matrix[j][i]);
            }
        }

        // reverse
        for(int i=0 ; i<n ; i++){
            reverse(matrix[i]);
        }
    }
};
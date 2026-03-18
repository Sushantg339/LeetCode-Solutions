class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {\
        int rows = matrix.size();
        int cols = matrix[0].size();
        int i = 0;
        int j = rows * cols - 1;

        while(i<=j){
            int mid = i + (j-i)/2;

            int r = mid / cols;
            int c = mid % cols;

            if(matrix[r][c] == target) return true;
            else if(matrix[r][c] > target) j = mid-1;
            else i = mid+1;
        }

        return false;
    }
};
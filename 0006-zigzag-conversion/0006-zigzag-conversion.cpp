class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1 || numRows >= s.length()) return s;

        vector<string> rows(numRows);
        int currRow = 0;
        bool down = true;

        for(char ch: s){
            rows[currRow] += ch;

            if(currRow == 0){
                down = true;
            }else if(currRow == numRows - 1){
                down = false;
            }

            currRow += down ? 1 : -1;
        }

        string ans;
        for(int i=0 ; i<numRows ; i++){
            ans += rows[i];
        }

        return ans;
    }
};
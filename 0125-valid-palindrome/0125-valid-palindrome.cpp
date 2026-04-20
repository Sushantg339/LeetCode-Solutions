class Solution {
public:
    bool isPalindrome(string str) {
        int s = 0, e = str.size()-1;

        while(s<e){
            if(!isalnum(str[s])){
                s++;
                continue;
            }

            if(!isalnum(str[e])){
                e--;
                continue;
            }

            if(tolower(str[s]) != tolower(str[e])) return false;

            s++;
            e--;
        }
        return true;
    }
};
class Solution {
public:
    bool isPalindrome(int x) {
        if(x < 0) return false;
        if(x == 0) return true;

        int rev = 0;
        int copy = x;

        while(x != 0){
            int last = x%10;

            if(rev > INT_MAX/10 || (rev == INT_MAX/10 && last>7)) return false;

            rev = rev*10 + last;
            x /= 10;
        }

        return rev == copy;
    }
};
class Solution {
public:
    int mirrorDistance(int n) {
        int rev = 0;
        int copy = n;

        while(copy > 0){
            int last = copy%10;
            rev = rev*10 + last;

            copy /= 10;
        }

        return abs(n - rev);
    }
};
class Solution {
public:
    const int MOD = 1337;
    int power(int x, int n){
        int res = 1;
        x = x % MOD;

        while(n>0){
            if(n%2){
                res = res * x % MOD;
            }

            x = x*x % MOD;
            n = n/2;
        }

        return res;
    }
    int superPow(int a, vector<int>& b) {

        int ans = 1;

        for(int num: b){
            ans = (power(ans, 10) * power(a, num)) % MOD;
        }

        return ans;
    }
};
class Solution {
public:
    int nthUglyNumber(int n) {
        set<long> s;

        s.insert(1);
        long curr;

        for(int i=0 ; i<n ; i++){
            curr = *s.begin();
            s.erase(s.begin());

            s.insert(curr*2);
            s.insert(curr*3);
            s.insert(curr*5);
        }
        return (int)curr;
    }
};
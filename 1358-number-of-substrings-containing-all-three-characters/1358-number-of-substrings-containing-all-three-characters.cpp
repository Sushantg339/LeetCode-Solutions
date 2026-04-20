class Solution {
public:
    int numberOfSubstrings(string s) {
        vector<int> hash(3, -1);
        int ans = 0;
        for(int i=0 ; i<s.size() ; i++){
            if(s[i] == 'a'){
                hash[0] = i;
            }else if(s[i] == 'b'){
                hash[1] = i;
            }else{
                hash[2] = i;
            }

            if(hash[0]!=-1 && hash[1] != -1 && hash[2] != -1){
                int index = min(hash[0], min(hash[1], hash[2]));
                ans += index+1;
            }
        }

        return ans;
    }
};
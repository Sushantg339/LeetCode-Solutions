function asteroidCollision(arr: number[]): number[] {
    let st: number[] = []

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] > 0){
            st.push(arr[i])
        }else{
            while(st.length && st[st.length-1] > 0 && st[st.length-1] < Math.abs(arr[i])){
                st.pop()
            }

            if(st.length && st[st.length-1] === Math.abs(arr[i])){
                st.pop()
            }else if(!st.length || st[st.length-1] < 0){
                st.push(arr[i])
            }
        }
    }

    return st
};
function sortByBits(arr: number[]): number[] {
    let n = arr.length
    let bits = new Array(n)

    for(let i=0 ; i<n ; i++){
        bits[i] = countSetBits(arr[i])
    }

    for(let i=1 ; i<n ; i++){
        let key = arr[i]
        let keyBits = bits[i]

        let j = i-1

        while(j >= 0 && (bits[j] > keyBits || (bits[j] === keyBits && arr[j] > key))){
            arr[j+1] = arr[j]
            bits[j+1] = bits[j]
            j--
        }
        arr[j+1] = key
        bits[j+1] = keyBits
    }

    return arr
};

function countSetBits(num : number): number{
    if(num <= 1) return num

    let count = 0;

    while(num > 0){
        count += (num & 1)

        num = num >> 1
    }

    return count
}
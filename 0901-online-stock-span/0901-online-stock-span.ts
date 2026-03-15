class StockSpanner {
    private index: number
    private st: number[][]
    constructor() {
        this.st= []
        this.index = -1
    }

    next(price: number): number {
        this.index++
        
        while(this.st.length && this.st[this.st.length-1][0] <= price){
            this.st.pop()
        }

        let pgeIndex = this.st.length ? this.st[this.st.length-1][1] : -1

        this.st.push([price , this.index])

        return this.index - pgeIndex
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
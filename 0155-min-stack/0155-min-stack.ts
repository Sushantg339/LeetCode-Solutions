class MinStack {
    private st: number[]
    private minSt: number[]
    constructor() {
        this.st = []
        this.minSt = []
    }

    push(val: number): void {
        this.st.push(val)
        if(this.minSt.length === 0 || val <= this.minSt[this.minSt.length-1]){
            this.minSt.push(val)
        }
    }

    pop(): void {
        const popped = this.st.pop()

        if(this.minSt[this.minSt.length-1] == popped){
            this.minSt.pop()
        }
    }

    top(): number {
        return this.st[this.st.length-1]
    }

    getMin(): number {
        return this.minSt[this.minSt.length-1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MyQueue {
    private s1: number[]
    private s2: number[]

    constructor() {
        this.s1 = []
        this.s2 = []
    }

    push(x: number): void {
        while(this.s1.length){
            this.s2.push(this.s1.pop())
        }

        this.s1.push(x)

        while(this.s2.length){
            this.s1.push(this.s2.pop())
        }

    }

    pop(): number {
        return this.s1.pop()
    }

    peek(): number {
        return this.s1[this.s1.length-1]
    }

    empty(): boolean {
        return this.s1.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
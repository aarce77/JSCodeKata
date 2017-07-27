class UtopianTree {
    constructor() { }

    Solve(n) {
        if(n === 0) { return 1; }
    
        let h = 1;
        let idx = 0;
        do {
            h = (idx%2 === 0) ? h+h : h+1;
            idx++;
        } while(idx<n);
        return h;
    }
}
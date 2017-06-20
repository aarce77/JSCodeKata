class AngryProfessor {
    constructor(arrivals, threshold) {
        this.Thershold = threshold;
        this.Arrivals = arrivals;
    }

    IsClassCancelled() {
        var onTime = this.Arrivals.filter((a) => { return a <= 0; });
        return onTime.length < this.Thershold;
    }
}
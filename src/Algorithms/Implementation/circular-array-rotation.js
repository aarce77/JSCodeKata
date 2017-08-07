/// Circular Array Rotation
/// https://www.hackerrank.com/challenges/circular-array-rotation/problem
class CircularArrayRotation {
    constructor(array, rotations) {
        this.array = array; // the array to rotate.
        this.rotations = rotations; // the number of rotations.
    }

    Solve(idx) {
        return this.ArrayRotation(this.array, this.rotations, idx);
    }

    ArrayRotation(arry, r, idx) {
        var i = 0;

        if(r > arry.length) {
            i = idx - (r%arry.length);
            return this.FindValue(i, arry);
        } 
        i = (idx - r);
        return this.FindValue(i, arry);
    }

    FindValue(i, arry) {
        if(i >=0 && i < arry.length) { 
            return arry[i]; 
        }
        return arry[arry.length+i]; 
    }
}
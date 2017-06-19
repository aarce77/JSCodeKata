class CamelCase {
    constructor(str) {
        this.WordCount = str ? str.replace(/[^A-Z]/g, "").length +1 : 0;
    }
}
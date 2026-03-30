export class IdGenerator {
    next() {
        return `${this.prefix}${this.idCount++}`;
    }
    constructor(prefix = '__id'){
        this.prefix = prefix;
        this.idCount = 0;
    }
}

export default class Action {
    constructor(type, description, amount) {
        this.id = Math.floor(Math.random() * 1001);
        this.type = type;
        this.description = description;
        this.amount = type == "expense" ? -amount : amount;

    }
    get(prop) {
        return this[prop];
    }
    set(prop, value) {
        this[prop] = value;
    }
}


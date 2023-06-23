export default class ActionsManager {
    constructor() {
        this.balance = 0;
        this.arrOperations = [];
    }
    get(prop) {
        return this[prop];
    }
    set(prop, value) {
        this[prop] = value;
    }
    addAction(operation) {
        this.arrOperations.push(operation)
        this.calcBalance();
    }
    deleteAction(id) {
        let indexToDelete = this.arrOperations.findIndex((action) => action.id == id);
        this.arrOperations.splice(indexToDelete, 1);
        this.calcBalance();
    }
    updateAction(id, newAmount) {
        let indexToUpdate = this.arrOperations.findIndex((action) => action.id == id);
        this.arrOperations[indexToUpdate].amount = this.arrOperations[indexToUpdate].type == "expense" ? -newAmount : newAmount;
        this.calcBalance();
    }
    calcBalance() {
        this.balance = this.arrOperations.reduce((total, value) =>
            total + value.amount, 0
        );
        document.getElementById("balance").innerText = `Balance: ${this.balance}`;
    }
}
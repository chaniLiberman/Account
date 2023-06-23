import Action from "./Classes/Action.js";
import ActionsManager from "./Classes/ActionsManager.js";

let manager = new ActionsManager();
let food = new Action("expense", "fruits", 200);
manager.addAction(food);
manager.addAction(new Action("income", "salary", 10000));
console.log(manager.arrOperations);
// manager.deleteAction(food.id);
// console.log(manager.arrOperations);
manager.updateAction(food.id, 350);
manager.calcBalance();
console.log(manager.balance);

function showActionsInTable() {
    document.getElementById("actions").innerHTML = "";
    for (let action of manager.arrOperations) {
        document.getElementById("actions").innerHTML +=
            `<tr class=${action.type == "income" ? "text-success" : "text-danger"}>
        <td>${action.description}</td>

        <td>${action.amount}</td>
       
        <td><i class="fa-regular fa-pen-to-square" onclick="updateAction(${action.id})"></i></td>
    
        <td><i class="fa-solid fa-trash-can" onclick="deleteAction(${action.id})"></i></td>
        </tr>`;
    }
}
showActionsInTable()
//+ - ממיר ממחרוזת למספר
window.addNewAction = () => {
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;
    let amount = +document.getElementById("amount").value;

    let newAction = new Action(type, description, amount);
    manager.addAction(newAction);
    console.log(manager.arrOperations);
    document.getElementById("type").value = "income";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
    showActionsInTable()
}

window.updateAction = (id) => {
    let userUpdate = prompt("enter new amount:", "");
    if (userUpdate == null || userUpdate == "" || userUpdate != +userUpdate) {
        alert("Sorry Something went wrong!")
    }
    else {
        manager.updateAction(id, +userUpdate);
        showActionsInTable();
    }
};

window.deleteAction = (id) => {
    if (confirm("Are you sure to want delete?")) {
        manager.deleteAction(id);
        showActionsInTable();
    }
};

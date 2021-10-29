import * as view from "./view.js";
import * as model from "./model.js";
///////////////////////init//////////////////////////////////
const tasks = model.ListTask();
const allBtns = view.ShowAllTask(tasks);
allBtns.flat().forEach((btn, index) => {
    if (index % 2 == 0) {
        btn.addEventListener("click", () => DeleteTask(btn));
    } else {
        btn.addEventListener("click", () => UpdateTask());
    }
    // btn.delBtn.addEventListener("click", () => console.log("delete"));
    // btn.editBtn.addEventListener("click", () => console.log("edit"));
})
////////////////////////////////////////////////////////////
// Add new task
document.getElementById("add-new-task").addEventListener("click" , () => AddTask());
function AddTask() {
    const input = document.getElementById("new-task").value;
    model.SaveTask(input);
    const twoBtn = view.addNewTask(input);
    twoBtn[0].addEventListener("click", () => DeleteTask(twoBtn[0]));
    twoBtn[1].addEventListener("click", () => UpdateTask());
    //window.location.reload();
}

//Clear task
document.getElementById("delete-all").addEventListener("click", () => ClearTask());
function ClearTask() {
    model.SetData([]);
    view.ClearTask();
}

// Delete
function DeleteTask(button) {
    model.RemoveTask(button.getAttribute("id"));
    view.DeleteTask(button);
}

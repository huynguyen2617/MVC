import * as view from "./view.js";
import * as model from "./model.js";
///////////////////////init//////////////////////////////////
const tasks = model.ListTask();
const allBtns = view.ShowAllTask(tasks);
allBtns.forEach(btn => {
btn.delBtn.addEventListener("")
});
////////////////////////////////////////////////////////////
// Add new task
document.getElementById("add-new-task").addEventListener("click" , () => AddTask());
function AddTask() {
    const input = document.getElementById("new-task").value;
    model.SaveTask(input);
    view.addNewTask(input);
}

//Clear task
document.getElementById("delete-all").addEventListener("click", () => ClearTask());
function ClearTask() {
    model.SetData([]);
    view.ClearTask();
}

// Delete


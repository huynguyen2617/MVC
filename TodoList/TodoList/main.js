import { SaveTask , ListTask, RemoveTask, UpdateTask } from "./model.js";
// import * as Storage from "./localstorage.js";

function CreateElement(tag_name, class_name, value, parent_el) {
    const element = document.createElement(tag_name);
    element.setAttribute("class", class_name);
    element.innerHTML = value;
    parent_el.appendChild(element);
    return element;
}

function addTask(input, index) {
    const ul = document.getElementsByClassName("collection");
    const li = CreateElement("li", "collection-item", input, ul[0]);
    li.setAttribute("id", index);
    const editBtn = CreateElement("button", "btn", "Edit", li);
    const delBtn = CreateElement("button", "btn", "Delete", li);
    delBtn.addEventListener("click", () => RemoveTask(li));
    editBtn.addEventListener("click", () => UpdateTask(li));
}

function clearUI() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = "";
}

function RenderUI(array) {
    clearUI();
    array.forEach((value,index) => addTask(value, index));
}

const taskArr = ListTask();
if (taskArr) {
    RenderUI(taskArr);
}
/************************************************************************/
document.getElementById("add-new-task").addEventListener("click", () => {
    const input = document.getElementById("new-task").value;
    const tasks = ListTask();
    tasks.push(input);
    // SaveTask(tasks);
    SaveTask();
    addTask(input, tasks.length - 1);
})

const RemoveTask = (li) => {
    li.remove();
    const tasks = ListTask();
    const index = li.getAttribute("id");
    RemoveTask(index);
    RenderUI(tasks);
}

const UpdateTask = (li) => {
    const data = prompt("Noi dung moi : ");
    li.firstChild.textContent = data;
    const tasks = ListTask();
    const index = li.getAttribute("id");
    UpdateTask(index, data);
    RenderUI(tasks);
}

document.getElementById("delete-all").addEventListener("click", () => {
    RenderUI([]);
    SaveTask([]);
})

document.getElementById("sort-task").addEventListener("click", () => {
    // const li = document.getElementsByClassName("collection-item");
    // const arrayValue = [...li].map(li => li.firstChild.textContent);
    // arrayValue.sort((a,b) => a.localeCompare(b)); 
    const tasks = ListTask();
    tasks.sort((a,b) => a.localeCompare(b));
    RenderUI(tasks);
})

document.getElementById("search").addEventListener("click", () => {
    const input = document.getElementById("new-task").value;
    const tasks = ListTask();
    const result = tasks.filter(el => el == input);
    
    // const new_tasks = tasks.map(el => el);
    // const new_tasks = [...tasks]; // spread operator

    if (result.length == 0) {
        alert("Khong tim thay");
    } else {
        RenderUI(result);
    }
})

document.getElementById("back").addEventListener("click", Back())

function Back() {
    const tasks = ListTask();
    RenderUI(tasks);
}
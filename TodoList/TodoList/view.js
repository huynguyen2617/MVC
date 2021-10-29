function CreateButton(name, parent_el) {
    const button = document.createElement("button");
    button.innerHTML = name;
    parent_el.appendChild(button);
    return button;
}

export function ShowAllTask(array) { //[abc, cba, ddd]
    if (array.length == 0) {
        return;
    }
    const allBtns = array.map((value, index) => {
        const allBtn = addNewTask(value, index);
        return allBtn;
    });
    return allBtns;
}

export function addNewTask(input, index) {
    const ul = document.getElementsByClassName("collection");
    const li = document.createElement("li");
    li.innerHTML = input;
    li.setAttribute("class", "collection-item");
    const delBtn = CreateButton("Delete", li);
    delBtn.setAttribute("class", "btn delete");
    delBtn.setAttribute("id", index);
    const editBtn = CreateButton("Edit", li);
    editBtn.setAttribute("class", "btn edit");
    editBtn.setAttribute("id", index);
    ul[0].appendChild(li);
    return [ delBtn, editBtn ];
}

export function ClearTask() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = "";
}

export function DeleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
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
    const allBtns = array.map(value => {
        const allBtn = addNewTask(value);
        return allBtn;
    });
    return allBtns;
}

export function addNewTask(input) {
    const ul = document.getElementsByClassName("collection");
    const li = document.createElement("li");
    li.innerHTML = input;
    li.setAttribute("class", "collection-item");
    const delBtn = CreateButton("Delete", li);
    delBtn.setAttribute("class", "btn delete");
    const editBtn = CreateButton("Edit", li);
    editBtn.setAttribute("class", "btn edit");
    ul[0].appendChild(li);
    return { delBtn, editBtn };
}

export function ClearTask() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = "";
}
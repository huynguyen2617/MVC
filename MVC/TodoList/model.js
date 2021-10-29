const LOCALSTORAGE_NAME = "tasks";
//private
export function SetData(array) {
    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(array));
}

export function SaveTask(value) {
    const tasks = ListTask();
    tasks.push(value);
    SetData(tasks);
}

export function ListTask() {
    if (localStorage[LOCALSTORAGE_NAME] == undefined) {
        return [];
    }
    const tasks = localStorage.getItem(LOCALSTORAGE_NAME); 
    return JSON.parse(tasks);
}

export function UpdateTask(index, value) {
    const array = ListTask();
    array[index] = value;
    SetData(array);
}

export function RemoveTask(index) {
    const array = ListTask();
    array.splice(index, 1);
    SetData(array);
}
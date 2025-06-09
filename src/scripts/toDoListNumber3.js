class TaskCategory {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}
let newTask1 = new TaskCategory("faire les courses", "maison");
let newTask2 = new TaskCategory("poser mes congés", "travail");
let newTask3 = new TaskCategory("inviter ma Reinette", "personnel");

let toDoList = [newTask1, newTask2, newTask3];
console.log(`task : ${newTask1.prop1}`);
console.log(`task : ${newTask1.prop2}`);
console.log(`toDoList : ${toDoList[0].prop1}, ${toDoList[0].prop2}`);
let sortAscending = true;

function displayToDoList() {
  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  for (let item of toDoList) {
    console.log(`item : ${item.prop1}`);

    const newRow = document.createElement("tr");

    const newTask = document.createElement("td");
    newTask.innerText = item.prop1;
    newRow.appendChild(newTask);

    const newCategory = document.createElement("td");
    newCategory.innerText = item.prop2;
    newRow.appendChild(newCategory);

    const newDelete = document.createElement("td");

    let newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "Supprimer";
    newDeleteButton.type = "button";

    newDeleteButton.addEventListener("click", function () {
      newRow.remove();
    });

    newDelete.appendChild(newDeleteButton);
    newRow.appendChild(newDelete);

    tbody.appendChild(newRow);
  }
}

displayToDoList();

const taskInput = document.querySelector("#taskInput");
const categoryInput = document.querySelector("#categoryInput");
const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", function () {
  const newTask = taskInput.value.trim();
  const newCategory = categoryInput.value.trim();
  console.log(`newTask : ${newTask}`);
  console.log(`newCategory : ${newCategory}`);
  console.log(toDoList);

  let newAddedTask = new TaskCategory(newTask, newCategory);
  toDoList.push(newAddedTask);
  if (newTask) {
    taskInput.value = "";
    console.log(toDoList);
    console.log(toDoList);
  }

  if (newCategory) {
    categoryInput.value = "";
  }

  displayToDoList();
});

function sortToDoListByTask() {
  console.log(`Test fonction sortToDoList : ${toDoList[0].prop1}`);

  if (sortAscending) {
    toDoList.sort((a, b) => a.prop1.localeCompare(b.prop1));
  } else {
    toDoList.sort((a, b) => b.prop1.localeCompare(a.prop1));
  }
  sortAscending = !sortAscending;
  console.log(`Test tri sur toDoList : ${toDoList}`);
  displayToDoList();
}

function sortToDoListByCategory() {
  if (sortAscending) {
    toDoList.sort((a, b) => a.prop2.localeCompare(b.prop2));
  } else {
    toDoList.sort((a, b) => b.prop2.localeCompare(a.prop2));
  }
  sortAscending = !sortAscending;
  displayToDoList();
}

const sortButtonByTask = document.querySelector("#sortButtonByTask");
sortButtonByTask.addEventListener("click", function () {
  sortToDoListByTask();
});

const sortButtonByCategory = document.querySelector("#sortButtonByCategory");
sortButtonByCategory.addEventListener("click", function () {
  sortToDoListByCategory();
});

// Classe pour 1 tâche
class TaskCategory {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}
// Jeu de données
let newTask1 = new TaskCategory("ne rien faire", "travail");
let newTask2 = new TaskCategory("faire les courses", "maison");
let newTask3 = new TaskCategory("poser mes congés", "travail");
let newTask4 = new TaskCategory("faire le ménage", "maison");
let newTask5 = new TaskCategory("inviter ma Reinette", "personnel");
// Variables
let toDoList = [newTask1, newTask2, newTask3, newTask4, newTask5];
let sortAscending = true;
let selectList = [];
// Fonction pour afficher le tableau dynmiquement
function displayToDoList(filteredList = toDoList) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  for (let item of filteredList) {
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
      toDoList = toDoList.filter((task) => task !== item);
      newRow.remove();
    });

    newDelete.appendChild(newDeleteButton);
    newRow.appendChild(newDelete);

    tbody.appendChild(newRow);
  }
}
// Affichage du tableau
displayToDoList();
// Sélection des éléments
const taskInput = document.querySelector("#taskInput");
const categoryInput = document.querySelector("#categoryInput");
const addButton = document.querySelector("#addButton");
// Ajouter une tâche
addButton.addEventListener("click", function () {
  const newTask = taskInput.value.trim();
  const newCategory = categoryInput.value.trim();

  let newAddedTask = new TaskCategory(newTask, newCategory);
  toDoList.push(newAddedTask);

  if (newTask) {
    taskInput.value = "";
  }

  if (newCategory) {
    categoryInput.value = "";
  }

  displayToDoList();
});
// Fonction de tri par tâche
function sortToDoListByTask() {
  if (sortAscending) {
    toDoList.sort((a, b) => a.prop1.localeCompare(b.prop1));
  } else {
    toDoList.sort((a, b) => b.prop1.localeCompare(a.prop1));
  }
  sortAscending = !sortAscending;
  displayToDoList();
}
// Fonction de tri par catégorie
function sortToDoListByCategory() {
  if (sortAscending) {
    toDoList.sort((a, b) => a.prop2.localeCompare(b.prop2));
  } else {
    toDoList.sort((a, b) => b.prop2.localeCompare(a.prop2));
  }
  sortAscending = !sortAscending;
  displayToDoList();
}
// Tri par tâche
const sortButtonByTask = document.querySelector("#sortButtonByTask");
sortButtonByTask.addEventListener("click", function () {
  sortToDoListByTask();
});
// Tri par catégorie
const sortButtonByCategory = document.querySelector("#sortButtonByCategory");
sortButtonByCategory.addEventListener("click", function () {
  sortToDoListByCategory();
});
// Filtre par catégorie
const select = document.querySelector("select");

for (let select of toDoList) {
  selectList.push(select.prop2);
}
selectList.sort((a, b) => a.localeCompare(b));
const selectListWithoutDuplicates = [...new Set(selectList)];

const optionOne = document.createElement("option");
optionOne.value = "";
optionOne.innerText = "Toutes les catégories";
select.appendChild(optionOne);

selectListWithoutDuplicates.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.innerText = category;
  select.appendChild(option);
});

const categoryFilter = document.querySelector("#categorySelect");
categoryFilter.addEventListener("click", () => {
  const selectedCategory = select.value;
  let filteredList = toDoList;
  if (selectedCategory) {
    filteredList = toDoList.filter((task) => task.prop2 === selectedCategory);
  }
  displayToDoList(filteredList);
});

const categoryResetFiler = document.querySelector("#categoryReset");
categoryResetFiler.addEventListener("click", () => {
  const select = document.querySelector("select");
  select.value = "";
  displayToDoList();
});

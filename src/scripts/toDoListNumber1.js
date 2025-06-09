let toDoList = ["faire les courses", "poser mes congés", "inviter Doudoune"];

function displayToDoList() {
  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  for (let item of toDoList) {
    let newRow = document.createElement("tr");

    let newCol = document.createElement("td");
    newCol.innerText = item;
    newRow.appendChild(newCol);

    let deleteCol = document.createElement("td");

    let newButtonDelete = document.createElement("button");
    newButtonDelete.innerText = "Supprimer";
    newButtonDelete.type = "button";

    newButtonDelete.addEventListener("click", function () {
      newRow.remove();
    });

    deleteCol.appendChild(newButtonDelete);
    newRow.appendChild(deleteCol);

    tbody.appendChild(newRow);
  }
}

displayToDoList();

const textInput = document.querySelector("#textInput");
console.log(textInput);
const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", function () {
  const newTask = textInput.value.trim();
  console.log(newTask);
  console.log(toDoList);

  if (newTask) {
    toDoList.push(newTask);
    textInput.value = "";
    console.log(toDoList);
    displayToDoList();
    console.log(toDoList);
  }
});

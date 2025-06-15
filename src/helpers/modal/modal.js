const body = document.querySelector("body");

const modal = document.createElement("div");
modal.classList.add("modal", "hidden");

const modalQuestion = document.createElement("div");
modalQuestion.classList.add("modal-question");
modalQuestion.innerHTML = "Etes-vous sûr de vouloir supprimer cette tâche ?";

const modalBtn = document.createElement("div");
modalBtn.classList.add("modal-btn");
const modalBtnYes = document.createElement("button");
modalBtnYes.classList.add("modal-btn-yes");
modalBtnYes.innerHTML = "Oui";
modalBtnYes.type = "button";

modalBtnYes.addEventListener("click", () => {
  console.log("Bouton Oui cliqué", currentTask, currentRow);
  if (currentTask && currentRow) {
    deleteTask(currentTask, currentRow);
  }
  closeModal();
});

const modalBtnNo = document.createElement("button");
modalBtnNo.classList.add("modal-btn-no");
modalBtnNo.innerHTML = "Non";
modalBtnNo.type = "button";
modalBtnNo.addEventListener("click", closeModal);

modalBtn.append(modalBtnYes, modalBtnNo);
modal.appendChild(modalQuestion);
modal.appendChild(modalBtn);

const overlay = document.createElement("div");
overlay.classList.add("overlay", "hidden");
overlay.addEventListener("click", closeModal);

let currentTask = null;
let currentRow = null;

function openModal(task, row) {
  console.log("openModal appelé", task, row);
  currentTask = task;
  currentRow = row;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log("Classes de la modal après openModal :", modal.className);
  console.log("Classes de l'overlay après openModal :", overlay.className);
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  currentTask = null;
  currentRow = null;
}

body.append(overlay, modal);

window.openModal = openModal;
window.closeModal = closeModal;

import { showList, showTasks } from "./show.js";

function toggleDeleteList() {
  let temp = 0;
  const toggleDeletListsBtn = document.querySelector("#deleteListBtn");
  const deleteListsBtns = document.querySelectorAll(".deleteList");
  toggleDeletListsBtn.addEventListener("click", () => {
    if (temp === 0) {
      deleteListsBtns.forEach((element) => {
        element.style.display = "block";
      });
      temp = 1;
    } else {
      deleteListsBtns.forEach((element) => {
        element.style.display = "none";
      });
      temp = 0;
    }
  });
}

function deleteList(list) {
  const deleteListBtn = document.querySelectorAll(".deleteList");
  deleteListBtn.forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      list.splice(index, 1);
      console.table(list);
      showList(list);
      toggleDeleteList();
      deleteList(list);
      console.log(list[index]);
      if (list[index]) {
        showTasks(list[index]);
      } else {
        showTasks(list[index])
      }
    });
  });
}

function toggleDeleteTask() {
  let temp = 0;
  document.querySelector("#deleteTaskBtn").addEventListener("click", () => {
    if (temp === 0) {
      document.querySelectorAll(".deleteTask").forEach((element) => {
        element.style.display = "inline-block";
      });
      temp = 1;
    } else {
      document.querySelectorAll(".deleteTask").forEach((element) => {
        element.style.display = "none";
      });
      temp = 0;
    }
  });
}

export { toggleDeleteList, deleteList, toggleDeleteTask };

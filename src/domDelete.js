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

export { toggleDeleteList, toggleDeleteTask };

function TaskBehaviours() {
  function newTask() {
    const inputs = {
      taskName: document.querySelector("#taskName").value,
      taskDescription: document.querySelector("#taskDescriptionInput").value,
      taskDueDate: document.querySelector("#taskDueDateInput").value,
    };
    const singleTask = {
      name: inputs.taskName,
      description: inputs.taskDescription,
      date: inputs.taskDueDate,
      priority: poriorityChosed,
    };
    return singleTask;
  }

  let poriorityChosed;
  function poriorityCheck() {
    const taskPriority = document.querySelectorAll(".priorityButtons button");
    taskPriority.forEach((element) => {
      element.addEventListener("click", () => {
        taskPriority.forEach((button) => (button.style.color = "white"));
        element.style.color = "red";
        poriorityChosed = window.getComputedStyle(element).backgroundColor;
      });
    });
    return poriorityChosed;
  }

  function markDoneTask() {
    document.querySelectorAll("#checkTask").forEach((element) => {
      element.addEventListener("click", () => {
        if (element.nextElementSibling.className !== "") {
          element.nextElementSibling.classList.remove("done");
        } else {
          element.nextElementSibling.classList.add("done");
        }
      });
    });
  }

  return { newTask, poriorityCheck, markDoneTask };
}

export { TaskBehaviours };

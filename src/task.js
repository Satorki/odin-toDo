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
    };
    return singleTask;
  }
  return { newTask };
}

export { TaskBehaviours };

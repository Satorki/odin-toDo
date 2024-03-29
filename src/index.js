//TWORZYMY LISTE
class List {
  taskList = [];
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  addTask(task) {
    this.taskList.push(task);
  }
  showTasks() {
    return this.taskList;
  }
}

//TWORZYMY ZADANIE
class Task {
  constructor(id, name, description, date, priority) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

class TaskFactory {
  id = 1;
  #generateId() {
    return this.id++;
  }
  create(name, description, date, priority) {
    return new Task(this.#generateId(), name, description, date, priority);
  }
}

//TESTS
const today = new List("Today", "to do today");

const taskFactory = new TaskFactory();

const doAMathForSchool = taskFactory.create("do zupa", "zupa good");

today.addTask(doAMathForSchool);

console.log(today.showTasks());

const modalAddListBtn = document.querySelector("#modalAddListBtn");
const addListBtn = document.querySelector("#addListBtn");
const backBtn = document.querySelector("#backBtn");
const listField = document.querySelector("#listField");
const dialog = document.getElementById("modal");

modalAddListBtn.addEventListener("click", () => {
  dialog.showModal();
});

addListBtn.addEventListener("click", () => {
  const listNameInput = document.querySelector("#listName").value;
  const listDescriptionInput = document.querySelector("#listDescritpion").value;

  const list = new List(listNameInput, listDescriptionInput);

  const listPara = document.createElement("p");
  listPara.textContent = list.title;

  listField.appendChild(listPara);

  dialog.close();
});

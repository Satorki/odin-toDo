//LIST CREATE
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

//TASK CREATE
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
// const today = new List("Today", "to do today");

// const taskFactory = new TaskFactory();

// const doAMathForSchool = taskFactory.create("do zupa", "zupa good");

// today.addTask(doAMathForSchool);

// console.log(today.showTasks());

//MODAL SHOW
function ModalList() {
  const selectors = {
    modalAddListBtn: document.querySelector("#modalAddListBtn"),
    addListBtn: document.querySelector("#addListBtn"),
    backBtn: document.querySelector("#backBtn"),
    dialog: document.querySelector("dialog"),
  };
  function showModal() {
    selectors.modalAddListBtn.addEventListener("click", () => {
      selectors.dialog.showModal();
    });
  }
  function closeModal() {
    selectors.backBtn.addEventListener("click", () => {
      selectors.dialog.close();
    });
  }

  return { showModal, closeModal };
}
const modal = ModalList();
modal.showModal();
modal.closeModal();

//LIST SHOW
function ListAdd() {
  const selectors = {
    addListBtn: document.querySelector("#addListBtn"),
    listField: document.querySelector("#listField ul"),
    listName: document.querySelector("#listName"),
    listDescription: document.querySelector("#listDescriptionArea"),
    backBtn: document.querySelector("#backBtn"),
  };
  let completedList = [];

  function createList() {
    return new List(selectors.listName.value, selectors.listDescription.value);
  }
  function saveList() {
    completedList.push(createList());
    return completedList;
  }
  function addList() {
    selectors.addListBtn.addEventListener("click", () => {
      saveList();
    });
  }
  function generateList() {
    selectors.listField.textContent = "";
    completedList.forEach((element, index) => {
      const listElementsAdd = {
        li1: document.createElement("li"),
        li2: document.createElement("li"),
        span1: document.createElement("span"),
        span2: document.createElement("span"),
      };

      listElementsAdd.span1.textContent = element.title;
      listElementsAdd.span2.textContent = " ...";
      listElementsAdd.span2.setAttribute("id", "listDescriptionBtn" + index);
      listElementsAdd.span2.classList.add("spanLink");
      listElementsAdd.li2.textContent = element.description;
      listElementsAdd.li2.setAttribute("id", "listDescription" + index);
      listElementsAdd.li2.classList.add("listDescription");

      selectors.listField.appendChild(listElementsAdd.li1);
      listElementsAdd.li1.appendChild(listElementsAdd.span1);
      listElementsAdd.li1.appendChild(listElementsAdd.span2);
      selectors.listField.appendChild(listElementsAdd.li2);
    });
  }
  function showList() {
    selectors.backBtn.addEventListener("click", () => {
      generateList();
    });
  }

  return { createList, addList, showList };
}
const mainList = ListAdd();
mainList.createList();
mainList.addList();
mainList.showList();

// DESCRIPTION SHOW
function DescriptionShow() {
  const selectors = {
    btn: document.querySelector("#listDescriptionBtn0"),
    description: document.querySelector("#listDescription0"),
  };
  selectors.btn.addEventListener("click", () => {
    selectors.description.style.display = "none"
  });
}

DescriptionShow();

//LIST CREATE
class List {
  taskList = [];
  constructor(id, title, description) {
    this.id = id;
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

//LIST AND TASK WITH ID
function IdGenerator() {
  let id = 1;
  function generateId() {
    return id++;
  }

  function listWithId(title, description) {
    return new List(generateId(), title, description);
  }

  function taskWithId(name, description, date, priority) {
    return new Task(generateId(), name, description, date, priority);
  }

  return { listWithId, taskWithId };
}

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

const ids = IdGenerator();

//LIST SHOW
function ListBehaviours() {
  const selectors = {
    addListBtn: document.querySelector("#addListBtn"),
    listField: document.querySelector("#listField ul"),
    listName: document.querySelector("#listName"),
    listDescription: document.querySelector("#listDescriptionArea"),
    backBtn: document.querySelector("#backBtn"),
    listTitleMain: document.querySelector("#listTitleMain"),
  };
  let completedList = [];

  function createList() {
    return ids.listWithId(
      selectors.listName.value,
      selectors.listDescription.value
    );
  }
  function saveList() {
    completedList.push(createList());
    return completedList;
  }
  function generateList() {
    selectors.listField.textContent = "";
    completedList.forEach((element) => {
      const listElementsAdd = {
        li1: document.createElement("li"),
        li2: document.createElement("li"),
        span1: document.createElement("span"),
        span2: document.createElement("span"),
        span3: document.createElement("span"),
      };
      listElementsAdd.span1.textContent = "✗";
      listElementsAdd.span1.classList.add("deleteList");
      listElementsAdd.span2.textContent = element.title;
      listElementsAdd.span2.classList.add("spanLink");
      listElementsAdd.span3.textContent = " ...";
      listElementsAdd.span3.setAttribute("id", "listDescriptionBtn");
      listElementsAdd.span3.classList.add("spanLink");
      listElementsAdd.li2.textContent = element.description;
      listElementsAdd.li2.setAttribute("id", "listDescription");
      listElementsAdd.li2.classList.add("listDescription");

      selectors.listField.appendChild(listElementsAdd.li1);
      listElementsAdd.li1.appendChild(listElementsAdd.span1);
      listElementsAdd.li1.appendChild(listElementsAdd.span2);
      listElementsAdd.li1.appendChild(listElementsAdd.span3);
      selectors.listField.appendChild(listElementsAdd.li2);
    });
  }
  function addList() {
    selectors.addListBtn.addEventListener("click", () => {
      saveList();
    });
  }
  function showList() {
    selectors.backBtn.addEventListener("click", () => {
      generateList();
      descriptionShow();
    });
  }
  // function deleteList() {
  //   document.querySelectorAll(".deleteList").forEach((element, index) => {
  //     element.addEventListener("click", () => {
  //       completedList.splice(index, 1);
  //       console.table(completedList);
  //       generateList();
  //     });
  //   });
  // }
  const titleH2 = document.createElement("h2");
  function chooseList() {
    document.querySelectorAll("#listTitle").forEach((element) => {
      element.addEventListener("click", () => {
        console.log(element.textContent);
        selectors.listTitleMain.appendChild(titleH2);
        titleH2.textContent = element.textContent;
      });
    });
  }

  return { createList, addList, showList, completedList, chooseList };
}

const mainList = ListBehaviours();
mainList.createList();
mainList.addList();
mainList.showList();
mainList.chooseList();

// mainList.deleteList();

// DESCRIPTION SHOW
function descriptionShow() {
  document.querySelectorAll("#listDescriptionBtn").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.closest("li").nextElementSibling.style.display === "block") {
        element.closest("li").nextElementSibling.style.display = "none";
      } else {
        element.closest("li").nextElementSibling.style.display = "block";
      }
    });
  });
}

let temp = 1;
document.querySelector("#deleteListBtn").addEventListener("click", () => {
  if (temp === 0) {
    document.querySelectorAll(".deleteList").forEach((element) => {
      element.style.display = "none";
    });
    temp = 1;
  } else {
    document.querySelectorAll(".deleteList").forEach((element) => {
      element.style.display = "block";
    });
    temp = 0;
  }
});

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
function Modal() {
  const selectors = {
    modalAddListBtn: document.querySelector("#modalAddListBtn"),
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
const modalList = Modal();
modalList.showModal();
modalList.closeModal();

const modalTask = Modal();


const ids = IdGenerator();

//LIST SHOW
function ListBehaviours() {
  const selectors = {
    deleteListBtn: document.querySelector("#deleteListBtn"),
    addListBtn: document.querySelector("#addListBtn"),
    listField: document.querySelector("#listField ul"),
    listName: document.querySelector("#listName"),
    listDescription: document.querySelector("#listDescriptionArea"),
    backBtn: document.querySelector("#backBtn"),
  };
  const completedList = [];

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
  function addList() {
    selectors.addListBtn.addEventListener("click", () => {
      saveList();
    });
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
      listElementsAdd.span2.setAttribute("id", "listTitle");
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

  function pickUpList() {
    const listTitleMain = document.querySelector("#listTitleMain");
    const titleH2 = document.createElement("h2");
    document.querySelectorAll("#listTitle").forEach((element) => {
      element.addEventListener("click", () => {
        listTitleMain.textContent = "";
        listTitleMain.appendChild(titleH2);
        titleH2.textContent = element.textContent;
      });
    });
  }

  function toggleDescriptionShow() {
    document.querySelectorAll("#listDescriptionBtn").forEach((element) => {
      element.addEventListener("click", () => {
        if (
          element.closest("li").nextElementSibling.style.display === "block"
        ) {
          element.closest("li").nextElementSibling.style.display = "none";
        } else {
          element.closest("li").nextElementSibling.style.display = "block";
        }
      });
    });
  }

  function toggleDeleteList() {
    let temp = 0;
    selectors.deleteListBtn.addEventListener("click", () => {
      if (temp === 0) {
        document.querySelectorAll(".deleteList").forEach((element) => {
          element.style.display = "block";
        });
        temp = 1;
      } else {
        document.querySelectorAll(".deleteList").forEach((element) => {
          element.style.display = "none";
        });
        temp = 0;
      }
    });
  }

  function deleteList() {
    document.querySelectorAll(".deleteList").forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        completedList.splice(index, 1); // Usunięcie z listy completedList
        generateList(); // Ponowne wygenerowanie listy bez usuniętego elementu
        toggleDescriptionShow(); // Aktualizacja pokazywania opisu
        pickUpList(); // Aktualizacja wyboru listy
        toggleDeleteList(); // Aktualizacja pokazywania przycisków usuwania
      });
    });
  }

  function showList() {
    selectors.backBtn.addEventListener("click", () => {
      generateList();
      toggleDescriptionShow();
      pickUpList();
      toggleDeleteList();
      deleteList();
    });
  }

  return { createList, addList, showList };
}

const mainList = ListBehaviours();
mainList.createList();
mainList.addList();
mainList.showList();

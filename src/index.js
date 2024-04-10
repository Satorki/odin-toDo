import { Modal } from "./modal.js";
import { TaskBehaviours } from "./task.js";
import { ListBehaviours } from "./list.js";

// //LIST CREATE
// class List {
//   taskList = [];
//   constructor(id, title, description) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//   }
// }
// //TASK CREATE
// class Task {
//   constructor(id, name, description, date, priority) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.date = date;
//     this.priority = priority;
//   }
// }

// const { id } = require("date-fns/locale");

// //LIST AND TASK WITH ID
// function IdGenerator() {
//   let id = 1;
//   function generateId() {
//     return id++;
//   }

//   function listWithId(title, description) {
//     return new List(generateId(), title, description);
//   }

//   function taskWithId(name, description, date, priority) {
//     return new Task(generateId(), name, description, date, priority);
//   }

//   return { listWithId, taskWithId };
// }

// //MODAL SHOW
// function Modal() {
//   const selectors = {
//     modalAddTaskBtn: document.querySelector("#modalAddTaskBtn"),
//     modalAddListBtn: document.querySelector("#modalAddListBtn"),
//     backBtnList: document.querySelector("#backBtnList"),
//     backBtnTask: document.querySelector("#backBtnTask"),
//     dialog: document.querySelector("dialog"),
//     modalList: document.querySelector("#modalList"),
//     modalTask: document.querySelector("#modalTask"),
//   };
//   function showModal() {
//     document.addEventListener("click", (e) => {
//       if (e.target === selectors.modalAddListBtn) {
//         selectors.modalList.showModal();
//       } else if (e.target === selectors.modalAddTaskBtn) {
//         selectors.modalTask.showModal();
//       }
//     });
//   }
//   function closeModal() {
//     selectors.backBtnList.addEventListener("click", () => {
//       selectors.modalList.close();
//     });
//     selectors.backBtnTask.addEventListener("click", () => {
//       selectors.modalTask.close();
//     });
//   }

//   return { showModal, closeModal };
// }
// const modal = Modal();
// modal.showModal();
// modal.closeModal();

// const ids = IdGenerator();

// //LIST SHOW
// function ListBehaviours() {
//   const selectors = {
//     deleteListBtn: document.querySelector("#deleteListBtn"),
//     addListBtn: document.querySelector("#addListBtn"),
//     listField: document.querySelector("#listField ul"),
//     listName: document.querySelector("#listName"),
//     listDescription: document.querySelector("#listDescriptionArea"),
//     backBtnList: document.querySelector("#backBtnList"),
//   };
//   const completedList = [];

//   function createList() {
//     return ids.listWithId(
//       selectors.listName.value,
//       selectors.listDescription.value
//     );
//   }
//   function saveList() {
//     completedList.push(createList());
//     return completedList;
//   }

//   function addList() {
//     selectors.addListBtn.addEventListener("click", () => {
//       saveList();
//       generateList();
//       toggleDescriptionShow();
//       pickUpList();
//       toggleDeleteList();
//       deleteList();
//     });
//   }

//   function generateList() {
//     selectors.listField.textContent = "";
//     completedList.forEach((element) => {
//       const listElementsAdd = {
//         li1: document.createElement("li"),
//         li2: document.createElement("li"),
//         span1: document.createElement("span"),
//         span2: document.createElement("span"),
//         span3: document.createElement("span"),
//       };
//       listElementsAdd.span1.textContent = "✗";
//       listElementsAdd.span1.classList.add("deleteList");
//       listElementsAdd.span2.textContent = element.title;
//       listElementsAdd.span2.classList.add("spanLink");
//       listElementsAdd.span2.setAttribute("id", "listTitle");
//       listElementsAdd.span3.textContent = " ...";
//       listElementsAdd.span3.setAttribute("id", "listDescriptionBtn");
//       listElementsAdd.span3.classList.add("spanLink");
//       listElementsAdd.li2.textContent = element.description;
//       listElementsAdd.li2.setAttribute("id", "listDescription");
//       listElementsAdd.li2.classList.add("description");

//       selectors.listField.appendChild(listElementsAdd.li1);
//       listElementsAdd.li1.appendChild(listElementsAdd.span1);
//       listElementsAdd.li1.appendChild(listElementsAdd.span2);
//       listElementsAdd.li1.appendChild(listElementsAdd.span3);
//       selectors.listField.appendChild(listElementsAdd.li2);
//     });
//   }

//   function pickUpList() {
//     const listTitleMain = document.querySelector("#listTitleMain");
//     const titleH2 = document.createElement("h2");
//     document.querySelectorAll("#listTitle").forEach((element) => {
//       element.addEventListener("click", () => {
//         listTitleMain.textContent = "";
//         listTitleMain.appendChild(titleH2);
//         titleH2.textContent = element.textContent;
//         const mainTasks = TaskBehaviours();
//         mainTasks.poriorityCheck();
//         mainTasks.addTask();
//       });
//     });
//   }

//   function toggleDescriptionShow() {
//     document.querySelectorAll("#listDescriptionBtn").forEach((element) => {
//       element.addEventListener("click", () => {
//         if (
//           element.closest("li").nextElementSibling.style.display === "block"
//         ) {
//           element.closest("li").nextElementSibling.style.display = "none";
//         } else {
//           element.closest("li").nextElementSibling.style.display = "block";
//         }
//       });
//     });
//   }

//   function toggleDeleteList() {
//     let temp = 0;
//     selectors.deleteListBtn.addEventListener("click", () => {
//       if (temp === 0) {
//         document.querySelectorAll(".deleteList").forEach((element) => {
//           element.style.display = "block";
//         });
//         temp = 1;
//       } else {
//         document.querySelectorAll(".deleteList").forEach((element) => {
//           element.style.display = "none";
//         });
//         temp = 0;
//       }
//     });
//   }

//   function deleteList() {
//     document.querySelectorAll(".deleteList").forEach((deleteButton, index) => {
//       deleteButton.addEventListener("click", () => {
//         completedList.splice(index, 1);
//         generateList();
//         document.querySelectorAll(".deleteList").forEach((element) => {
//           element.style.display = "block";
//         });
//         deleteList();
//         toggleDescriptionShow();
//       });
//     });
//   }

//   return { createList, addList };
// }

// const mainList = ListBehaviours();
// mainList.createList();
// mainList.addList();

// /////////////////////////////////////////////////

// function TaskBehaviours() {
//   const selectors = {
//     taskName: document.querySelector("#taskName"),
//     taskDescription: document.querySelector("#taskDescriptionInput"),
//     taskDueDate: document.querySelector("#taskDueDateInput"),
//     priorityButtons: document.querySelectorAll(".priorityButtons button"),
//     addTaskBtn: document.querySelector("#addTaskBtn"),
//     backBtnTask: document.querySelector("#backBtnTask"),
//     taskField: document.querySelector("#taskField ul"),
//     deleteTaskBtn: document.querySelector("#deleteTaskBtn"),
//   };

//   let poriorityChosed;
//   function poriorityCheck() {
//     selectors.priorityButtons.forEach((element) => {
//       element.addEventListener("click", () => {
//         selectors.priorityButtons.forEach(
//           (button) => (button.style.color = "white")
//         );
//         element.style.color = "red";
//         poriorityChosed = window.getComputedStyle(element).backgroundColor;
//       });
//     });
//     return poriorityChosed;
//   }

//   function createTask() {
//     return ids.taskWithId(
//       selectors.taskName.value,
//       selectors.taskDescription.value,
//       selectors.taskDueDate.value,
//       poriorityChosed
//     );
//   }

//   const taskList = [];
//   function addTask() {
//     selectors.addTaskBtn.addEventListener("click", () => {
//       taskList.push(createTask());
//       generateTask();
//       doneTask();
//       toggleDescriptionShow();
//       toggleDeleteTask();
//       deleteTask();
//       generateAllTasks();
//     });
//     return taskList;
//   }

//   function generateAllTasks() {
//     console.log(taskList);
//   }

//   function generateTask() {
//     selectors.taskField.textContent = "";
//     taskList.forEach((element) => {
//       const taskElementsAdd = {
//         li1: document.createElement("li"),
//         div1: document.createElement("div"),
//         span1: document.createElement("span"),
//         span2: document.createElement("span"),
//         span3: document.createElement("span"),
//         div2: document.createElement("div"),
//         span4: document.createElement("span"),
//         span5: document.createElement("span"),
//         li2: document.createElement("li"),
//       };
//       taskElementsAdd.li1.style.backgroundColor = element.priority;

//       taskElementsAdd.span1.textContent = "✗ ";
//       taskElementsAdd.span1.classList.add("deleteTask");
//       taskElementsAdd.span2.textContent = "✔ ";
//       taskElementsAdd.span2.classList.add("spanLink");
//       taskElementsAdd.span2.setAttribute("id", "checkTask");
//       taskElementsAdd.span3.textContent = element.name;

//       taskElementsAdd.span4.setAttribute("id", "taskDueDate");
//       taskElementsAdd.span4.textContent = element.date;
//       taskElementsAdd.span5.classList.add("spanLink");
//       taskElementsAdd.span5.setAttribute("id", "taskDescriptionBtn");
//       taskElementsAdd.span5.textContent = " ...";

//       taskElementsAdd.li2.textContent = element.description;
//       taskElementsAdd.li2.setAttribute("id", "taskDescription");
//       taskElementsAdd.li2.classList.add("description");

//       selectors.taskField.appendChild(taskElementsAdd.li1);
//       taskElementsAdd.li1.appendChild(taskElementsAdd.div1);
//       taskElementsAdd.div1.appendChild(taskElementsAdd.span1);
//       taskElementsAdd.div1.appendChild(taskElementsAdd.span2);
//       taskElementsAdd.div1.appendChild(taskElementsAdd.span3);
//       taskElementsAdd.li1.appendChild(taskElementsAdd.div2);
//       taskElementsAdd.div2.appendChild(taskElementsAdd.span4);
//       taskElementsAdd.div2.appendChild(taskElementsAdd.span5);
//       selectors.taskField.appendChild(taskElementsAdd.li2);
//     });
//   }
//   function toggleDescriptionShow() {
//     document.querySelectorAll("#taskDescriptionBtn").forEach((element) => {
//       element.addEventListener("click", () => {
//         if (
//           element.closest("li").nextElementSibling.style.display === "block"
//         ) {
//           element.closest("li").nextElementSibling.style.display = "none";
//         } else {
//           element.closest("li").nextElementSibling.style.display = "block";
//         }
//       });
//     });
//   }

//   function doneTask() {
//     document.querySelectorAll("#checkTask").forEach((element) => {
//       element.addEventListener("click", () => {
//         if (element.nextElementSibling.className !== "") {
//           element.nextElementSibling.classList.remove("done");
//         } else {
//           element.nextElementSibling.classList.add("done");
//         }
//       });
//     });
//   }

//   function toggleDeleteTask() {
//     let temp = 0;
//     selectors.deleteTaskBtn.addEventListener("click", () => {
//       if (temp === 0) {
//         document.querySelectorAll(".deleteTask").forEach((element) => {
//           element.style.display = "inline-block";
//         });
//         temp = 1;
//       } else {
//         document.querySelectorAll(".deleteTask").forEach((element) => {
//           element.style.display = "none";
//         });
//         temp = 0;
//       }
//     });
//   }

//   function deleteTask() {
//     document.querySelectorAll(".deleteTask").forEach((deleteButton, index) => {
//       deleteButton.addEventListener("click", () => {
//         taskList.splice(index, 1);
//         generateTask();
//         document.querySelectorAll(".deleteTask").forEach((element) => {
//           element.style.display = "inline-block";
//         });
//         deleteTask();
//         toggleDescriptionShow();
//       });
//     });
//   }

//   return { poriorityCheck, addTask };
// }

const modal = Modal();
modal.showModal();
modal.closeModal();

const list = ListBehaviours();
list.addList();
list.addTaskToList();

// function showList() {
//   outputs = {
//     listField: document.querySelector("#listField ul"),
//   };
//   outputs.listField.textContent = "";
//   list.listCollection.forEach((element) => {
//     const listElementsAdd = {
//       li1: document.createElement("li"),
//       li2: document.createElement("li"),
//       span1: document.createElement("span"),
//       span2: document.createElement("span"),
//       span3: document.createElement("span"),
//     };
//     listElementsAdd.span1.textContent = "✗";
//     listElementsAdd.span1.classList.add("deleteList");
//     listElementsAdd.span2.textContent = element.name;
//     listElementsAdd.span2.classList.add("spanLink");
//     listElementsAdd.span2.setAttribute("id", "listTitle");
//     listElementsAdd.span3.textContent = " ...";
//     listElementsAdd.span3.setAttribute("id", "listDescriptionBtn");
//     listElementsAdd.span3.classList.add("spanLink");
//     listElementsAdd.li2.textContent = element.description;
//     listElementsAdd.li2.setAttribute("id", "listDescription");
//     listElementsAdd.li2.classList.add("description");

//     outputs.listField.appendChild(listElementsAdd.li1);
//     listElementsAdd.li1.appendChild(listElementsAdd.span1);
//     listElementsAdd.li1.appendChild(listElementsAdd.span2);
//     listElementsAdd.li1.appendChild(listElementsAdd.span3);
//     outputs.listField.appendChild(listElementsAdd.li2);
//   });
// }

// function showTasks() {
//   outputs = {
//     taskField: document.querySelector("#taskField ul"),
//   };
//   selectors.taskField.textContent = "";
//   taskList.forEach((element) => {
//     const taskElementsAdd = {
//       li1: document.createElement("li"),
//       div1: document.createElement("div"),
//       span1: document.createElement("span"),
//       span2: document.createElement("span"),
//       span3: document.createElement("span"),
//       div2: document.createElement("div"),
//       span4: document.createElement("span"),
//       span5: document.createElement("span"),
//       li2: document.createElement("li"),
//     };
//     taskElementsAdd.li1.style.backgroundColor = element.priority;

//     taskElementsAdd.span1.textContent = "✗ ";
//     taskElementsAdd.span1.classList.add("deleteTask");
//     taskElementsAdd.span2.textContent = "✔ ";
//     taskElementsAdd.span2.classList.add("spanLink");
//     taskElementsAdd.span2.setAttribute("id", "checkTask");
//     taskElementsAdd.span3.textContent = element.name;

//     taskElementsAdd.span4.setAttribute("id", "taskDueDate");
//     taskElementsAdd.span4.textContent = element.date;
//     taskElementsAdd.span5.classList.add("spanLink");
//     taskElementsAdd.span5.setAttribute("id", "taskDescriptionBtn");
//     taskElementsAdd.span5.textContent = " ...";

//     taskElementsAdd.li2.textContent = element.description;
//     taskElementsAdd.li2.setAttribute("id", "taskDescription");
//     taskElementsAdd.li2.classList.add("description");

//     selectors.taskField.appendChild(taskElementsAdd.li1);
//     taskElementsAdd.li1.appendChild(taskElementsAdd.div1);
//     taskElementsAdd.div1.appendChild(taskElementsAdd.span1);
//     taskElementsAdd.div1.appendChild(taskElementsAdd.span2);
//     taskElementsAdd.div1.appendChild(taskElementsAdd.span3);
//     taskElementsAdd.li1.appendChild(taskElementsAdd.div2);
//     taskElementsAdd.div2.appendChild(taskElementsAdd.span4);
//     taskElementsAdd.div2.appendChild(taskElementsAdd.span5);
//     selectors.taskField.appendChild(taskElementsAdd.li2);
//   });
// }



import { Modal } from "./modal.js";
import { ListBehaviours } from "./list.js";


const modal = Modal();
modal.showModal();
modal.closeModal();
const list = ListBehaviours();
list.addList();
list.addTaskToList();


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

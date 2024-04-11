import { TaskBehaviours } from "./task.js";
import { showList, showTasks } from "./show.js";
import {
  toggleListDescriptionShow,
  toggleTaskDescriptionShow,
} from "./domDescription.js";
import { toggleDeleteList, toggleDeleteTask } from "./domDelete.js";

const task = TaskBehaviours();
task.poriorityCheck();

function ListBehaviours() {
  let listCollection = [];
  let listId;

  const test = JSON.parse(localStorage.getItem("lists")) || [];
  listCollection = test;
  showList(listCollection);
  pickUpList();
  toggleDeleteList();
  toggleDeleteTask();
  deleteList();
  deleteTask();
  toggleTaskDescriptionShow();
  toggleListDescriptionShow();

  function deleteList() {
    const deleteListBtn = document.querySelectorAll(".deleteList");
    deleteListBtn.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        listCollection.splice(index, 1);
        showList(listCollection);
        toggleDeleteList();
        deleteList();
        showTasks(listCollection[index]);
        pickUpList();
        saveToLocalStorage();
      });
    });
  }

  function deleteTask() {
    const deleteTaskBtn = document.querySelectorAll(".deleteTask");
    deleteTaskBtn.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        listCollection[pickUpList()].taskCollection.splice(index, 1);
        showTasks(listCollection[pickUpList()].taskCollection);
        toggleDeleteTask();
        deleteTask();
        pickUpList();
        saveToLocalStorage();
      });
    });
  }

  function pickUpList() {
    const listTitleMain = document.querySelector("#listTitleMain");
    const titleH2 = document.createElement("h2");
    document.querySelectorAll("#listTitle").forEach((element, index) => {
      element.addEventListener("click", () => {
        listTitleMain.textContent = "";
        listTitleMain.appendChild(titleH2);
        titleH2.textContent = element.textContent;
        listId = index;
        showTasks(listCollection[index].taskCollection);
        deleteTask();
        deleteList();
        toggleTaskDescriptionShow();
        toggleListDescriptionShow();
      });
    });
    return listId;
  }

  function newList() {
    const inputs = {
      listName: document.querySelector("#listName").value,
      listDescription: document.querySelector("#listDescriptionArea").value,
    };
    const singleList = {
      name: inputs.listName,
      description: inputs.listDescription,
      taskCollection: [],
    };
    return singleList;
  }

  function addList() {
    const addListBtn = document.querySelector("#addListBtn");
    addListBtn.addEventListener("click", () => {
      listCollection.push(newList());
      showList(listCollection);
      pickUpList();
      toggleListDescriptionShow();
      toggleDeleteList();
      deleteList();
      saveToLocalStorage();
    });
  }

  function addTaskToList() {
    const addTaskBtn = document.querySelector("#addTaskBtn");
    addTaskBtn.addEventListener("click", () => {
      let listIndex = pickUpList();
      if (
        listCollection[listIndex] &&
        listCollection[listIndex].taskCollection
      ) {
        listCollection[listIndex].taskCollection.push(task.newTask());
        showTasks(listCollection[listIndex].taskCollection);
      }
      toggleTaskDescriptionShow();
      toggleDeleteTask();
      task.markDoneTask();
      deleteTask();

      saveToLocalStorage();
    });
  }

  function saveToLocalStorage() {
    localStorage.setItem("lists", JSON.stringify(listCollection));
  }

  return { addList, addTaskToList };
}

export { ListBehaviours };

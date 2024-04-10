import { TaskBehaviours } from "./task.js";
import { showList, showTasks } from "./show.js";

const task = TaskBehaviours();

function ListBehaviours() {
  const listCollection = [];
  let listId;

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
    });
  }

  return { addList, addTaskToList };
}

export { ListBehaviours };

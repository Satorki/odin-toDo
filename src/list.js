import { TaskBehaviours } from "./task.js";
const task = TaskBehaviours();
function ListBehaviours() {
    const listCollection = [];
  
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
        //showList();
      });
    }
  
    function addTaskToList() {
      const addTaskBtn = document.querySelector("#addTaskBtn");
      addTaskBtn.addEventListener("click", () => {
        listCollection[0].taskCollection.push(task.newTask());
        console.table(listCollection);
      });
    }
  
    return { addList, addTaskToList, listCollection };
  }

  export { ListBehaviours }
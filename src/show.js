function showList(list) {
  const outputs = {
    listField: document.querySelector("#listField ul"),
  };
  outputs.listField.textContent = "";
  list.forEach((element) => {
    const listElementsAdd = {
      li1: document.createElement("li"),
      li2: document.createElement("li"),
      span1: document.createElement("span"),
      span2: document.createElement("span"),
      span3: document.createElement("span"),
    };
    listElementsAdd.span1.textContent = "✗";
    listElementsAdd.span1.classList.add("deleteList");
    listElementsAdd.span2.textContent = element.name;
    listElementsAdd.span2.classList.add("spanLink");
    listElementsAdd.span2.setAttribute("id", "listTitle");
    listElementsAdd.span3.textContent = " ...";
    listElementsAdd.span3.setAttribute("id", "listDescriptionBtn");
    listElementsAdd.span3.classList.add("spanLink");
    listElementsAdd.li2.textContent = element.description;
    listElementsAdd.li2.setAttribute("id", "listDescription");
    listElementsAdd.li2.classList.add("description");

    outputs.listField.appendChild(listElementsAdd.li1);
    listElementsAdd.li1.appendChild(listElementsAdd.span1);
    listElementsAdd.li1.appendChild(listElementsAdd.span2);
    listElementsAdd.li1.appendChild(listElementsAdd.span3);
    outputs.listField.appendChild(listElementsAdd.li2);
  });
}

function showTasks(list) {
  const outputs = {
    taskField: document.querySelector("#taskField ul"),
  };
  outputs.taskField.textContent = "";
  list.forEach((element) => {
    const taskElementsAdd = {
      li1: document.createElement("li"),
      div1: document.createElement("div"),
      span1: document.createElement("span"),
      span2: document.createElement("span"),
      span3: document.createElement("span"),
      div2: document.createElement("div"),
      span4: document.createElement("span"),
      span5: document.createElement("span"),
      li2: document.createElement("li"),
    };
    taskElementsAdd.li1.style.backgroundColor = element.priority;

    taskElementsAdd.span1.textContent = "✗ ";
    taskElementsAdd.span1.classList.add("deleteTask");
    taskElementsAdd.span2.textContent = "✔ ";
    taskElementsAdd.span2.classList.add("spanLink");
    taskElementsAdd.span2.setAttribute("id", "checkTask");
    taskElementsAdd.span3.textContent = element.name;

    taskElementsAdd.span4.setAttribute("id", "taskDueDate");
    taskElementsAdd.span4.textContent = element.date;
    taskElementsAdd.span5.classList.add("spanLink");
    taskElementsAdd.span5.setAttribute("id", "taskDescriptionBtn");
    taskElementsAdd.span5.textContent = " ...";

    taskElementsAdd.li2.textContent = element.description;
    taskElementsAdd.li2.setAttribute("id", "taskDescription");
    taskElementsAdd.li2.classList.add("description");

    outputs.taskField.appendChild(taskElementsAdd.li1);
    taskElementsAdd.li1.appendChild(taskElementsAdd.div1);
    taskElementsAdd.div1.appendChild(taskElementsAdd.span1);
    taskElementsAdd.div1.appendChild(taskElementsAdd.span2);
    taskElementsAdd.div1.appendChild(taskElementsAdd.span3);
    taskElementsAdd.li1.appendChild(taskElementsAdd.div2);
    taskElementsAdd.div2.appendChild(taskElementsAdd.span4);
    taskElementsAdd.div2.appendChild(taskElementsAdd.span5);
    outputs.taskField.appendChild(taskElementsAdd.li2);
  });
}

export { showList, showTasks };

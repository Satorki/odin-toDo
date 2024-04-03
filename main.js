/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//LIST CREATE\nclass List {\n  taskList = [];\n  constructor(title, description) {\n    this.title = title;\n    this.description = description;\n  }\n  addTask(task) {\n    this.taskList.push(task);\n  }\n  showTasks() {\n    return this.taskList;\n  }\n}\n\n//TASK CREATE\nclass Task {\n  constructor(id, name, description, date, priority) {\n    this.id = id;\n    this.name = name;\n    this.description = description;\n    this.date = date;\n    this.priority = priority;\n  }\n}\n\nclass TaskFactory {\n  id = 1;\n  #generateId() {\n    return this.id++;\n  }\n  create(name, description, date, priority) {\n    return new Task(this.#generateId(), name, description, date, priority);\n  }\n}\n\n//TESTS\n// const today = new List(\"Today\", \"to do today\");\n\n// const taskFactory = new TaskFactory();\n\n// const doAMathForSchool = taskFactory.create(\"do zupa\", \"zupa good\");\n\n// today.addTask(doAMathForSchool);\n\n// console.log(today.showTasks());\n\n//MODAL SHOW\nfunction ModalList() {\n  const selectors = {\n    modalAddListBtn: document.querySelector(\"#modalAddListBtn\"),\n    addListBtn: document.querySelector(\"#addListBtn\"),\n    backBtn: document.querySelector(\"#backBtn\"),\n    dialog: document.querySelector(\"dialog\"),\n  };\n  function showModal() {\n    selectors.modalAddListBtn.addEventListener(\"click\", () => {\n      selectors.dialog.showModal();\n    });\n  }\n  function closeModal() {\n    selectors.backBtn.addEventListener(\"click\", () => {\n      selectors.dialog.close();\n    });\n  }\n\n  return { showModal, closeModal };\n}\nconst modal = ModalList();\nmodal.showModal();\nmodal.closeModal();\n\n//LIST SHOW\nfunction ListAdd() {\n  const selectors = {\n    addListBtn: document.querySelector(\"#addListBtn\"),\n    listField: document.querySelector(\"#listField ul\"),\n    listName: document.querySelector(\"#listName\"),\n    listDescription: document.querySelector(\"#listDescriptionArea\"),\n    backBtn: document.querySelector(\"#backBtn\"),\n  };\n  let completedList = [];\n\n  function createList() {\n    return new List(selectors.listName.value, selectors.listDescription.value);\n  }\n  function saveList() {\n    completedList.push(createList());\n    return completedList;\n  }\n  function addList() {\n    selectors.addListBtn.addEventListener(\"click\", () => {\n      saveList();\n    });\n  }\n  function generateList() {\n    selectors.listField.textContent = \"\";\n    completedList.forEach((element, index) => {\n      const listElementsAdd = {\n        li1: document.createElement(\"li\"),\n        li2: document.createElement(\"li\"),\n        span1: document.createElement(\"span\"),\n        span2: document.createElement(\"span\"),\n      };\n\n      listElementsAdd.span1.textContent = element.title;\n      listElementsAdd.span2.textContent = \" ...\";\n      listElementsAdd.span2.setAttribute(\"id\", \"listDescriptionBtn\" + index);\n      listElementsAdd.span2.classList.add(\"spanLink\");\n      listElementsAdd.li2.textContent = element.description;\n      listElementsAdd.li2.setAttribute(\"id\", \"listDescription\" + index);\n      listElementsAdd.li2.classList.add(\"listDescription\");\n\n      selectors.listField.appendChild(listElementsAdd.li1);\n      listElementsAdd.li1.appendChild(listElementsAdd.span1);\n      listElementsAdd.li1.appendChild(listElementsAdd.span2);\n      selectors.listField.appendChild(listElementsAdd.li2);\n    });\n  }\n  function showList() {\n    selectors.backBtn.addEventListener(\"click\", () => {\n      generateList();\n    });\n  }\n\n  return { createList, addList, showList };\n}\nconst mainList = ListAdd();\nmainList.createList();\nmainList.addList();\nmainList.showList();\n\n// DESCRIPTION SHOW\nfunction DescriptionShow() {\n  const selectors = {\n    btn: document.querySelector(\"#listDescriptionBtn0\"),\n    description: document.querySelector(\"#listDescription0\"),\n  };\n  selectors.btn.addEventListener(\"click\", () => {\n    selectors.description.style.display = \"none\"\n  });\n}\n\nDescriptionShow();\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
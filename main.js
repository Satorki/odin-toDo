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

eval("//TWORZYMY LISTE\nclass List {\n  taskList = [];\n  constructor(title, description) {\n    this.title = title;\n    this.description = description;\n  }\n  addTask(task) {\n    this.taskList.push(task);\n  }\n  showTasks() {\n    return this.taskList;\n  }\n}\n\n//TWORZYMY ZADANIE\nclass Task {\n  constructor(id, name, description, date, priority) {\n    this.id = id;\n    this.name = name;\n    this.description = description;\n    this.date = date;\n    this.priority = priority;\n  }\n}\n\nclass TaskFactory {\n  id = 1;\n  #generateId() {\n    return this.id++;\n  }\n  create(name, description, date, priority) {\n    return new Task(this.#generateId(), name, description, date, priority);\n  }\n}\n\n//TESTS\nconst today = new List(\"Today\", \"to do today\");\n\nconst taskFactory = new TaskFactory();\n\nconst doAMathForSchool = taskFactory.create(\"do zupa\", \"zupa good\");\n\ntoday.addTask(doAMathForSchool);\n\nconsole.log(today.showTasks());\n\nconst modalAddListBtn = document.querySelector(\"#modalAddListBtn\");\nconst addListBtn = document.querySelector(\"#addListBtn\");\nconst backBtn = document.querySelector(\"#backBtn\");\nconst listField = document.querySelector(\"#listField\");\nconst dialog = document.getElementById(\"modal\");\n\nmodalAddListBtn.addEventListener(\"click\", () => {\n  dialog.showModal();\n});\n\naddListBtn.addEventListener(\"click\", () => {\n  const listNameInput = document.querySelector(\"#listName\").value;\n  const listDescriptionInput = document.querySelector(\"#listDescritpion\").value;\n\n  const list = new List(listNameInput, listDescriptionInput);\n\n  const listPara = document.createElement(\"p\");\n  listPara.textContent = list.title;\n\n  listField.appendChild(listPara);\n\n  dialog.close();\n});\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

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
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domDelete.js":
/*!**************************!*\
  !*** ./src/domDelete.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleDeleteList: () => (/* binding */ toggleDeleteList),\n/* harmony export */   toggleDeleteTask: () => (/* binding */ toggleDeleteTask)\n/* harmony export */ });\nfunction toggleDeleteList() {\n  let temp = 0;\n  const toggleDeletListsBtn = document.querySelector(\"#deleteListBtn\");\n  const deleteListsBtns = document.querySelectorAll(\".deleteList\");\n  toggleDeletListsBtn.addEventListener(\"click\", () => {\n    if (temp === 0) {\n      deleteListsBtns.forEach((element) => {\n        element.style.display = \"block\";\n      });\n      temp = 1;\n    } else {\n      deleteListsBtns.forEach((element) => {\n        element.style.display = \"none\";\n      });\n      temp = 0;\n    }\n  });\n}\n\n\n\nfunction toggleDeleteTask() {\n  let temp = 0;\n  document.querySelector(\"#deleteTaskBtn\").addEventListener(\"click\", () => {\n    if (temp === 0) {\n      document.querySelectorAll(\".deleteTask\").forEach((element) => {\n        element.style.display = \"inline-block\";\n      });\n      temp = 1;\n    } else {\n      document.querySelectorAll(\".deleteTask\").forEach((element) => {\n        element.style.display = \"none\";\n      });\n      temp = 0;\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/domDelete.js?");

/***/ }),

/***/ "./src/domDescription.js":
/*!*******************************!*\
  !*** ./src/domDescription.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleListDescriptionShow: () => (/* binding */ toggleListDescriptionShow),\n/* harmony export */   toggleTaskDescriptionShow: () => (/* binding */ toggleTaskDescriptionShow)\n/* harmony export */ });\nfunction toggleListDescriptionShow() {\n  document.querySelectorAll(\"#listDescriptionBtn\").forEach((element) => {\n    element.addEventListener(\"click\", () => {\n      if (element.closest(\"li\").nextElementSibling.style.display === \"block\") {\n        element.closest(\"li\").nextElementSibling.style.display = \"none\";\n      } else {\n        element.closest(\"li\").nextElementSibling.style.display = \"block\";\n      }\n    });\n  });\n}\n\n  function toggleTaskDescriptionShow() {\n    document.querySelectorAll(\"#taskDescriptionBtn\").forEach((element) => {\n      element.addEventListener(\"click\", () => {\n        if (\n          element.closest(\"li\").nextElementSibling.style.display === \"block\"\n        ) {\n          element.closest(\"li\").nextElementSibling.style.display = \"none\";\n        } else {\n          element.closest(\"li\").nextElementSibling.style.display = \"block\";\n        }\n      });\n    });\n  }\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/domDescription.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n\n\n\nconst modal = (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal)();\nmodal.showModal();\nmodal.closeModal();\nconst list = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.ListBehaviours)();\nlist.addList();\nlist.addTaskToList();\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListBehaviours: () => (/* binding */ ListBehaviours)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.js */ \"./src/show.js\");\n/* harmony import */ var _domDescription_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domDescription.js */ \"./src/domDescription.js\");\n/* harmony import */ var _domDelete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domDelete.js */ \"./src/domDelete.js\");\n\n\n\n\n\nconst task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.TaskBehaviours)();\ntask.poriorityCheck();\n\nfunction ListBehaviours() {\n  let listCollection = [];\n  let listId;\n\n  const test = JSON.parse(localStorage.getItem(\"lists\")) || [];\n  listCollection = test;\n  (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showList)(listCollection);\n  pickUpList();\n  (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteList)();\n  (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteTask)();\n  deleteList();\n  deleteTask();\n  (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskDescriptionShow)();\n  (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleListDescriptionShow)();\n\n  function deleteList() {\n    const deleteListBtn = document.querySelectorAll(\".deleteList\");\n    deleteListBtn.forEach((deleteButton, index) => {\n      deleteButton.addEventListener(\"click\", () => {\n        listCollection.splice(index, 1);\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showList)(listCollection);\n        (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteList)();\n        deleteList();\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(listCollection[index]);\n        pickUpList();\n        saveToLocalStorage();\n      });\n    });\n  }\n\n  function deleteTask() {\n    const deleteTaskBtn = document.querySelectorAll(\".deleteTask\");\n    deleteTaskBtn.forEach((deleteButton, index) => {\n      deleteButton.addEventListener(\"click\", () => {\n        listCollection[pickUpList()].taskCollection.splice(index, 1);\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(listCollection[pickUpList()].taskCollection);\n        (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteTask)();\n        deleteTask();\n        pickUpList();\n        saveToLocalStorage();\n      });\n    });\n  }\n\n  function pickUpList() {\n    const listTitleMain = document.querySelector(\"#listTitleMain\");\n    const titleH2 = document.createElement(\"h2\");\n    document.querySelectorAll(\"#listTitle\").forEach((element, index) => {\n      element.addEventListener(\"click\", () => {\n        listTitleMain.textContent = \"\";\n        listTitleMain.appendChild(titleH2);\n        titleH2.textContent = element.textContent;\n        listId = index;\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(listCollection[index].taskCollection);\n        deleteTask();\n        deleteList();\n        (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskDescriptionShow)();\n        (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleListDescriptionShow)();\n      });\n    });\n    return listId;\n  }\n\n  function newList() {\n    const inputs = {\n      listName: document.querySelector(\"#listName\").value,\n      listDescription: document.querySelector(\"#listDescriptionArea\").value,\n    };\n    const singleList = {\n      name: inputs.listName,\n      description: inputs.listDescription,\n      taskCollection: [],\n    };\n    return singleList;\n  }\n\n  function addList() {\n    const addListBtn = document.querySelector(\"#addListBtn\");\n    addListBtn.addEventListener(\"click\", () => {\n      listCollection.push(newList());\n      (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showList)(listCollection);\n      pickUpList();\n      (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleListDescriptionShow)();\n      (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteList)();\n      deleteList();\n      saveToLocalStorage();\n    });\n  }\n\n  function addTaskToList() {\n    const addTaskBtn = document.querySelector(\"#addTaskBtn\");\n    addTaskBtn.addEventListener(\"click\", () => {\n      let listIndex = pickUpList();\n      if (\n        listCollection[listIndex] &&\n        listCollection[listIndex].taskCollection\n      ) {\n        listCollection[listIndex].taskCollection.push(task.newTask());\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(listCollection[listIndex].taskCollection);\n      }\n      (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskDescriptionShow)();\n      (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteTask)();\n      task.markDoneTask();\n      deleteTask();\n\n      saveToLocalStorage();\n    });\n  }\n\n  function saveToLocalStorage() {\n    localStorage.setItem(\"lists\", JSON.stringify(listCollection));\n  }\n\n  return { addList, addTaskToList };\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/list.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\nfunction Modal() {\n  const selectors = {\n    modalAddTaskBtn: document.querySelector(\"#modalAddTaskBtn\"),\n    modalAddListBtn: document.querySelector(\"#modalAddListBtn\"),\n    backBtnList: document.querySelector(\"#backBtnList\"),\n    backBtnTask: document.querySelector(\"#backBtnTask\"),\n    dialog: document.querySelector(\"dialog\"),\n    modalList: document.querySelector(\"#modalList\"),\n    modalTask: document.querySelector(\"#modalTask\"),\n  };\n  function showModal() {\n    document.addEventListener(\"click\", (e) => {\n      if (e.target === selectors.modalAddListBtn) {\n        selectors.modalList.showModal();\n      } else if (e.target === selectors.modalAddTaskBtn) {\n        selectors.modalTask.showModal();\n      }\n    });\n  }\n  function closeModal() {\n    selectors.backBtnList.addEventListener(\"click\", () => {\n      selectors.modalList.close();\n    });\n    selectors.backBtnTask.addEventListener(\"click\", () => {\n      selectors.modalTask.close();\n    });\n  }\n\n  return { showModal, closeModal };\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/modal.js?");

/***/ }),

/***/ "./src/show.js":
/*!*********************!*\
  !*** ./src/show.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showList: () => (/* binding */ showList),\n/* harmony export */   showTasks: () => (/* binding */ showTasks)\n/* harmony export */ });\nfunction showList(list) {\n  const outputs = {\n    listField: document.querySelector(\"#listField ul\"),\n  };\n  outputs.listField.textContent = \"\";\n  list.forEach((element) => {\n    const listElementsAdd = {\n      li1: document.createElement(\"li\"),\n      li2: document.createElement(\"li\"),\n      span1: document.createElement(\"span\"),\n      span2: document.createElement(\"span\"),\n      span3: document.createElement(\"span\"),\n    };\n    listElementsAdd.span1.textContent = \"✗\";\n    listElementsAdd.span1.classList.add(\"deleteList\");\n    listElementsAdd.span2.textContent = element.name;\n    listElementsAdd.span2.classList.add(\"spanLink\");\n    listElementsAdd.span2.setAttribute(\"id\", \"listTitle\");\n    listElementsAdd.span3.textContent = \" ...\";\n    listElementsAdd.span3.setAttribute(\"id\", \"listDescriptionBtn\");\n    listElementsAdd.span3.classList.add(\"spanLink\");\n    listElementsAdd.li2.textContent = element.description;\n    listElementsAdd.li2.setAttribute(\"id\", \"listDescription\");\n    listElementsAdd.li2.classList.add(\"description\");\n\n    outputs.listField.appendChild(listElementsAdd.li1);\n    listElementsAdd.li1.appendChild(listElementsAdd.span1);\n    listElementsAdd.li1.appendChild(listElementsAdd.span2);\n    listElementsAdd.li1.appendChild(listElementsAdd.span3);\n    outputs.listField.appendChild(listElementsAdd.li2);\n  });\n}\n\nfunction showTasks(list) {\n  const outputs = {\n    taskField: document.querySelector(\"#taskField ul\"),\n  };\n  outputs.taskField.textContent = \"\";\n  if (Array.isArray(list)) {\n    list.forEach((element) => {\n    const taskElementsAdd = {\n      li1: document.createElement(\"li\"),\n      div1: document.createElement(\"div\"),\n      span1: document.createElement(\"span\"),\n      span2: document.createElement(\"span\"),\n      span3: document.createElement(\"span\"),\n      div2: document.createElement(\"div\"),\n      span4: document.createElement(\"span\"),\n      span5: document.createElement(\"span\"),\n      li2: document.createElement(\"li\"),\n    };\n    taskElementsAdd.li1.style.backgroundColor = element.priority;\n\n    taskElementsAdd.span1.textContent = \"✗ \";\n    taskElementsAdd.span1.classList.add(\"deleteTask\");\n    taskElementsAdd.span2.textContent = \"✔ \";\n    taskElementsAdd.span2.classList.add(\"spanLink\");\n    taskElementsAdd.span2.setAttribute(\"id\", \"checkTask\");\n    taskElementsAdd.span3.textContent = element.name;\n\n    taskElementsAdd.span4.setAttribute(\"id\", \"taskDueDate\");\n    taskElementsAdd.span4.textContent = element.date;\n    taskElementsAdd.span5.classList.add(\"spanLink\");\n    taskElementsAdd.span5.setAttribute(\"id\", \"taskDescriptionBtn\");\n    taskElementsAdd.span5.textContent = \" ...\";\n\n    taskElementsAdd.li2.textContent = element.description;\n    taskElementsAdd.li2.setAttribute(\"id\", \"taskDescription\");\n    taskElementsAdd.li2.classList.add(\"description\");\n\n    outputs.taskField.appendChild(taskElementsAdd.li1);\n    taskElementsAdd.li1.appendChild(taskElementsAdd.div1);\n    taskElementsAdd.div1.appendChild(taskElementsAdd.span1);\n    taskElementsAdd.div1.appendChild(taskElementsAdd.span2);\n    taskElementsAdd.div1.appendChild(taskElementsAdd.span3);\n    taskElementsAdd.li1.appendChild(taskElementsAdd.div2);\n    taskElementsAdd.div2.appendChild(taskElementsAdd.span4);\n    taskElementsAdd.div2.appendChild(taskElementsAdd.span5);\n    outputs.taskField.appendChild(taskElementsAdd.li2);\n  });\n}\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/show.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskBehaviours: () => (/* binding */ TaskBehaviours)\n/* harmony export */ });\nfunction TaskBehaviours() {\n  function newTask() {\n    const inputs = {\n      taskName: document.querySelector(\"#taskName\").value,\n      taskDescription: document.querySelector(\"#taskDescriptionInput\").value,\n      taskDueDate: document.querySelector(\"#taskDueDateInput\").value,\n    };\n    const singleTask = {\n      name: inputs.taskName,\n      description: inputs.taskDescription,\n      date: inputs.taskDueDate,\n      priority: poriorityChosed,\n    };\n    return singleTask;\n  }\n\n  let poriorityChosed;\n  function poriorityCheck() {\n    const taskPriority = document.querySelectorAll(\".priorityButtons button\");\n    taskPriority.forEach((element) => {\n      element.addEventListener(\"click\", () => {\n        taskPriority.forEach((button) => (button.style.color = \"white\"));\n        element.style.color = \"red\";\n        poriorityChosed = window.getComputedStyle(element).backgroundColor;\n      });\n    });\n    return poriorityChosed;\n  }\n\n  function markDoneTask() {\n    document.querySelectorAll(\"#checkTask\").forEach((element) => {\n      element.addEventListener(\"click\", () => {\n        if (element.nextElementSibling.className !== \"\") {\n          element.nextElementSibling.classList.remove(\"done\");\n        } else {\n          element.nextElementSibling.classList.add(\"done\");\n        }\n      });\n    });\n  }\n\n  return { newTask, poriorityCheck, markDoneTask };\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
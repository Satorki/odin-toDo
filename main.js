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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n\n\n\n\n// //LIST CREATE\n// class List {\n//   taskList = [];\n//   constructor(id, title, description) {\n//     this.id = id;\n//     this.title = title;\n//     this.description = description;\n//   }\n// }\n// //TASK CREATE\n// class Task {\n//   constructor(id, name, description, date, priority) {\n//     this.id = id;\n//     this.name = name;\n//     this.description = description;\n//     this.date = date;\n//     this.priority = priority;\n//   }\n// }\n\n// const { id } = require(\"date-fns/locale\");\n\n// //LIST AND TASK WITH ID\n// function IdGenerator() {\n//   let id = 1;\n//   function generateId() {\n//     return id++;\n//   }\n\n//   function listWithId(title, description) {\n//     return new List(generateId(), title, description);\n//   }\n\n//   function taskWithId(name, description, date, priority) {\n//     return new Task(generateId(), name, description, date, priority);\n//   }\n\n//   return { listWithId, taskWithId };\n// }\n\n// //MODAL SHOW\n// function Modal() {\n//   const selectors = {\n//     modalAddTaskBtn: document.querySelector(\"#modalAddTaskBtn\"),\n//     modalAddListBtn: document.querySelector(\"#modalAddListBtn\"),\n//     backBtnList: document.querySelector(\"#backBtnList\"),\n//     backBtnTask: document.querySelector(\"#backBtnTask\"),\n//     dialog: document.querySelector(\"dialog\"),\n//     modalList: document.querySelector(\"#modalList\"),\n//     modalTask: document.querySelector(\"#modalTask\"),\n//   };\n//   function showModal() {\n//     document.addEventListener(\"click\", (e) => {\n//       if (e.target === selectors.modalAddListBtn) {\n//         selectors.modalList.showModal();\n//       } else if (e.target === selectors.modalAddTaskBtn) {\n//         selectors.modalTask.showModal();\n//       }\n//     });\n//   }\n//   function closeModal() {\n//     selectors.backBtnList.addEventListener(\"click\", () => {\n//       selectors.modalList.close();\n//     });\n//     selectors.backBtnTask.addEventListener(\"click\", () => {\n//       selectors.modalTask.close();\n//     });\n//   }\n\n//   return { showModal, closeModal };\n// }\n// const modal = Modal();\n// modal.showModal();\n// modal.closeModal();\n\n// const ids = IdGenerator();\n\n// //LIST SHOW\n// function ListBehaviours() {\n//   const selectors = {\n//     deleteListBtn: document.querySelector(\"#deleteListBtn\"),\n//     addListBtn: document.querySelector(\"#addListBtn\"),\n//     listField: document.querySelector(\"#listField ul\"),\n//     listName: document.querySelector(\"#listName\"),\n//     listDescription: document.querySelector(\"#listDescriptionArea\"),\n//     backBtnList: document.querySelector(\"#backBtnList\"),\n//   };\n//   const completedList = [];\n\n//   function createList() {\n//     return ids.listWithId(\n//       selectors.listName.value,\n//       selectors.listDescription.value\n//     );\n//   }\n//   function saveList() {\n//     completedList.push(createList());\n//     return completedList;\n//   }\n\n//   function addList() {\n//     selectors.addListBtn.addEventListener(\"click\", () => {\n//       saveList();\n//       generateList();\n//       toggleDescriptionShow();\n//       pickUpList();\n//       toggleDeleteList();\n//       deleteList();\n//     });\n//   }\n\n//   function generateList() {\n//     selectors.listField.textContent = \"\";\n//     completedList.forEach((element) => {\n//       const listElementsAdd = {\n//         li1: document.createElement(\"li\"),\n//         li2: document.createElement(\"li\"),\n//         span1: document.createElement(\"span\"),\n//         span2: document.createElement(\"span\"),\n//         span3: document.createElement(\"span\"),\n//       };\n//       listElementsAdd.span1.textContent = \"✗\";\n//       listElementsAdd.span1.classList.add(\"deleteList\");\n//       listElementsAdd.span2.textContent = element.title;\n//       listElementsAdd.span2.classList.add(\"spanLink\");\n//       listElementsAdd.span2.setAttribute(\"id\", \"listTitle\");\n//       listElementsAdd.span3.textContent = \" ...\";\n//       listElementsAdd.span3.setAttribute(\"id\", \"listDescriptionBtn\");\n//       listElementsAdd.span3.classList.add(\"spanLink\");\n//       listElementsAdd.li2.textContent = element.description;\n//       listElementsAdd.li2.setAttribute(\"id\", \"listDescription\");\n//       listElementsAdd.li2.classList.add(\"description\");\n\n//       selectors.listField.appendChild(listElementsAdd.li1);\n//       listElementsAdd.li1.appendChild(listElementsAdd.span1);\n//       listElementsAdd.li1.appendChild(listElementsAdd.span2);\n//       listElementsAdd.li1.appendChild(listElementsAdd.span3);\n//       selectors.listField.appendChild(listElementsAdd.li2);\n//     });\n//   }\n\n//   function pickUpList() {\n//     const listTitleMain = document.querySelector(\"#listTitleMain\");\n//     const titleH2 = document.createElement(\"h2\");\n//     document.querySelectorAll(\"#listTitle\").forEach((element) => {\n//       element.addEventListener(\"click\", () => {\n//         listTitleMain.textContent = \"\";\n//         listTitleMain.appendChild(titleH2);\n//         titleH2.textContent = element.textContent;\n//         const mainTasks = TaskBehaviours();\n//         mainTasks.poriorityCheck();\n//         mainTasks.addTask();\n//       });\n//     });\n//   }\n\n//   function toggleDescriptionShow() {\n//     document.querySelectorAll(\"#listDescriptionBtn\").forEach((element) => {\n//       element.addEventListener(\"click\", () => {\n//         if (\n//           element.closest(\"li\").nextElementSibling.style.display === \"block\"\n//         ) {\n//           element.closest(\"li\").nextElementSibling.style.display = \"none\";\n//         } else {\n//           element.closest(\"li\").nextElementSibling.style.display = \"block\";\n//         }\n//       });\n//     });\n//   }\n\n//   function toggleDeleteList() {\n//     let temp = 0;\n//     selectors.deleteListBtn.addEventListener(\"click\", () => {\n//       if (temp === 0) {\n//         document.querySelectorAll(\".deleteList\").forEach((element) => {\n//           element.style.display = \"block\";\n//         });\n//         temp = 1;\n//       } else {\n//         document.querySelectorAll(\".deleteList\").forEach((element) => {\n//           element.style.display = \"none\";\n//         });\n//         temp = 0;\n//       }\n//     });\n//   }\n\n//   function deleteList() {\n//     document.querySelectorAll(\".deleteList\").forEach((deleteButton, index) => {\n//       deleteButton.addEventListener(\"click\", () => {\n//         completedList.splice(index, 1);\n//         generateList();\n//         document.querySelectorAll(\".deleteList\").forEach((element) => {\n//           element.style.display = \"block\";\n//         });\n//         deleteList();\n//         toggleDescriptionShow();\n//       });\n//     });\n//   }\n\n//   return { createList, addList };\n// }\n\n// const mainList = ListBehaviours();\n// mainList.createList();\n// mainList.addList();\n\n// /////////////////////////////////////////////////\n\n// function TaskBehaviours() {\n//   const selectors = {\n//     taskName: document.querySelector(\"#taskName\"),\n//     taskDescription: document.querySelector(\"#taskDescriptionInput\"),\n//     taskDueDate: document.querySelector(\"#taskDueDateInput\"),\n//     priorityButtons: document.querySelectorAll(\".priorityButtons button\"),\n//     addTaskBtn: document.querySelector(\"#addTaskBtn\"),\n//     backBtnTask: document.querySelector(\"#backBtnTask\"),\n//     taskField: document.querySelector(\"#taskField ul\"),\n//     deleteTaskBtn: document.querySelector(\"#deleteTaskBtn\"),\n//   };\n\n//   let poriorityChosed;\n//   function poriorityCheck() {\n//     selectors.priorityButtons.forEach((element) => {\n//       element.addEventListener(\"click\", () => {\n//         selectors.priorityButtons.forEach(\n//           (button) => (button.style.color = \"white\")\n//         );\n//         element.style.color = \"red\";\n//         poriorityChosed = window.getComputedStyle(element).backgroundColor;\n//       });\n//     });\n//     return poriorityChosed;\n//   }\n\n//   function createTask() {\n//     return ids.taskWithId(\n//       selectors.taskName.value,\n//       selectors.taskDescription.value,\n//       selectors.taskDueDate.value,\n//       poriorityChosed\n//     );\n//   }\n\n//   const taskList = [];\n//   function addTask() {\n//     selectors.addTaskBtn.addEventListener(\"click\", () => {\n//       taskList.push(createTask());\n//       generateTask();\n//       doneTask();\n//       toggleDescriptionShow();\n//       toggleDeleteTask();\n//       deleteTask();\n//       generateAllTasks();\n//     });\n//     return taskList;\n//   }\n\n//   function generateAllTasks() {\n//     console.log(taskList);\n//   }\n\n//   function generateTask() {\n//     selectors.taskField.textContent = \"\";\n//     taskList.forEach((element) => {\n//       const taskElementsAdd = {\n//         li1: document.createElement(\"li\"),\n//         div1: document.createElement(\"div\"),\n//         span1: document.createElement(\"span\"),\n//         span2: document.createElement(\"span\"),\n//         span3: document.createElement(\"span\"),\n//         div2: document.createElement(\"div\"),\n//         span4: document.createElement(\"span\"),\n//         span5: document.createElement(\"span\"),\n//         li2: document.createElement(\"li\"),\n//       };\n//       taskElementsAdd.li1.style.backgroundColor = element.priority;\n\n//       taskElementsAdd.span1.textContent = \"✗ \";\n//       taskElementsAdd.span1.classList.add(\"deleteTask\");\n//       taskElementsAdd.span2.textContent = \"✔ \";\n//       taskElementsAdd.span2.classList.add(\"spanLink\");\n//       taskElementsAdd.span2.setAttribute(\"id\", \"checkTask\");\n//       taskElementsAdd.span3.textContent = element.name;\n\n//       taskElementsAdd.span4.setAttribute(\"id\", \"taskDueDate\");\n//       taskElementsAdd.span4.textContent = element.date;\n//       taskElementsAdd.span5.classList.add(\"spanLink\");\n//       taskElementsAdd.span5.setAttribute(\"id\", \"taskDescriptionBtn\");\n//       taskElementsAdd.span5.textContent = \" ...\";\n\n//       taskElementsAdd.li2.textContent = element.description;\n//       taskElementsAdd.li2.setAttribute(\"id\", \"taskDescription\");\n//       taskElementsAdd.li2.classList.add(\"description\");\n\n//       selectors.taskField.appendChild(taskElementsAdd.li1);\n//       taskElementsAdd.li1.appendChild(taskElementsAdd.div1);\n//       taskElementsAdd.div1.appendChild(taskElementsAdd.span1);\n//       taskElementsAdd.div1.appendChild(taskElementsAdd.span2);\n//       taskElementsAdd.div1.appendChild(taskElementsAdd.span3);\n//       taskElementsAdd.li1.appendChild(taskElementsAdd.div2);\n//       taskElementsAdd.div2.appendChild(taskElementsAdd.span4);\n//       taskElementsAdd.div2.appendChild(taskElementsAdd.span5);\n//       selectors.taskField.appendChild(taskElementsAdd.li2);\n//     });\n//   }\n//   function toggleDescriptionShow() {\n//     document.querySelectorAll(\"#taskDescriptionBtn\").forEach((element) => {\n//       element.addEventListener(\"click\", () => {\n//         if (\n//           element.closest(\"li\").nextElementSibling.style.display === \"block\"\n//         ) {\n//           element.closest(\"li\").nextElementSibling.style.display = \"none\";\n//         } else {\n//           element.closest(\"li\").nextElementSibling.style.display = \"block\";\n//         }\n//       });\n//     });\n//   }\n\n//   function doneTask() {\n//     document.querySelectorAll(\"#checkTask\").forEach((element) => {\n//       element.addEventListener(\"click\", () => {\n//         if (element.nextElementSibling.className !== \"\") {\n//           element.nextElementSibling.classList.remove(\"done\");\n//         } else {\n//           element.nextElementSibling.classList.add(\"done\");\n//         }\n//       });\n//     });\n//   }\n\n//   function toggleDeleteTask() {\n//     let temp = 0;\n//     selectors.deleteTaskBtn.addEventListener(\"click\", () => {\n//       if (temp === 0) {\n//         document.querySelectorAll(\".deleteTask\").forEach((element) => {\n//           element.style.display = \"inline-block\";\n//         });\n//         temp = 1;\n//       } else {\n//         document.querySelectorAll(\".deleteTask\").forEach((element) => {\n//           element.style.display = \"none\";\n//         });\n//         temp = 0;\n//       }\n//     });\n//   }\n\n//   function deleteTask() {\n//     document.querySelectorAll(\".deleteTask\").forEach((deleteButton, index) => {\n//       deleteButton.addEventListener(\"click\", () => {\n//         taskList.splice(index, 1);\n//         generateTask();\n//         document.querySelectorAll(\".deleteTask\").forEach((element) => {\n//           element.style.display = \"inline-block\";\n//         });\n//         deleteTask();\n//         toggleDescriptionShow();\n//       });\n//     });\n//   }\n\n//   return { poriorityCheck, addTask };\n// }\n\nconst modal = (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal)();\nmodal.showModal();\nmodal.closeModal();\n\nconst list = (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.ListBehaviours)();\nlist.addList();\nlist.addTaskToList();\n\n// function showList() {\n//   outputs = {\n//     listField: document.querySelector(\"#listField ul\"),\n//   };\n//   outputs.listField.textContent = \"\";\n//   list.listCollection.forEach((element) => {\n//     const listElementsAdd = {\n//       li1: document.createElement(\"li\"),\n//       li2: document.createElement(\"li\"),\n//       span1: document.createElement(\"span\"),\n//       span2: document.createElement(\"span\"),\n//       span3: document.createElement(\"span\"),\n//     };\n//     listElementsAdd.span1.textContent = \"✗\";\n//     listElementsAdd.span1.classList.add(\"deleteList\");\n//     listElementsAdd.span2.textContent = element.name;\n//     listElementsAdd.span2.classList.add(\"spanLink\");\n//     listElementsAdd.span2.setAttribute(\"id\", \"listTitle\");\n//     listElementsAdd.span3.textContent = \" ...\";\n//     listElementsAdd.span3.setAttribute(\"id\", \"listDescriptionBtn\");\n//     listElementsAdd.span3.classList.add(\"spanLink\");\n//     listElementsAdd.li2.textContent = element.description;\n//     listElementsAdd.li2.setAttribute(\"id\", \"listDescription\");\n//     listElementsAdd.li2.classList.add(\"description\");\n\n//     outputs.listField.appendChild(listElementsAdd.li1);\n//     listElementsAdd.li1.appendChild(listElementsAdd.span1);\n//     listElementsAdd.li1.appendChild(listElementsAdd.span2);\n//     listElementsAdd.li1.appendChild(listElementsAdd.span3);\n//     outputs.listField.appendChild(listElementsAdd.li2);\n//   });\n// }\n\n// function showTasks() {\n//   outputs = {\n//     taskField: document.querySelector(\"#taskField ul\"),\n//   };\n//   selectors.taskField.textContent = \"\";\n//   taskList.forEach((element) => {\n//     const taskElementsAdd = {\n//       li1: document.createElement(\"li\"),\n//       div1: document.createElement(\"div\"),\n//       span1: document.createElement(\"span\"),\n//       span2: document.createElement(\"span\"),\n//       span3: document.createElement(\"span\"),\n//       div2: document.createElement(\"div\"),\n//       span4: document.createElement(\"span\"),\n//       span5: document.createElement(\"span\"),\n//       li2: document.createElement(\"li\"),\n//     };\n//     taskElementsAdd.li1.style.backgroundColor = element.priority;\n\n//     taskElementsAdd.span1.textContent = \"✗ \";\n//     taskElementsAdd.span1.classList.add(\"deleteTask\");\n//     taskElementsAdd.span2.textContent = \"✔ \";\n//     taskElementsAdd.span2.classList.add(\"spanLink\");\n//     taskElementsAdd.span2.setAttribute(\"id\", \"checkTask\");\n//     taskElementsAdd.span3.textContent = element.name;\n\n//     taskElementsAdd.span4.setAttribute(\"id\", \"taskDueDate\");\n//     taskElementsAdd.span4.textContent = element.date;\n//     taskElementsAdd.span5.classList.add(\"spanLink\");\n//     taskElementsAdd.span5.setAttribute(\"id\", \"taskDescriptionBtn\");\n//     taskElementsAdd.span5.textContent = \" ...\";\n\n//     taskElementsAdd.li2.textContent = element.description;\n//     taskElementsAdd.li2.setAttribute(\"id\", \"taskDescription\");\n//     taskElementsAdd.li2.classList.add(\"description\");\n\n//     selectors.taskField.appendChild(taskElementsAdd.li1);\n//     taskElementsAdd.li1.appendChild(taskElementsAdd.div1);\n//     taskElementsAdd.div1.appendChild(taskElementsAdd.span1);\n//     taskElementsAdd.div1.appendChild(taskElementsAdd.span2);\n//     taskElementsAdd.div1.appendChild(taskElementsAdd.span3);\n//     taskElementsAdd.li1.appendChild(taskElementsAdd.div2);\n//     taskElementsAdd.div2.appendChild(taskElementsAdd.span4);\n//     taskElementsAdd.div2.appendChild(taskElementsAdd.span5);\n//     selectors.taskField.appendChild(taskElementsAdd.li2);\n//   });\n// }\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListBehaviours: () => (/* binding */ ListBehaviours)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\nconst task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.TaskBehaviours)();\nfunction ListBehaviours() {\n    const listCollection = [];\n  \n    function newList() {\n      const inputs = {\n        listName: document.querySelector(\"#listName\").value,\n        listDescription: document.querySelector(\"#listDescriptionArea\").value,\n      };\n      const singleList = {\n        name: inputs.listName,\n        description: inputs.listDescription,\n        taskCollection: [],\n      };\n      return singleList;\n    }\n  \n    function addList() {\n      const addListBtn = document.querySelector(\"#addListBtn\");\n      addListBtn.addEventListener(\"click\", () => {\n        listCollection.push(newList());\n        //showList();\n      });\n    }\n  \n    function addTaskToList() {\n      const addTaskBtn = document.querySelector(\"#addTaskBtn\");\n      addTaskBtn.addEventListener(\"click\", () => {\n        listCollection[0].taskCollection.push(task.newTask());\n        console.table(listCollection);\n      });\n    }\n  \n    return { addList, addTaskToList, listCollection };\n  }\n\n  \n\n//# sourceURL=webpack://odin-todo/./src/list.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\nfunction Modal() {\n  const selectors = {\n    modalAddTaskBtn: document.querySelector(\"#modalAddTaskBtn\"),\n    modalAddListBtn: document.querySelector(\"#modalAddListBtn\"),\n    backBtnList: document.querySelector(\"#backBtnList\"),\n    backBtnTask: document.querySelector(\"#backBtnTask\"),\n    dialog: document.querySelector(\"dialog\"),\n    modalList: document.querySelector(\"#modalList\"),\n    modalTask: document.querySelector(\"#modalTask\"),\n  };\n  function showModal() {\n    document.addEventListener(\"click\", (e) => {\n      if (e.target === selectors.modalAddListBtn) {\n        selectors.modalList.showModal();\n      } else if (e.target === selectors.modalAddTaskBtn) {\n        selectors.modalTask.showModal();\n      }\n    });\n  }\n  function closeModal() {\n    selectors.backBtnList.addEventListener(\"click\", () => {\n      selectors.modalList.close();\n    });\n    selectors.backBtnTask.addEventListener(\"click\", () => {\n      selectors.modalTask.close();\n    });\n  }\n\n  return { showModal, closeModal };\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/modal.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskBehaviours: () => (/* binding */ TaskBehaviours)\n/* harmony export */ });\nfunction TaskBehaviours() {\n    function newTask() {\n      const inputs = {\n        taskName: document.querySelector(\"#taskName\").value,\n        taskDescription: document.querySelector(\"#taskDescriptionInput\").value,\n        taskDueDate: document.querySelector(\"#taskDueDateInput\").value,\n      };\n      const singleTask = {\n        name: inputs.taskName,\n        description: inputs.taskDescription,\n        date: inputs.taskDueDate,\n      };\n      return singleTask;\n    }\n    return { newTask };\n  }\n\n\n\n//# sourceURL=webpack://odin-todo/./src/task.js?");

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
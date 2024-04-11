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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  font-family: \"Poppins\", sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  outline: none;\n  text-decoration: none;\n  transition: all 0.2s linear;\n}\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: 2fr 8fr;\n  height: 100vh;\n  gap: 20px;\n  background-color: #083344;\n}\n/* LISTS */\n.left {\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-rows: 1fr 14fr;\n  gap: 20px;\n}\n\n.title {\n  grid-row: 1 / 2;\n  background-color: #8595e7;\n}\n.left .title {\n  text-align: right;\n  border-bottom-right-radius: 20px;\n}\n\n.list,\n.task {\n  grid-row: 2 / 3;\n}\n\nh2 {\n  font-size: 2rem;\n  padding: 10px 20px 0 20px;\n}\n\n#listField {\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  position: relative;\n  background-color: #22d3ee;\n}\n.left .buttonsBox {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n}\n.list ul li,\n.task ul li {\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  font-size: 1.2rem;\n  padding: 5px 10px;\n}\n.list ul li {\n  margin: 20px 0 0 20px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: #0e7490;\n  color: #fff;\n}\n.list ul li.description {\n  display: none;\n  margin-top: 0;\n  background-color: #ecfeff;\n  color: #000;\n}\n\n.deleteList {\n  display: none;\n}\n.deleteList:hover {\n  color: #ff0000;\n  cursor: pointer;\n}\n\n/* TASKS */\n.right {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-rows: 1fr 14fr;\n  gap: 20px;\n}\n.task ul li {\n  margin: 20px 20px 0 20px;\n  border-radius: 20px;\n}\n\n.right .title {\n  border-bottom-left-radius: 20px;\n}\n#taskField {\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  position: relative;\n  background-color: #a5f3fc;\n}\n.right .buttonsBox {\n  position: absolute;\n  bottom: 20px;\n  right: 10px;\n}\n.task ul li {\n  color: #fff;\n  background-color: #164e63;\n}\n.done {\n  opacity: 0.6;\n  text-decoration: line-through;\n}\n\n.task ul li.description {\n  display: none;\n  margin-top: 0;\n  background-color: #ecfeff;\n  color: #000;\n}\n\n.deleteTask {\n  display: none;\n}\n.deleteTask:hover {\n  color: #ff0000;\n  cursor: pointer;\n}\n\n/* BUTTONS */\n.roundButton {\n  color: #fff;\n  padding: 5px 12px;\n  font-size: 2.5rem;\n  border-radius: 100px;\n  background-color: #083344;\n  margin: 10px;\n  cursor: pointer;\n}\nbutton:hover {\n  color: #7c9159;\n}\n.spanLink {\n  cursor: pointer;\n}\n.spanLink:hover {\n  color: #7c9159;\n}\n\n/* MODAL DIALOG */\n.modal {\n  z-index: 3;\n  margin: 0 auto;\n  top: 25%;\n  padding: 20px;\n  border-radius: 20px;\n  background-color: #3c4952;\n  width: 500px;\n}\n\n.newTitle {\n  border-bottom-right-radius: 20px;\n  border-top-left-radius: 20px;\n  padding: 5px;\n  text-align: center;\n  background-color: #8595e7;\n}\n.formQuestion {\n  color: #fff;\n  background-color: #0e7490;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  padding: 4px 0 1px 14px;\n  margin: 10px 0 0 0;\n}\ninput {\n  background-color: #ecfeff;\n  height: 2rem;\n  font-size: 1rem;\n  padding: 4px;\n  width: 100%;\n  border: none;\n}\n.modalBackground {\n  background-color: #cffafe;\n  border-radius: 20px;\n}\n#listDescriptionArea {\n  background-color: #ecfeff;\n  font-size: 1rem;\n  padding: 4px;\n  resize: none;\n  width: 100%;\n  border: none;\n}\n\n.modal .buttonsBox {\n  display: flex;\n  justify-content: space-between;\n}\n#modalTask .priorityButtons {\n  display: flex;\n  flex-direction: column;\n}\n#modalTask .priorityButtons button {\n  padding: 4px;\n  font-size: 1.1rem;\n  color: #fff;\n  cursor: pointer;\n}\n#modalTask .priorityButtons button:hover {\n  color: #7c9159;\n}\n#modalTask .priorityButtons button:active {\n  color: #ff0000;\n}\n\n.highPriority {\n  background-color: #083344;\n}\n.mediumPriority {\n  background-color: #164E63;\n}\n.lowPriority {\n  background-color: #155E75;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n\n\n\n\nconst modal = (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.Modal)();\nmodal.showModal();\nmodal.closeModal();\nconst list = (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.ListBehaviours)();\nlist.addList();\nlist.addTaskToList();\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListBehaviours: () => (/* binding */ ListBehaviours)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.js */ \"./src/show.js\");\n/* harmony import */ var _domDescription_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domDescription.js */ \"./src/domDescription.js\");\n/* harmony import */ var _domDelete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domDelete.js */ \"./src/domDelete.js\");\n\n\n\n\n\nconst task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.TaskBehaviours)();\ntask.poriorityCheck();\n\nfunction ListBehaviours() {\n  let listCollection = [];\n  let listId;\n\n  const test = JSON.parse(localStorage.getItem(\"lists\")) || [];\n  listCollection = test;\n  (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showList)(listCollection);\n  pickUpList();\n  (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteList)();\n  (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteTask)();\n  deleteTask();\n  (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskDescriptionShow)();\n  deleteList();\n  (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleListDescriptionShow)();\n\n  function deleteList() {\n    const deleteListBtn = document.querySelectorAll(\".deleteList\");\n    deleteListBtn.forEach((deleteButton, index) => {\n      deleteButton.addEventListener(\"click\", () => {\n        listCollection.splice(index, 1);\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showList)(listCollection);\n        deleteList();\n        (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteList)();\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(listCollection[index]);\n        pickUpList();\n        saveToLocalStorage();\n      });\n    });\n  }\n\n  function deleteTask() {\n    const deleteTaskBtn = document.querySelectorAll(\".deleteTask\");\n    deleteTaskBtn.forEach((deleteButton, index) => {\n      deleteButton.addEventListener(\"click\", () => {\n        listCollection[pickUpList()].taskCollection.splice(index, 1);\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(listCollection[pickUpList()].taskCollection);\n        (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteTask)();\n        deleteTask();\n        pickUpList();\n        saveToLocalStorage();\n      });\n    });\n  }\n\n  function pickUpList() {\n    const listTitleMain = document.querySelector(\"#listTitleMain\");\n    const titleH2 = document.createElement(\"h2\");\n    document.querySelectorAll(\"#listTitle\").forEach((element, index) => {\n      element.addEventListener(\"click\", () => {\n        listTitleMain.textContent = \"\";\n        listTitleMain.appendChild(titleH2);\n        titleH2.textContent = element.textContent;\n        listId = index;\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(listCollection[index].taskCollection);\n        deleteTask();\n        (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskDescriptionShow)();\n        (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleListDescriptionShow)();\n      });\n    });\n    return listId;\n  }\n\n  function newList() {\n    const inputs = {\n      listName: document.querySelector(\"#listName\").value,\n      listDescription: document.querySelector(\"#listDescriptionArea\").value,\n    };\n    const singleList = {\n      name: inputs.listName,\n      description: inputs.listDescription,\n      taskCollection: [],\n    };\n    return singleList;\n  }\n\n  function addList() {\n    const addListBtn = document.querySelector(\"#addListBtn\");\n    addListBtn.addEventListener(\"click\", () => {\n      listCollection.push(newList());\n      (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showList)(listCollection);\n      pickUpList();\n      (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleListDescriptionShow)();\n      (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteList)();\n      saveToLocalStorage();\n    });\n  }\n\n  function addTaskToList() {\n    const addTaskBtn = document.querySelector(\"#addTaskBtn\");\n    addTaskBtn.addEventListener(\"click\", () => {\n      let listIndex = pickUpList();\n      if (\n        listCollection[listIndex] &&\n        listCollection[listIndex].taskCollection\n      ) {\n        listCollection[listIndex].taskCollection.push(task.newTask());\n        (0,_show_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(listCollection[listIndex].taskCollection);\n      }\n      (0,_domDescription_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskDescriptionShow)();\n      (0,_domDelete_js__WEBPACK_IMPORTED_MODULE_3__.toggleDeleteTask)();\n      task.markDoneTask();\n      deleteTask();\n      saveToLocalStorage();\n    });\n  }\n\n  function saveToLocalStorage() {\n    localStorage.setItem(\"lists\", JSON.stringify(listCollection));\n  }\n\n  return { addList, addTaskToList };\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/list.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body, html{
    height: 100vh;
    padding: 0;
    margin: 0;
}

.fullPage{
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header{
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
}

.main{
    background-color: black;
    display: flex;
    flex-direction: row;
    flex: auto;
}

.projectHolder{
    display: grid;
    grid-template-rows: repeat(10, 75px);
    gap: 20px;
    height: 100%;
    width: 15%;
    padding: 5px;

    background-color: black;
}

.projectCard{
    display: flex;
    justify-content: center;
   
    align-items: center;
    padding: 5px;
  
    border-radius: 10px;

    background-color: white;
}

#projectTitle{
    font-size: 2rem;
}

.taskHolder{
    display: grid;
    width: 100%;
    padding: 8px;
    gap: 8px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    background-color: white;
}

.taskForm{
    display: flex;
    flex-direction: column;

    width: auto;
    height: auto;

    color: white;
    background-color: blue;
}

.taskCard{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4px;
    background-color: orange;
    border-radius: 15px;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,UAAU;IACV,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,SAAS;IACT,YAAY;IACZ,UAAU;IACV,YAAY;;IAEZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;;IAEvB,mBAAmB;IACnB,YAAY;;IAEZ,mBAAmB;;IAEnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,qCAAqC;IACrC,kCAAkC;IAClC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,WAAW;IACX,YAAY;;IAEZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;AACvB","sourcesContent":["body, html{\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n}\n\n.fullPage{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: white;\n}\n\n.main{\n    background-color: black;\n    display: flex;\n    flex-direction: row;\n    flex: auto;\n}\n\n.projectHolder{\n    display: grid;\n    grid-template-rows: repeat(10, 75px);\n    gap: 20px;\n    height: 100%;\n    width: 15%;\n    padding: 5px;\n\n    background-color: black;\n}\n\n.projectCard{\n    display: flex;\n    justify-content: center;\n   \n    align-items: center;\n    padding: 5px;\n  \n    border-radius: 10px;\n\n    background-color: white;\n}\n\n#projectTitle{\n    font-size: 2rem;\n}\n\n.taskHolder{\n    display: grid;\n    width: 100%;\n    padding: 8px;\n    gap: 8px;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    background-color: white;\n}\n\n.taskForm{\n    display: flex;\n    flex-direction: column;\n\n    width: auto;\n    height: auto;\n\n    color: white;\n    background-color: blue;\n}\n\n.taskCard{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 4px;\n    background-color: orange;\n    border-radius: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskDisplayController: () => (/* binding */ taskDisplayController)
/* harmony export */ });
/* harmony import */ var _taskModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModifier */ "./src/taskModifier.js");


const taskDisplayController = () => {
  const taskHolder = document.querySelector(".taskHolder");
  const myNewList = (0,_taskModifier__WEBPACK_IMPORTED_MODULE_0__.addToList)();

  const taskDisplayer = (input) => {
    const currentDisplayProject = input;
    taskHolder.innerHTML = "";
    let list = myNewList.getTaskList(input);
    console.log(list);
    list.forEach((taskObj) => {
      const taskPosition = list.indexOf(taskObj);
      const taskCard = document.createElement("div");
      taskCard.classList.toggle("taskCard");
      taskHolder.append(taskCard);

      const taskInfoTitle = document.createElement("p");
      taskInfoTitle.dataset.task = 0;
      taskInfoTitle.textContent = Object.values(taskObj)[0];
      taskCard.append(taskInfoTitle);

      const taskInfoDueDate = document.createElement("p");
      taskInfoDueDate.dataset.task = 2;
      taskInfoDueDate.textContent = Object.values(taskObj)[2];
      taskCard.append(taskInfoDueDate);

      const taskPriority = Object.values(taskObj)[3];
      if (taskPriority === "High") {
        taskCard.setAttribute("style", "border-right: 5px solid red");
      } else if (taskPriority === "Medium") {
        taskCard.setAttribute("style", "border-right: 5px solid blue");
      } else {
        taskCard.setAttribute("style", "border-right: 5px solid green");
      }

      const showMoreBtn = document.createElement("button");
      showMoreBtn.classList.toggle("showMoreButton");
      showMoreBtn.dataset.showMore = taskPosition;
      showMoreBtn.textContent = "Show More";
      taskCard.append(showMoreBtn);
      showMoreBtn.addEventListener("click", () => {
        const taskModal = document.querySelector(".taskDisplayModal");
        taskModal.showModal();
        const taskTitle = document.querySelector(".taskTitle");
        taskTitle.textContent = Object.values(taskObj)[0];
        const taskDescription = document.querySelector(".taskDescription");
        taskDescription.textContent = Object.values(taskObj)[1];
        const taskDueDate = document.querySelector(".taskDueDate");
        taskDueDate.textContent = Object.values(taskObj)[2];
        const taskNotes = document.querySelector(".taskNotes");
        taskNotes.textContent = Object.values(taskObj)[4];

        const removeBtn = document.querySelector(".removeBook");
        removeBtn.dataset.remove = taskPosition;
        removeBtn.addEventListener("click", removeTaskHandler);
      });
    });
    const addNewTask = document.createElement("button");
    addNewTask.textContent = "Add Task";
    addNewTask.classList.toggle("newTaskButton");
    addNewTask.dataset.project = input;
    taskHolder.append(addNewTask);
    addNewTask.addEventListener("click", addNewTaskHandler);
    return { currentDisplayProject };
  };

  const taskFormModal = document.querySelector(".taskFormHolder");
  const addNewTaskHandler = () => {
    taskFormModal.showModal();
  };
  const taskForm = document.forms["task-form"];
  const taskFormHandler = (event) => {
    event.preventDefault();
    let taskFormData = {
      title: taskForm.elements["userTitle"].value,
      description: taskForm.elements["userDescription"].value,
      dueDate: taskForm.elements["userDueDate"].value,
      priority: taskForm.elements["userPriority"].value,
      notes: taskForm.elements["userNotes"].value,
    };
    const addNewTask = document.querySelector(".newTaskButton");
    let project = addNewTask.dataset.project;

    myNewList.addTaskToProject(taskFormData, project);
    taskForm.reset();
    taskFormModal.close();
    localStorage.setItem("Projects", JSON.stringify(myNewList.getProject()));
    console.log(JSON.stringify(myNewList.getProject()));
    taskDisplayer(project);
  };
  function removeTaskHandler() {
    const taskModal = document.querySelector(".taskDisplayModal");
    const addNewTask = document.querySelector(".newTaskButton");
    let projectPosition = addNewTask.dataset.project;
    let taskPosition = this.dataset.remove;
    console.log(taskPosition);
    myNewList.removeTaskFromProject(taskPosition, projectPosition);
    taskModal.close();
    localStorage.setItem("Projects", JSON.stringify(myNewList.getProject()));
    console.log(JSON.stringify(myNewList.getProject()));
    taskDisplayer(projectPosition);
  }

  taskForm.addEventListener("submit", taskFormHandler);

  return { myNewList, taskDisplayer, getProject: myNewList.getProject };
};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }
}

const projects = () => {
  const projectList = [
    {
      name: "default",
      list: [],
    },
  ];
  const getProject = () => projectList;
  const getProjectList = (index) => projectList[index].list; ///<<<<<
  const getAllLists = () => {
    let result = [];
    projectList.forEach(function (obj) {
      result.push(obj.list);
    });
    return result;
  };

  const getProjectNames = () => {
    let result = [];
    projectList.forEach(function (obj) {
      result.push(obj.name);
    });
    return result;
  };

  return { getProjectList, getAllLists, getProjectNames, getProject };
};




/***/ }),

/***/ "./src/projectDisplay.js":
/*!*******************************!*\
  !*** ./src/projectDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDisplayHandler: () => (/* binding */ ProjectDisplayHandler)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




const ProjectDisplayHandler = () => {
  const projectHolder = document.querySelector(".projectHolder");
  const taskDisplay = (0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__.taskDisplayController)();
  const myNewList = taskDisplay.myNewList;

  let checklocalStorage;
  const checkStorage = () => {
    if ((0,_storage__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage")) {
      return (checklocalStorage = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getFromStorage)());
    } else return;
  };
  checkStorage();
  if (checklocalStorage !== null) {
    myNewList
      .getProject()
      .splice(0, myNewList.getProject().length, ...checklocalStorage);
  }

  console;

  const projectUpdateScreen = () => {
    let projectList = myNewList.getProjectNames();
    console.log(projectList);
    projectHolder.innerHTML = "";
    projectList.forEach((projectObj) => {
      const projectCard = document.createElement("div");
      projectCard.classList.toggle("projectCard");
      let projectPosition = projectList.indexOf(projectObj);
      projectCard.dataset.index = projectPosition;
      projectHolder.append(projectCard);

      const ProjectName = document.createElement("p");
      ProjectName.textContent = projectObj;
      ProjectName.setAttribute("id", "projectTitle");
      projectCard.append(ProjectName);
      projectCard.addEventListener("click", () => {
        taskDisplay.taskDisplayer(projectPosition);
      });
    });
    const addProjectButton = document.createElement("button");
    addProjectButton.classList.toggle("addProjectButton");
    addProjectButton.textContent = "Add New Project";
    projectHolder.append(addProjectButton);
    addProjectButton.addEventListener("click", addProjectHandler);
  };

  const addProjectHandler = () => {
    const name = prompt("What's the project name?");

    let projectFormData = {
      title: name,
    };
    myNewList.addProjectToList(projectFormData);
    localStorage.setItem("Projects", JSON.stringify(myNewList.getProject()));
    console.log(JSON.stringify(myNewList.getProject()));
    projectUpdateScreen();
  };

  return { projectUpdateScreen, myNewList };
};




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* binding */ getFromStorage),
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const getFromStorage = () => {
  const projects = localStorage.getItem("Projects");
  const projectObj = JSON.parse(projects);
  return projectObj;
};




/***/ }),

/***/ "./src/taskModifier.js":
/*!*****************************!*\
  !*** ./src/taskModifier.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToList: () => (/* binding */ addToList)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");




const addToList = () => {
  const newTaskList = (0,_project__WEBPACK_IMPORTED_MODULE_1__.projects)();

  const addTaskToProject = (inputTask, inputProject) => {
    let currentTask = inputTask;

    const title = Object.values(currentTask)[0];
    const description = Object.values(currentTask)[1];
    const dueDate = Object.values(currentTask)[2];
    const priority = Object.values(currentTask)[3];
    const notes = Object.values(currentTask)[4];
    const task = new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority, notes);
    newTaskList.getProjectList(inputProject).push(task);
    console.log(newTaskList.getProjectList(inputProject)); //<<<<<<<<<
  };

  const addProjectToList = (input) => {
    let currentProject = input;
    const title = Object.values(currentProject)[0];
    const project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(title);
    newTaskList.getProject().push(project);
    console.log(newTaskList.getProject());
  };
  const removeTaskFromProject = (inputTaskIndex, inputProjectIndex) => {
    newTaskList.getProjectList(inputProjectIndex).splice(inputTaskIndex, 1);
  };
  return {
    addTaskToProject,
    addProjectToList,
    removeTaskFromProject,
    getTaskList: newTaskList.getProjectList,
    getAllLists: newTaskList.getAllLists,
    getProjectNames: newTaskList.getProjectNames,
    getProject: newTaskList.getProject,
  };
};




/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _projectDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDisplay */ "./src/projectDisplay.js");
//import { addToList } from "./taskModifier";



const screenController = () => {
  //const projectHolder = document.querySelector(".projectHolder");

  const updateScreen = () => {
    let projectDisplay = (0,_projectDisplay__WEBPACK_IMPORTED_MODULE_1__.ProjectDisplayHandler)();
    projectDisplay.projectUpdateScreen();
  };

  updateScreen();
};
screenController();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBLFdBQVcsWUFBWTtBQUNGO0FBQ29DOztBQUV6RDtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHNFQUFxQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza01vZGlmaWVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSwgaHRtbHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZnVsbFBhZ2V7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IGF1dG87XG59XG5cbi5wcm9qZWN0SG9sZGVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDc1cHgpO1xuICAgIGdhcDogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnByb2plY3RDYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jcHJvamVjdFRpdGxle1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhc2tIb2xkZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZ2FwOiA4cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGFza0Zvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi50YXNrQ2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTs7SUFFWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QixtQkFBbUI7SUFDbkIsWUFBWTs7SUFFWixtQkFBbUI7O0lBRW5CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0lBQ1IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixXQUFXO0lBQ1gsWUFBWTs7SUFFWixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksIGh0bWx7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmZ1bGxQYWdle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdEhvbGRlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDc1cHgpO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3RDYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvamVjdFRpdGxle1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50YXNrSG9sZGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrRm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGFza0NhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZFRvTGlzdCB9IGZyb20gXCIuL3Rhc2tNb2RpZmllclwiO1xuXG5jb25zdCB0YXNrRGlzcGxheUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tIb2xkZXJcIik7XG4gIGNvbnN0IG15TmV3TGlzdCA9IGFkZFRvTGlzdCgpO1xuXG4gIGNvbnN0IHRhc2tEaXNwbGF5ZXIgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50RGlzcGxheVByb2plY3QgPSBpbnB1dDtcbiAgICB0YXNrSG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IGxpc3QgPSBteU5ld0xpc3QuZ2V0VGFza0xpc3QoaW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgIGxpc3QuZm9yRWFjaCgodGFza09iaikgPT4ge1xuICAgICAgY29uc3QgdGFza1Bvc2l0aW9uID0gbGlzdC5pbmRleE9mKHRhc2tPYmopO1xuICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LnRvZ2dsZShcInRhc2tDYXJkXCIpO1xuICAgICAgdGFza0hvbGRlci5hcHBlbmQodGFza0NhcmQpO1xuXG4gICAgICBjb25zdCB0YXNrSW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0YXNrSW5mb1RpdGxlLmRhdGFzZXQudGFzayA9IDA7XG4gICAgICB0YXNrSW5mb1RpdGxlLnRleHRDb250ZW50ID0gT2JqZWN0LnZhbHVlcyh0YXNrT2JqKVswXTtcbiAgICAgIHRhc2tDYXJkLmFwcGVuZCh0YXNrSW5mb1RpdGxlKTtcblxuICAgICAgY29uc3QgdGFza0luZm9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0YXNrSW5mb0R1ZURhdGUuZGF0YXNldC50YXNrID0gMjtcbiAgICAgIHRhc2tJbmZvRHVlRGF0ZS50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXModGFza09iailbMl07XG4gICAgICB0YXNrQ2FyZC5hcHBlbmQodGFza0luZm9EdWVEYXRlKTtcblxuICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gT2JqZWN0LnZhbHVlcyh0YXNrT2JqKVszXTtcbiAgICAgIGlmICh0YXNrUHJpb3JpdHkgPT09IFwiSGlnaFwiKSB7XG4gICAgICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmVkXCIpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrUHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBibHVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBncmVlblwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hvd01vcmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc2hvd01vcmVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dNb3JlQnV0dG9uXCIpO1xuICAgICAgc2hvd01vcmVCdG4uZGF0YXNldC5zaG93TW9yZSA9IHRhc2tQb3NpdGlvbjtcbiAgICAgIHNob3dNb3JlQnRuLnRleHRDb250ZW50ID0gXCJTaG93IE1vcmVcIjtcbiAgICAgIHRhc2tDYXJkLmFwcGVuZChzaG93TW9yZUJ0bik7XG4gICAgICBzaG93TW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tEaXNwbGF5TW9kYWxcIik7XG4gICAgICAgIHRhc2tNb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrVGl0bGVcIik7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXModGFza09iailbMF07XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKHRhc2tPYmopWzFdO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0R1ZURhdGVcIik7XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gT2JqZWN0LnZhbHVlcyh0YXNrT2JqKVsyXTtcbiAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTm90ZXNcIik7XG4gICAgICAgIHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXModGFza09iailbNF07XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZW1vdmVCb29rXCIpO1xuICAgICAgICByZW1vdmVCdG4uZGF0YXNldC5yZW1vdmUgPSB0YXNrUG9zaXRpb247XG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFza0hhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgYWRkTmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkTmV3VGFzay50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGROZXdUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJuZXdUYXNrQnV0dG9uXCIpO1xuICAgIGFkZE5ld1Rhc2suZGF0YXNldC5wcm9qZWN0ID0gaW5wdXQ7XG4gICAgdGFza0hvbGRlci5hcHBlbmQoYWRkTmV3VGFzayk7XG4gICAgYWRkTmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3VGFza0hhbmRsZXIpO1xuICAgIHJldHVybiB7IGN1cnJlbnREaXNwbGF5UHJvamVjdCB9O1xuICB9O1xuXG4gIGNvbnN0IHRhc2tGb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtSG9sZGVyXCIpO1xuICBjb25zdCBhZGROZXdUYXNrSGFuZGxlciA9ICgpID0+IHtcbiAgICB0YXNrRm9ybU1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmZvcm1zW1widGFzay1mb3JtXCJdO1xuICBjb25zdCB0YXNrRm9ybUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0YXNrRm9ybURhdGEgPSB7XG4gICAgICB0aXRsZTogdGFza0Zvcm0uZWxlbWVudHNbXCJ1c2VyVGl0bGVcIl0udmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogdGFza0Zvcm0uZWxlbWVudHNbXCJ1c2VyRGVzY3JpcHRpb25cIl0udmFsdWUsXG4gICAgICBkdWVEYXRlOiB0YXNrRm9ybS5lbGVtZW50c1tcInVzZXJEdWVEYXRlXCJdLnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHRhc2tGb3JtLmVsZW1lbnRzW1widXNlclByaW9yaXR5XCJdLnZhbHVlLFxuICAgICAgbm90ZXM6IHRhc2tGb3JtLmVsZW1lbnRzW1widXNlck5vdGVzXCJdLnZhbHVlLFxuICAgIH07XG4gICAgY29uc3QgYWRkTmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VGFza0J1dHRvblwiKTtcbiAgICBsZXQgcHJvamVjdCA9IGFkZE5ld1Rhc2suZGF0YXNldC5wcm9qZWN0O1xuXG4gICAgbXlOZXdMaXN0LmFkZFRhc2tUb1Byb2plY3QodGFza0Zvcm1EYXRhLCBwcm9qZWN0KTtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIHRhc2tGb3JtTW9kYWwuY2xvc2UoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15TmV3TGlzdC5nZXRQcm9qZWN0KCkpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShteU5ld0xpc3QuZ2V0UHJvamVjdCgpKSk7XG4gICAgdGFza0Rpc3BsYXllcihwcm9qZWN0KTtcbiAgfTtcbiAgZnVuY3Rpb24gcmVtb3ZlVGFza0hhbmRsZXIoKSB7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRGlzcGxheU1vZGFsXCIpO1xuICAgIGNvbnN0IGFkZE5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tCdXR0b25cIik7XG4gICAgbGV0IHByb2plY3RQb3NpdGlvbiA9IGFkZE5ld1Rhc2suZGF0YXNldC5wcm9qZWN0O1xuICAgIGxldCB0YXNrUG9zaXRpb24gPSB0aGlzLmRhdGFzZXQucmVtb3ZlO1xuICAgIGNvbnNvbGUubG9nKHRhc2tQb3NpdGlvbik7XG4gICAgbXlOZXdMaXN0LnJlbW92ZVRhc2tGcm9tUHJvamVjdCh0YXNrUG9zaXRpb24sIHByb2plY3RQb3NpdGlvbik7XG4gICAgdGFza01vZGFsLmNsb3NlKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteU5ld0xpc3QuZ2V0UHJvamVjdCgpKSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobXlOZXdMaXN0LmdldFByb2plY3QoKSkpO1xuICAgIHRhc2tEaXNwbGF5ZXIocHJvamVjdFBvc2l0aW9uKTtcbiAgfVxuXG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGFza0Zvcm1IYW5kbGVyKTtcblxuICByZXR1cm4geyBteU5ld0xpc3QsIHRhc2tEaXNwbGF5ZXIsIGdldFByb2plY3Q6IG15TmV3TGlzdC5nZXRQcm9qZWN0IH07XG59O1xuXG5leHBvcnQgeyB0YXNrRGlzcGxheUNvbnRyb2xsZXIgfTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxufVxuXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJkZWZhdWx0XCIsXG4gICAgICBsaXN0OiBbXSxcbiAgICB9LFxuICBdO1xuICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4gcHJvamVjdExpc3Q7XG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKGluZGV4KSA9PiBwcm9qZWN0TGlzdFtpbmRleF0ubGlzdDsgLy8vPDw8PDxcbiAgY29uc3QgZ2V0QWxsTGlzdHMgPSAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmVzdWx0LnB1c2gob2JqLmxpc3QpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdE5hbWVzID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJlc3VsdC5wdXNoKG9iai5uYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiB7IGdldFByb2plY3RMaXN0LCBnZXRBbGxMaXN0cywgZ2V0UHJvamVjdE5hbWVzLCBnZXRQcm9qZWN0IH07XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgdGFza0Rpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XG5pbXBvcnQgeyBnZXRGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IFByb2plY3REaXNwbGF5SGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEhvbGRlclwiKTtcbiAgY29uc3QgdGFza0Rpc3BsYXkgPSB0YXNrRGlzcGxheUNvbnRyb2xsZXIoKTtcbiAgY29uc3QgbXlOZXdMaXN0ID0gdGFza0Rpc3BsYXkubXlOZXdMaXN0O1xuXG4gIGxldCBjaGVja2xvY2FsU3RvcmFnZTtcbiAgY29uc3QgY2hlY2tTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICByZXR1cm4gKGNoZWNrbG9jYWxTdG9yYWdlID0gZ2V0RnJvbVN0b3JhZ2UoKSk7XG4gICAgfSBlbHNlIHJldHVybjtcbiAgfTtcbiAgY2hlY2tTdG9yYWdlKCk7XG4gIGlmIChjaGVja2xvY2FsU3RvcmFnZSAhPT0gbnVsbCkge1xuICAgIG15TmV3TGlzdFxuICAgICAgLmdldFByb2plY3QoKVxuICAgICAgLnNwbGljZSgwLCBteU5ld0xpc3QuZ2V0UHJvamVjdCgpLmxlbmd0aCwgLi4uY2hlY2tsb2NhbFN0b3JhZ2UpO1xuICB9XG5cbiAgY29uc29sZTtcblxuICBjb25zdCBwcm9qZWN0VXBkYXRlU2NyZWVuID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IG15TmV3TGlzdC5nZXRQcm9qZWN0TmFtZXMoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgcHJvamVjdEhvbGRlci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3RPYmopID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0Q2FyZFwiKTtcbiAgICAgIGxldCBwcm9qZWN0UG9zaXRpb24gPSBwcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3RPYmopO1xuICAgICAgcHJvamVjdENhcmQuZGF0YXNldC5pbmRleCA9IHByb2plY3RQb3NpdGlvbjtcbiAgICAgIHByb2plY3RIb2xkZXIuYXBwZW5kKHByb2plY3RDYXJkKTtcblxuICAgICAgY29uc3QgUHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIFByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE9iajtcbiAgICAgIFByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFRpdGxlXCIpO1xuICAgICAgcHJvamVjdENhcmQuYXBwZW5kKFByb2plY3ROYW1lKTtcbiAgICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEaXNwbGF5LnRhc2tEaXNwbGF5ZXIocHJvamVjdFBvc2l0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFkZFByb2plY3RCdXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBQcm9qZWN0XCI7XG4gICAgcHJvamVjdEhvbGRlci5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdEhhbmRsZXIpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJXaGF0J3MgdGhlIHByb2plY3QgbmFtZT9cIik7XG5cbiAgICBsZXQgcHJvamVjdEZvcm1EYXRhID0ge1xuICAgICAgdGl0bGU6IG5hbWUsXG4gICAgfTtcbiAgICBteU5ld0xpc3QuYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0Rm9ybURhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlOZXdMaXN0LmdldFByb2plY3QoKSkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG15TmV3TGlzdC5nZXRQcm9qZWN0KCkpKTtcbiAgICBwcm9qZWN0VXBkYXRlU2NyZWVuKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcHJvamVjdFVwZGF0ZVNjcmVlbiwgbXlOZXdMaXN0IH07XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0RGlzcGxheUhhbmRsZXIgfTtcbiIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBnZXRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0T2JqID0gSlNPTi5wYXJzZShwcm9qZWN0cyk7XG4gIHJldHVybiBwcm9qZWN0T2JqO1xufTtcblxuZXhwb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSwgZ2V0RnJvbVN0b3JhZ2UgfTtcbiIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBhZGRUb0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2tMaXN0ID0gcHJvamVjdHMoKTtcblxuICBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKGlucHV0VGFzaywgaW5wdXRQcm9qZWN0KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRUYXNrID0gaW5wdXRUYXNrO1xuXG4gICAgY29uc3QgdGl0bGUgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRUYXNrKVswXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IE9iamVjdC52YWx1ZXMoY3VycmVudFRhc2spWzFdO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRUYXNrKVsyXTtcbiAgICBjb25zdCBwcmlvcml0eSA9IE9iamVjdC52YWx1ZXMoY3VycmVudFRhc2spWzNdO1xuICAgIGNvbnN0IG5vdGVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50VGFzaylbNF07XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICBuZXdUYXNrTGlzdC5nZXRQcm9qZWN0TGlzdChpbnB1dFByb2plY3QpLnB1c2godGFzayk7XG4gICAgY29uc29sZS5sb2cobmV3VGFza0xpc3QuZ2V0UHJvamVjdExpc3QoaW5wdXRQcm9qZWN0KSk7IC8vPDw8PDw8PDw8XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdFRvTGlzdCA9IChpbnB1dCkgPT4ge1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGlucHV0O1xuICAgIGNvbnN0IHRpdGxlID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50UHJvamVjdClbMF07XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICBuZXdUYXNrTGlzdC5nZXRQcm9qZWN0KCkucHVzaChwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhuZXdUYXNrTGlzdC5nZXRQcm9qZWN0KCkpO1xuICB9O1xuICBjb25zdCByZW1vdmVUYXNrRnJvbVByb2plY3QgPSAoaW5wdXRUYXNrSW5kZXgsIGlucHV0UHJvamVjdEluZGV4KSA9PiB7XG4gICAgbmV3VGFza0xpc3QuZ2V0UHJvamVjdExpc3QoaW5wdXRQcm9qZWN0SW5kZXgpLnNwbGljZShpbnB1dFRhc2tJbmRleCwgMSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgYWRkVGFza1RvUHJvamVjdCxcbiAgICBhZGRQcm9qZWN0VG9MaXN0LFxuICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdCxcbiAgICBnZXRUYXNrTGlzdDogbmV3VGFza0xpc3QuZ2V0UHJvamVjdExpc3QsXG4gICAgZ2V0QWxsTGlzdHM6IG5ld1Rhc2tMaXN0LmdldEFsbExpc3RzLFxuICAgIGdldFByb2plY3ROYW1lczogbmV3VGFza0xpc3QuZ2V0UHJvamVjdE5hbWVzLFxuICAgIGdldFByb2plY3Q6IG5ld1Rhc2tMaXN0LmdldFByb2plY3QsXG4gIH07XG59O1xuXG5leHBvcnQgeyBhZGRUb0xpc3QgfTtcbiIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmV4cG9ydCB7IFRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vaW1wb3J0IHsgYWRkVG9MaXN0IH0gZnJvbSBcIi4vdGFza01vZGlmaWVyXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgUHJvamVjdERpc3BsYXlIYW5kbGVyIH0gZnJvbSBcIi4vcHJvamVjdERpc3BsYXlcIjtcblxuY29uc3Qgc2NyZWVuQ29udHJvbGxlciA9ICgpID0+IHtcbiAgLy9jb25zdCBwcm9qZWN0SG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SG9sZGVyXCIpO1xuXG4gIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdERpc3BsYXkgPSBQcm9qZWN0RGlzcGxheUhhbmRsZXIoKTtcbiAgICBwcm9qZWN0RGlzcGxheS5wcm9qZWN0VXBkYXRlU2NyZWVuKCk7XG4gIH07XG5cbiAgdXBkYXRlU2NyZWVuKCk7XG59O1xuc2NyZWVuQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
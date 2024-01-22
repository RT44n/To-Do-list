/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  const getProjectList = (index) => projectList[index].list;
  return { getProjectList };
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



const addToList = () => {
  const newTaskList = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)();

  const addTaskToProject = (inputTask, inputProject) => {
    let currentTask = inputTask;

    const title = Object.values(currentTask)[0];
    const description = Object.values(currentTask)[1];
    const dueDate = Object.values(currentTask)[2];
    const priority = Object.values(currentTask)[3];
    const notes = Object.values(currentTask)[4];
    const task = new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority, notes);
    newTaskList.getTaskList(inputProject).push(task);
  };
  return {
    addTaskToProject,
    getTaskList: newTaskList.getTaskList,
    allTasks: newTaskList.allTasks,
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
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


class Task {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

const createTask = () => {
  let taskList = (0,_project__WEBPACK_IMPORTED_MODULE_0__.projects)();
  const getTaskList = (index) => taskList.getProjectList(index);

  return { getTaskList };
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModifier */ "./src/taskModifier.js");


const screenController = () => {
  const myNewList = (0,_taskModifier__WEBPACK_IMPORTED_MODULE_0__.addToList)();

  const clickHandlerBoard = () => {
    let userTitle = prompt("What's the title?");
    let userDescription = prompt("What's the description?");
    let userDueDate = prompt("What's the due date?");
    let userPriority = prompt("What's the priority?");
    let userNotes = prompt("Any notes?");
    let userProject = prompt("Default");

    let taskObj = {
      title: userTitle,
      description: userDescription,
      dueDate: userDueDate,
      priority: userPriority,
      notes: userNotes,
    };
    let project = parseInt(userProject);

    myNewList.addTaskToProject(taskObj, project);

    console.log(myNewList.getTaskList());
  };

  const addButton = document.createElement("button");
  document.body.append(addButton);
  addButton.textContent = "Add Task";
  addButton.addEventListener("click", clickHandlerBoard);
};

screenController();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJFO0FBQ007O0FBRXJDO0FBQ0Esc0JBQXNCLGtEQUFVOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0NBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJnQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtEQUFRO0FBQ3pCOztBQUVBLFdBQVc7QUFDWDs7QUFFNEI7Ozs7Ozs7VUNuQjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkM7O0FBRTNDO0FBQ0Esb0JBQW9CLHdEQUFTOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tNb2RpZmllci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxufVxuXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJkZWZhdWx0XCIsXG4gICAgICBsaXN0OiBbXSxcbiAgICB9LFxuICBdO1xuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9IChpbmRleCkgPT4gcHJvamVjdExpc3RbaW5kZXhdLmxpc3Q7XG4gIHJldHVybiB7IGdldFByb2plY3RMaXN0IH07XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgYWRkVG9MaXN0ID0gKCkgPT4ge1xuICBjb25zdCBuZXdUYXNrTGlzdCA9IGNyZWF0ZVRhc2soKTtcblxuICBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKGlucHV0VGFzaywgaW5wdXRQcm9qZWN0KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRUYXNrID0gaW5wdXRUYXNrO1xuXG4gICAgY29uc3QgdGl0bGUgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRUYXNrKVswXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IE9iamVjdC52YWx1ZXMoY3VycmVudFRhc2spWzFdO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRUYXNrKVsyXTtcbiAgICBjb25zdCBwcmlvcml0eSA9IE9iamVjdC52YWx1ZXMoY3VycmVudFRhc2spWzNdO1xuICAgIGNvbnN0IG5vdGVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50VGFzaylbNF07XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICBuZXdUYXNrTGlzdC5nZXRUYXNrTGlzdChpbnB1dFByb2plY3QpLnB1c2godGFzayk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgYWRkVGFza1RvUHJvamVjdCxcbiAgICBnZXRUYXNrTGlzdDogbmV3VGFza0xpc3QuZ2V0VGFza0xpc3QsXG4gICAgYWxsVGFza3M6IG5ld1Rhc2tMaXN0LmFsbFRhc2tzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgYWRkVG9MaXN0IH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgbGV0IHRhc2tMaXN0ID0gcHJvamVjdHMoKTtcbiAgY29uc3QgZ2V0VGFza0xpc3QgPSAoaW5kZXgpID0+IHRhc2tMaXN0LmdldFByb2plY3RMaXN0KGluZGV4KTtcblxuICByZXR1cm4geyBnZXRUYXNrTGlzdCB9O1xufTtcblxuZXhwb3J0IHsgVGFzaywgY3JlYXRlVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRUb0xpc3QgfSBmcm9tIFwiLi90YXNrTW9kaWZpZXJcIjtcblxuY29uc3Qgc2NyZWVuQ29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgbXlOZXdMaXN0ID0gYWRkVG9MaXN0KCk7XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IHVzZXJUaXRsZSA9IHByb21wdChcIldoYXQncyB0aGUgdGl0bGU/XCIpO1xuICAgIGxldCB1c2VyRGVzY3JpcHRpb24gPSBwcm9tcHQoXCJXaGF0J3MgdGhlIGRlc2NyaXB0aW9uP1wiKTtcbiAgICBsZXQgdXNlckR1ZURhdGUgPSBwcm9tcHQoXCJXaGF0J3MgdGhlIGR1ZSBkYXRlP1wiKTtcbiAgICBsZXQgdXNlclByaW9yaXR5ID0gcHJvbXB0KFwiV2hhdCdzIHRoZSBwcmlvcml0eT9cIik7XG4gICAgbGV0IHVzZXJOb3RlcyA9IHByb21wdChcIkFueSBub3Rlcz9cIik7XG4gICAgbGV0IHVzZXJQcm9qZWN0ID0gcHJvbXB0KFwiRGVmYXVsdFwiKTtcblxuICAgIGxldCB0YXNrT2JqID0ge1xuICAgICAgdGl0bGU6IHVzZXJUaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB1c2VyRGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlOiB1c2VyRHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5OiB1c2VyUHJpb3JpdHksXG4gICAgICBub3RlczogdXNlck5vdGVzLFxuICAgIH07XG4gICAgbGV0IHByb2plY3QgPSBwYXJzZUludCh1c2VyUHJvamVjdCk7XG5cbiAgICBteU5ld0xpc3QuYWRkVGFza1RvUHJvamVjdCh0YXNrT2JqLCBwcm9qZWN0KTtcblxuICAgIGNvbnNvbGUubG9nKG15TmV3TGlzdC5nZXRUYXNrTGlzdCgpKTtcbiAgfTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChhZGRCdXR0b24pO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyQm9hcmQpO1xufTtcblxuc2NyZWVuQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
  const getProjectList = (index) => projectList[index].list; ///<<<<<
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
    newTaskList.getTaskList(inputProject).push(task); //<<<<<<<<<
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
  const getTaskList = (index) => taskList.getProjectList(index); // <<<<<<<<

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

    myNewList.addTaskToProject(taskObj, project); //<<<<<<<<<<<<

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNkRBQTZEO0FBQzdELFdBQVc7QUFDWDs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkU7QUFDTTs7QUFFckM7QUFDQSxzQkFBc0Isa0RBQVU7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3Q0FBSTtBQUN6QixzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZ0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrREFBUTtBQUN6QixpRUFBaUU7O0FBRWpFLFdBQVc7QUFDWDs7QUFFNEI7Ozs7Ozs7VUNuQjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkM7O0FBRTNDO0FBQ0Esb0JBQW9CLHdEQUFTOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza01vZGlmaWVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICB9XG59XG5cbmNvbnN0IHByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImRlZmF1bHRcIixcbiAgICAgIGxpc3Q6IFtdLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKGluZGV4KSA9PiBwcm9qZWN0TGlzdFtpbmRleF0ubGlzdDsgLy8vPDw8PDxcbiAgcmV0dXJuIHsgZ2V0UHJvamVjdExpc3QgfTtcbn07XG5cbmV4cG9ydCB7IFByb2plY3QsIHByb2plY3RzIH07XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBhZGRUb0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2tMaXN0ID0gY3JlYXRlVGFzaygpO1xuXG4gIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAoaW5wdXRUYXNrLCBpbnB1dFByb2plY3QpID0+IHtcbiAgICBsZXQgY3VycmVudFRhc2sgPSBpbnB1dFRhc2s7XG5cbiAgICBjb25zdCB0aXRsZSA9IE9iamVjdC52YWx1ZXMoY3VycmVudFRhc2spWzBdO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50VGFzaylbMV07XG4gICAgY29uc3QgZHVlRGF0ZSA9IE9iamVjdC52YWx1ZXMoY3VycmVudFRhc2spWzJdO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50VGFzaylbM107XG4gICAgY29uc3Qgbm90ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRUYXNrKVs0XTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuICAgIG5ld1Rhc2tMaXN0LmdldFRhc2tMaXN0KGlucHV0UHJvamVjdCkucHVzaCh0YXNrKTsgLy88PDw8PDw8PDxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrVG9Qcm9qZWN0LFxuICAgIGdldFRhc2tMaXN0OiBuZXdUYXNrTGlzdC5nZXRUYXNrTGlzdCxcbiAgICBhbGxUYXNrczogbmV3VGFza0xpc3QuYWxsVGFza3MsXG4gIH07XG59O1xuXG5leHBvcnQgeyBhZGRUb0xpc3QgfTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVUYXNrID0gKCkgPT4ge1xuICBsZXQgdGFza0xpc3QgPSBwcm9qZWN0cygpO1xuICBjb25zdCBnZXRUYXNrTGlzdCA9IChpbmRleCkgPT4gdGFza0xpc3QuZ2V0UHJvamVjdExpc3QoaW5kZXgpOyAvLyA8PDw8PDw8PFxuXG4gIHJldHVybiB7IGdldFRhc2tMaXN0IH07XG59O1xuXG5leHBvcnQgeyBUYXNrLCBjcmVhdGVUYXNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFRvTGlzdCB9IGZyb20gXCIuL3Rhc2tNb2RpZmllclwiO1xuXG5jb25zdCBzY3JlZW5Db250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBteU5ld0xpc3QgPSBhZGRUb0xpc3QoKTtcblxuICBjb25zdCBjbGlja0hhbmRsZXJCb2FyZCA9ICgpID0+IHtcbiAgICBsZXQgdXNlclRpdGxlID0gcHJvbXB0KFwiV2hhdCdzIHRoZSB0aXRsZT9cIik7XG4gICAgbGV0IHVzZXJEZXNjcmlwdGlvbiA9IHByb21wdChcIldoYXQncyB0aGUgZGVzY3JpcHRpb24/XCIpO1xuICAgIGxldCB1c2VyRHVlRGF0ZSA9IHByb21wdChcIldoYXQncyB0aGUgZHVlIGRhdGU/XCIpO1xuICAgIGxldCB1c2VyUHJpb3JpdHkgPSBwcm9tcHQoXCJXaGF0J3MgdGhlIHByaW9yaXR5P1wiKTtcbiAgICBsZXQgdXNlck5vdGVzID0gcHJvbXB0KFwiQW55IG5vdGVzP1wiKTtcbiAgICBsZXQgdXNlclByb2plY3QgPSBwcm9tcHQoXCJEZWZhdWx0XCIpO1xuXG4gICAgbGV0IHRhc2tPYmogPSB7XG4gICAgICB0aXRsZTogdXNlclRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHVzZXJEZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IHVzZXJEdWVEYXRlLFxuICAgICAgcHJpb3JpdHk6IHVzZXJQcmlvcml0eSxcbiAgICAgIG5vdGVzOiB1c2VyTm90ZXMsXG4gICAgfTtcbiAgICBsZXQgcHJvamVjdCA9IHBhcnNlSW50KHVzZXJQcm9qZWN0KTtcblxuICAgIG15TmV3TGlzdC5hZGRUYXNrVG9Qcm9qZWN0KHRhc2tPYmosIHByb2plY3QpOyAvLzw8PDw8PDw8PDw8PFxuXG4gICAgY29uc29sZS5sb2cobXlOZXdMaXN0LmdldFRhc2tMaXN0KCkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGFkZEJ1dHRvbik7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXJCb2FyZCk7XG59O1xuXG5zY3JlZW5Db250cm9sbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
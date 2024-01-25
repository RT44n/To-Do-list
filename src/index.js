import { addToList } from "./taskModifier";
import "./index.css";
import { ProjectDisplayHandler } from "./projectDisplay";

const screenController = () => {
  const myNewList = addToList();
  const taskForm = document.forms["task-form"];
  //const projectHolder = document.querySelector(".projectHolder");

  const updateScreen = () => {
    let projectDisplay = ProjectDisplayHandler();
    projectDisplay.projectUpdateScreen();
  };

  const clickHandlerBoard = (event) => {
    event.preventDefault();
    let taskFormData = {
      title: taskForm.elements["userTitle"].value,
      description: taskForm.elements["userDescription"].value,
      dueDate: taskForm.elements["userDueDate"].value,
      priority: taskForm.elements["userPriority"].value,
      notes: taskForm.elements["userNotes"].value,
    };

    let project = parseInt("0");

    myNewList.addTaskToProject(taskFormData, project);
    taskForm.reset();
    updateScreen();
    myNewList.getAllLists(); //<<<<<<<<<<<<
  };

  taskForm.addEventListener("submit", clickHandlerBoard);
  updateScreen();
};
screenController();

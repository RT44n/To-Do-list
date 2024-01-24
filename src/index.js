import { addToList } from "./taskModifier";
import "./index.css";
import { ProjectDisplayHandler } from "./projectDisplay";

const screenController = () => {
  const myNewList = addToList();
  const taskForm = document.forms["task-form"];
  const projectHolder = document.querySelector(".projectHolder");

  const updateScreen = () => {
    ProjectDisplayHandler();
    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add New Project";
    projectHolder.append(addProjectButton);
    addProjectButton.addEventListener("click", addProjectHandler);
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
  const addProjectHandler = () => {
    const name = prompt("What's the project name?");

    let projectFormData = {
      title: name,
    };
    myNewList.addProjectToList(projectFormData);
    updateScreen();
  };
  taskForm.addEventListener("submit", clickHandlerBoard);
  updateScreen();
};
screenController();

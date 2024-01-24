import { addToList } from "./taskModifier";
import "./index.css";

const screenController = () => {
  const myNewList = addToList();
  //const taskForm = document.forms["task-form"];
  const taskHolder = document.querySelector(".taskHolder");
  const projectHolder = document.querySelector(".projectHolder");

  const updateScreen = () => {
    taskHolder.textContent = "";

    console.log(myNewList.getAllLists());

    let list = myNewList.getAllLists();
    console.log(list);
    list.forEach((taskarray) => {
      taskarray.forEach((taskObj) => {
        const taskCard = document.createElement("div");
        taskCard.classList.toggle("taskCard");
        taskHolder.append(taskCard);

        for (let i = 0; i < 5; i++) {
          const taskInfo = document.createElement("p");
          taskInfo.dataset.task = i;
          taskInfo.textContent =
            Object.keys(taskObj)[i] + " - " + Object.values(taskObj)[i];
          taskCard.append(taskInfo);
        }
      });
    });
    const addNewTask = document.createElement("button");
    addNewTask.textContent = "Add Task";
    addNewTask.classList.toggle("newTaskButton");
    taskHolder.append(addNewTask);
    projectHolder.textContent = "";

    let projectList = myNewList.getProjectNames();
    console.log(projectList);
    projectList.forEach((projectObj) => {
      const projectCard = document.createElement("div");
      projectCard.classList.toggle("projectCard");
      projectCard.dataset.index = projectList.indexOf(projectObj);
      projectHolder.append(projectCard);

      const ProjectName = document.createElement("p");
      ProjectName.textContent = projectObj;
      ProjectName.setAttribute("id", "projectTitle");
      projectCard.append(ProjectName);
    });
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
  // taskForm.addEventListener("submit", clickHandlerBoard);
  updateScreen();
};
screenController();

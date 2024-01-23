import { addToList } from "./taskModifier";
import "./index.css";

const screenController = () => {
  const myNewList = addToList();
  const taskForm = document.forms["task-form"];
  const taskHolder = document.querySelector(".taskHolder");

  const updateScreen = () => {
    taskHolder.textContent = "";

    let list = [];
    list = myNewList.getAllLists();
    console.log(list);
    list.forEach((taskObj) => {
      const taskCard = document.createElement("div");
      taskCard.classList.toggle("taskCard");
      taskHolder.append(taskCard);

      for (let i = 0; i < 5; i++) {
        const taskInfo = document.createElement("p");
        taskInfo.dataset.task = i;
        taskInfo.textContent = Object.values(taskObj)[i];
        taskCard.append(taskInfo);
      }
    });
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
};
screenController();

import { addToList } from "./taskModifier";
import "./index.css";

const screenController = () => {
  const myNewList = addToList();
  const taskForm = document.forms["task-form"];
  const taskHolder = document.querySelector(".taskHolder");

  const updateScreen = () => {
    taskHolder.textContent = "";

    const list = myNewList.getTaskList();
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
    event.preventDefaut();
    let taskFormData = {
      title: this.userTitle.value,
      description: this.userDescription.value,
      dueDate: this.userDueDate.value,
      priority: this.userPriority.value,
      notes: this.userNotes.value,
    };

    let userProject = 0;

    let project = parseInt(userProject);

    myNewList.addTaskToProject(taskFormData, project);
    this.reset();
    updateScreen();
    myNewList.getAllLists(); //<<<<<<<<<<<<
  };
};
screenController();

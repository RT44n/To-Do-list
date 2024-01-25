import { addToList } from "./taskModifier";

const taskDisplayController = () => {
  const taskHolder = document.querySelector(".taskHolder");
  const myNewList = addToList();

  const taskDisplayer = (input) => {
    taskHolder.innerHTML = "";
    let list = myNewList.getTaskList(input);
    console.log(list);
    list.forEach((taskarray) => {
      const taskCard = document.createElement("div");
      taskCard.classList.toggle("taskCard");
      taskHolder.append(taskCard);

      for (let i = 0; i < 5; i++) {
        const taskInfo = document.createElement("p");
        taskInfo.dataset.task = i;
        taskInfo.textContent =
          Object.keys(taskarray)[i] + " - " + Object.values(taskarray)[i];
        taskCard.append(taskInfo);
      }
    });
    const addNewTask = document.createElement("button");
    addNewTask.textContent = "Add Task";
    addNewTask.classList.toggle("newTaskButton");
    taskHolder.append(addNewTask);
  };

  return { myNewList: addToList(), taskDisplayer };
};

export { taskDisplayController };

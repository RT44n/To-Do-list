import { addToList } from "./taskModifier";

const taskDisplayController = () => {
  const taskHolder = document.querySelector(".taskHolder");
  const myNewList = addToList();

  const taskDisplayer = (input) => {
    const currentDisplayProject = input;
    taskHolder.innerHTML = "";
    let list = myNewList.getTaskList(input);
    console.log(list);
    list.forEach((taskObj) => {
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
    taskDisplayer(project);
  };
  taskForm.addEventListener("submit", taskFormHandler);

  return { myNewList, taskDisplayer };
};

export { taskDisplayController };

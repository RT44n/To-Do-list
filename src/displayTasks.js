import { addToList } from "./taskModifier";

const taskDisplayController = () => {
  const taskHolder = document.querySelector(".taskHolder");
  const myNewList = addToList();

  const taskDisplayer = (input) => {
    const currentDisplayProject = input;
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
    console.log(addNewTask.dataset.project);

    let project = addNewTask.dataset.project;
    console.log(project);

    myNewList.addTaskToProject(taskFormData, project);
    taskForm.reset();
    taskFormModal.close();
  };
  taskForm.addEventListener("submit", taskFormHandler);

  return { myNewList, taskDisplayer };
};

export { taskDisplayController };

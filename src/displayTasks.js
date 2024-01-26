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
      const taskPosition = list.indexOf(taskObj);
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

      const showMoreBtn = document.createElement("button");
      showMoreBtn.classList.toggle("showMoreButton");
      showMoreBtn.dataset.showMore = taskPosition;
      showMoreBtn.textContent = "Show More";
      taskCard.append(showMoreBtn);
      showMoreBtn.addEventListener("click", () => {
        const taskModal = document.querySelector(".taskDisplayModal");
        taskModal.showModal();
        const taskTitle = document.querySelector(".taskTitle");
        taskTitle.textContent = Object.values(taskObj)[0];
        const taskDescription = document.querySelector(".taskDescription");
        taskDescription.textContent = Object.values(taskObj)[1];
        const taskDueDate = document.querySelector(".taskDueDate");
        taskDueDate.textContent = Object.values(taskObj)[2];
        const taskNotes = document.querySelector(".taskNotes");
        taskNotes.textContent = Object.values(taskObj)[4];

        const removeBtn = document.querySelector(".removeBook");
        removeBtn.dataset.remove = taskPosition;
        removeBtn.addEventListener("click", removeTaskHandler);
      });
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
    localStorage.setItem("Projects", JSON.stringify(myNewList.getProject()));
    console.log(JSON.stringify(myNewList.getProject()));
    taskDisplayer(project);
  };
  function removeTaskHandler() {
    const taskModal = document.querySelector(".taskDisplayModal");
    const addNewTask = document.querySelector(".newTaskButton");
    let projectPosition = addNewTask.dataset.project;
    let taskPosition = this.dataset.remove;
    console.log(taskPosition);
    myNewList.removeTaskFromProject(taskPosition, projectPosition);
    taskModal.close();
    localStorage.setItem("Projects", JSON.stringify(myNewList.getProject()));
    console.log(JSON.stringify(myNewList.getProject()));
    taskDisplayer(projectPosition);
  }

  taskForm.addEventListener("submit", taskFormHandler);

  return { myNewList, taskDisplayer, getProject: myNewList.getProject };
};

export { taskDisplayController };

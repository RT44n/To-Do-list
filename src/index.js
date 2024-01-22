import { addToList } from "./taskModifier";

const screenController = () => {
  const myNewList = addToList();

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

    myNewList.addTaskToProject(taskObj, project);
    console.log(myNewList.getAllLists()); //<<<<<<<<<<<<
  };

  const addButton = document.createElement("button");
  document.body.append(addButton);
  addButton.textContent = "Add Task";
  addButton.addEventListener("click", clickHandlerBoard);
};

screenController();

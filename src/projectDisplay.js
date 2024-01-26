import { taskDisplayController } from "./displayTasks";
import { getFromStorage } from "./storage";
import { storageAvailable } from "./storage";

const ProjectDisplayHandler = () => {
  const projectHolder = document.querySelector(".projectHolder");
  const taskDisplay = taskDisplayController();
  const myNewList = taskDisplay.myNewList;

  let checklocalStorage;
  const checkStorage = () => {
    if (storageAvailable("localStorage")) {
      return (checklocalStorage = getFromStorage());
    } else return;
  };
  checkStorage();
  if (checklocalStorage !== null) {
    myNewList
      .getProject()
      .splice(0, myNewList.getProject().length, ...checklocalStorage);
  }

  console;

  const projectUpdateScreen = () => {
    let projectList = myNewList.getProjectNames();
    console.log(projectList);
    projectHolder.innerHTML = "";
    projectList.forEach((projectObj) => {
      const projectCard = document.createElement("div");
      projectCard.classList.toggle("projectCard");
      let projectPosition = projectList.indexOf(projectObj);
      projectCard.dataset.index = projectPosition;
      projectHolder.append(projectCard);

      const ProjectName = document.createElement("p");
      ProjectName.textContent = projectObj;
      ProjectName.setAttribute("id", "projectTitle");
      projectCard.append(ProjectName);
      projectCard.addEventListener("click", () => {
        taskDisplay.taskDisplayer(projectPosition);
      });
    });
    const addProjectButton = document.createElement("button");
    addProjectButton.classList.toggle("addProjectButton");
    addProjectButton.textContent = "Add New Project";
    projectHolder.append(addProjectButton);
    addProjectButton.addEventListener("click", addProjectHandler);
  };

  const addProjectHandler = () => {
    const name = prompt("What's the project name?");

    let projectFormData = {
      title: name,
    };
    myNewList.addProjectToList(projectFormData);
    localStorage.setItem("Projects", JSON.stringify(myNewList.getProject()));
    console.log(JSON.stringify(myNewList.getProject()));
    projectUpdateScreen();
  };

  return { projectUpdateScreen, myNewList };
};

export { ProjectDisplayHandler };

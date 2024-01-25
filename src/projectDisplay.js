import { taskDisplayController } from "./displayTasks";

const ProjectDisplayHandler = () => {
  const projectHolder = document.querySelector(".projectHolder");
  const myNewList = taskDisplayController();
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
      myNewList.taskDisplayer(projectPosition);
    });
  });
};

export { ProjectDisplayHandler };

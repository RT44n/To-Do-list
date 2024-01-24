import { addToList } from "./taskModifier";
import { taskDisplayController } from "./displayTasks";

const ProjectDisplayHandler = () => {
  const projectHolder = document.querySelector(".projectHolder");
  const myNewList = addToList();
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
      taskDisplayController(projectPosition);
    });
  });
  return { myNewList: addToList() };
};

export { ProjectDisplayHandler };

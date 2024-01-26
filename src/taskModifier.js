import { Task } from "./tasks";
import { projects } from "./project";
import { Project } from "./project";

const addToList = () => {
  const newTaskList = projects();

  const addTaskToProject = (inputTask, inputProject) => {
    let currentTask = inputTask;

    const title = Object.values(currentTask)[0];
    const description = Object.values(currentTask)[1];
    const dueDate = Object.values(currentTask)[2];
    const priority = Object.values(currentTask)[3];
    const notes = Object.values(currentTask)[4];
    const task = new Task(title, description, dueDate, priority, notes);
    newTaskList.getProjectList(inputProject).push(task);
    console.log(newTaskList.getProjectList(inputProject)); //<<<<<<<<<
  };

  const addProjectToList = (input) => {
    let currentProject = input;
    const title = Object.values(currentProject)[0];
    const project = new Project(title);
    newTaskList.getProject().push(project);
    console.log(newTaskList.getProject());
  };
  const removeTaskFromProject = (inputTaskIndex, inputProjectIndex) => {
    newTaskList.getProjectList(inputProjectIndex).splice(inputTaskIndex, 1);
  };
  return {
    addTaskToProject,
    addProjectToList,
    removeTaskFromProject,
    getTaskList: newTaskList.getProjectList,
    getAllLists: newTaskList.getAllLists,
    getProjectNames: newTaskList.getProjectNames,
    getProject: newTaskList.getProject,
  };
};

export { addToList };

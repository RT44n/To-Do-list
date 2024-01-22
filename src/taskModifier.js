import { Task } from "./tasks";
import { projects } from "./project";

const addToList = () => {
  const newTaskList = projects();

  const addTaskToProject = (inputTask, inputIndex) => {
    let currentTask = inputTask;
    let currentProject = inputIndex;

    const title = Object.values(currentTask)[0];
    const description = Object.values(currentTask)[1];
    const dueDate = Object.values(currentTask)[2];
    const priority = Object.values(currentTask)[3];
    const notes = Object.values(currentTask)[4];
    const task = new Task(title, description, dueDate, priority, notes);
    newTaskList.getProjectList(currentProject).push(task); //<<<<<<<<<
  };
  return {
    addTaskToProject,
    getTaskList: newTaskList.getProjectList,
    getAllLists: newTaskList.getAllLists,
  };
};

export { addToList };

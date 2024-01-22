import { Task } from "./tasks";
import { createTask } from "./tasks";

const addToList = () => {
  const newTaskList = createTask();

  const addTask = (input) => {
    let currentTask = input;
    const title = Object.values(currentTask)[0];
    const description = Object.values(currentTask)[1];
    const dueDate = Object.values(currentTask)[2];
    const priority = Object.values(currentTask)[3];
    const notes = Object.values(currentTask)[4];
    const task = new Task(title, description, dueDate, priority, notes);
    newTaskList.getTaskList().push(task);
  };
  return { addTask, getTaskList: newTaskList.getTaskList };
};

export { addToList };

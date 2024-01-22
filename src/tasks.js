import { projects } from "./project";

class Task {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

const createTask = () => {
  let taskList = projects();
  const getTaskList = (index) => taskList.getProjectList(index); // <<<<<<<<

  return { getTaskList };
};

export { Task, createTask };

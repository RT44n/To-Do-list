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
  const taskList = [];
  const getTaskList = () => taskList;
  return { getTaskList };
};

export { Task, createTask };

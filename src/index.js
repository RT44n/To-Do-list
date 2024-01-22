class ToDo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

const createProject = (name) => {
  this.name = name;
  this.list = [];
};

const addToList = () => {
  const currentList = createList();

  const addToDo = (input) => {
    let getToDoList = input;
    const title = Object.values(getToDoList)[0];
    const description = Object.values(getToDoList)[1];
    const dueDate = Object.values(getToDoList)[2];
    const priority = Object.values(getToDoList)[3];
    const notes = Object.values(getToDoList)[4];
    const toDo = new ToDo(title, description, dueDate, priority, notes);
    currentList.getList().push(toDo);
  };
  return { addToDo, getList: currentList.getList };
};
const screenController = () => {
  const myNewList = addToList();

  const clickHandlerBoard = () => {
    let userTitle = prompt("What's the title?");
    let userDescription = prompt("What's the description?");
    let userDueDate = prompt("What's the due date?");
    let userPriority = prompt("What's the priority?");
    let userNotes = prompt("Any notes?");

    let todoObj = {
      title: userTitle,
      description: userDescription,
      dueDate: userDueDate,
      priority: userPriority,
      notes: userNotes,
    };

    myNewList.addToDo(todoObj);

    console.log(myNewList.getList());
  };

  const addButton = document.querySelector(".add");
  addButton.addEventListener("click", clickHandlerBoard);
};

screenController();

const addToProject = () => {
  const newProjectList = createProject();

  const addProject = (input) => {
    let currentProject = input;
    const title = Object.values(currentProject)[0];

    const project = new Project(title);
    newProjectList.getProjectList().push(project);
  };
  return { addProject, getProjectList: newProjectList.getProjectList };
};

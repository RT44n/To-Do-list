class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }
}

const projects = () => {
  const projectList = [
    {
      name: "default",
      list: [],
    },
  ];
  const getProjectList = (index) => projectList[index].list;
  return { getProjectList };
};

export { Project, projects };

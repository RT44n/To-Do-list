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
  const getProjectList = (index) => projectList[index].list; ///<<<<<
  const getAllLists = () => projectList.forEach((obj) => obj.list);

  return { getProjectList, getAllLists };
};

export { Project, projects };

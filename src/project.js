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
    {
      name: "torch",
      list: ["hi"],
    },
  ];
  const getProjectList = (index) => projectList[index].list; ///<<<<<
  const getAllLists = () => projectList.list;
  return { getProjectList, getAllLists };
};

export { Project, projects };

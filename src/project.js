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
      list: [],
    },
  ];
  const getProjectList = (index) => {
    let objInd = index;
    return projectList[objInd].list;
  }; ///<<<<<
  const getAllLists = () =>
    projectList.forEach((obj) => {
      console.log(obj.list);
    });
  return { getProjectList, getAllLists };
};

export { Project, projects };

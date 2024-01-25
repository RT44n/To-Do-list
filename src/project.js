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
  const getProject = () => projectList;
  const getProjectList = (index) => projectList[index].list; ///<<<<<
  const getAllLists = () => {
    let result = [];
    projectList.forEach(function (obj) {
      result.push(obj.list);
    });
    return result;
  };

  const getProjectNames = () => {
    let result = [];
    projectList.forEach(function (obj) {
      result.push(obj.name);
    });
    return result;
  };

  return { getProjectList, getAllLists, getProjectNames, getProject };
};

export { Project, projects };

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
      name: "Urgent",
      list: [],
    },
  ];
  const getProject = () => projectList;
  const getProjectList = (index) => projectList[index].list; ///<<<<<
  const getAllLists = () => {
    let a = [];
    projectList.forEach(function (obj) {
      a.push(obj.list);
    });
    return a;
  };

  const getProjectNames = () => {
    let a = [];
    projectList.forEach(function (obj) {
      a.push(obj.name);
    });
    return a;
  };

  return { getProjectList, getAllLists, getProjectNames, getProject };
};

export { Project, projects };

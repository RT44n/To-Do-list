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
  const getProjectList = (indexobj) => {
    console.log(indexobj);
    let index = indexobj;
    console.log(index);
    return projectList[index].list;
  };
  ///<<<<<
  const getAllLists = () =>
    projectList.forEach((obj) => {
      console.log(obj.list);
    });
  return { getProjectList, getAllLists };
};

export { Project, projects };

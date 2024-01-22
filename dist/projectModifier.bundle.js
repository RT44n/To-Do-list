/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/projectModifier.js ***!
  \********************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdE1vZGlmaWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdE1vZGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZFRvUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdExpc3QgPSBjcmVhdGVQcm9qZWN0KCk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChpbnB1dCkgPT4ge1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGlucHV0O1xuICAgIGNvbnN0IHRpdGxlID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50UHJvamVjdClbMF07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIG5ld1Byb2plY3RMaXN0LmdldFByb2plY3RMaXN0KCkucHVzaChwcm9qZWN0KTtcbiAgfTtcbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgZ2V0UHJvamVjdExpc3Q6IG5ld1Byb2plY3RMaXN0LmdldFByb2plY3RMaXN0IH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
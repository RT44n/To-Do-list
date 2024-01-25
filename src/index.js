//import { addToList } from "./taskModifier";
import "./index.css";
import { ProjectDisplayHandler } from "./projectDisplay";

const screenController = () => {
  //const projectHolder = document.querySelector(".projectHolder");

  const updateScreen = () => {
    let projectDisplay = ProjectDisplayHandler();
    projectDisplay.projectUpdateScreen();
  };

  updateScreen();
};
screenController();

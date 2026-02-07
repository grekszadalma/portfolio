import background from "../assets/background.jpg";
import "../css/index.css";
import TaskBar from "../components/TaskBar";
import AboutMePage from "./AboutMePage";
import {useState} from "react";

function MainPage() {

  const [isFinderOpen, setIsFinderOpen] = useState(false);



  const onOpenFinderWindow = () => {
    setIsFinderOpen(true);
  }

  const onCloseFinderWindow = () => {
    setIsFinderOpen(false);
  }

  return (
    <div className="page-bg">
      <div className="main-toolbar"></div>
      {isFinderOpen ? <AboutMePage onCloseFinder={onCloseFinderWindow} /> : null}
      <TaskBar onOpenFinderWindow={onOpenFinderWindow} onCloseFinderWindow={onCloseFinderWindow}/>
    </div>
  );
}

export default MainPage;

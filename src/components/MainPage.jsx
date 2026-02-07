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

  return (
    <div className="page-bg">
      {isFinderOpen ? <AboutMePage /> : null}
      <TaskBar onOpenFinderWindow={onOpenFinderWindow}/>
    </div>
  );
}

export default MainPage;

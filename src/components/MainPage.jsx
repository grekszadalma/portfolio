import background from "../assets/background.jpg";
import "../css/index.css";
import TaskBar from "../components/TaskBar";
import AboutMePage from "./AboutMePage";
import ToolBar from "./ToolBar";
import ProjectsPage from "./ProjectsPage";
import ContactsPage from "./ContactsPage";
import MailPage from "./MailPage";

import {useState} from "react";

function MainPage() {

  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);


  const onOpenFinderWindow = () => {
    setIsFinderOpen(true);
  }

  const onCloseFinderWindow = () => {
    setIsFinderOpen(false);
  }

  const onOpenProjectsWindow = () => {
    setIsProjectsOpen(true);
  }

  const onCloseProjectsWindow = () => {
    setIsProjectsOpen(false);
  }

  const onOpenContactsWindow = () => {
    setIsContactsOpen(true);
  }

  const onCloseContactsWindow = () => {
    setIsContactsOpen(false);
  }


  const onOpenMailWindow = () => {
    setIsMailOpen(true);
  }

  const onCloseMailWindow = () => {
    setIsMailOpen(false);
  }


  return (
    <div className="page-bg">
      <ToolBar/>
      {isFinderOpen ? <AboutMePage onCloseFinder={onCloseFinderWindow} /> : null}
      {isProjectsOpen ? <ProjectsPage onCloseProjects={onCloseProjectsWindow} /> : null}
      {isContactsOpen ? <ContactsPage onCloseContacts={onCloseContactsWindow} /> : null}
      {isMailOpen ? <MailPage onCloseMail={onCloseMailWindow}/> : null}
      <TaskBar 
      onOpenFinderWindow={onOpenFinderWindow} onCloseFinderWindow={onCloseFinderWindow}
      onOpenProjectsWindow={onOpenProjectsWindow} onCloseProjectsWindow={onCloseProjectsWindow}
      onOpenContactsWindow={onOpenContactsWindow} onCloseContactsWindow={onCloseContactsWindow}
      onOpenMailWindow={onOpenMailWindow} onCloseMailWindow={onCloseMailWindow}
      />
    </div>
  );
}

export default MainPage;

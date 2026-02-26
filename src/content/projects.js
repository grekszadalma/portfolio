
import dollarIcon from "../assets/dollar.png";
import folderIcon from "../assets/folder.png";

export const personalProjects = [
  {
    name: "Budgr",
    icon: folderIcon,
    type: "Personal",
    description: "Budget management web application",
    duration: "2 months",
    role: ["Full stack developer"],
    teamSize: 1,
    tech: ["Spring Boot", "React", "Python"],
    link: "https://github.com/grekszadalma/budgr"
  }
];

export const schoolProjects = [
  {
    name: "Systems project",
    icon: folderIcon,
    type: "School",
    description: "The goal of the project was to create a fully functional network. ",
    duration: "5 months",
    role: ["Systems administrator", "Project manager"],
    teamSize: 3,
    tech: ["Linux", "Bash", "KVM", "Computer networks"]
  },
  {
    name: "Database project",
    icon: folderIcon,
    type: "School",
    description: "Desktop application to visualize auctions",
    duration: "3 months",
    role: ["Full stack developer", "Project manager"],
    teamSize: 3,
    tech: ["Java", "Oracle", "JDBC"]
  },
  {
    name: "AttendanceCheck",
    icon: folderIcon,
    type: "School",
    description: 
    "After one year of constant signing of the attendance sheet and seeing all the problems that come with it, me and some classmates came up with this idea for our tutored project to create a platform to digitalize the attendance sheet.",
    duration: "1 year",
    role: ["Full stack developer"],
    teamSize: 5,
    tech: ["Express", "React", "Javascript", "Docker"]
  }
];
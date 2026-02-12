
import dollarIcon from "./assets/dollar.png";
import folderIcon from "./assets/folder.png";

export const personalProjects = [
  {
    name: "Budgr",
    icon: dollarIcon,
    type: "Personal",
    description: "Budget management web application",
    tech: ["Spring Boot", "React", "Python"],
    link: "https://github.com/grekszadalma/budgr"
  }
];

export const schoolProjects = [
  {
    name: "Database project",
    icon: folderIcon,
    type: "School",
    description: "Automated BOM data extraction",
    tech: ["Rust", "JavaScript", "Docker"]
  },
  {
    name: "AttendanceCheck",
    icon: folderIcon,
    type: "School",
    description: "Student attendance validation platform",
    tech: ["Express", "React", "Javascript", "Docker"]
  }
];
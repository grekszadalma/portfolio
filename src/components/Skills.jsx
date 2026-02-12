import "../css/skills.css";

export default function Skills() {
    return (
        <div className="skills-container">
            <h2 className="skills-title">Skills</h2>
            
            <h3>Languages & Frameworks</h3>
            <div className="skills-grid">
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                    <span>Java</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" />
                    <span>Spring Boot</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <span>JavaScript</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                    <span>React</span>
                </div>
                <div className="skill-item">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
          
                    <span>Express.js</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                    <span>Python</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" alt="Rust" />
                    <span>Rust</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt="Bash" />
                    <span>Bash</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg" alt="PowerShell" />
                    <span>PowerShell</span>
                </div>
            </div>

            <h3>Database</h3>
            <div className="skills-grid">
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                    <span>PostgreSQL</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" />
                    <span>MySQL</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" alt="Oracle" />
                    <span>Oracle</span>
                </div>
            </div>

            <h3>DevOps</h3>
            <div className="skills-grid">
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" />
                    <span>Docker</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
                    <span>Git</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Github" />
                    <span>Github</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" alt="Gitlab" />
                    <span>Gitlab</span>
                </div>
            </div>

            <h3>Project management</h3>
            <div className="skills-grid">
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" />
                    <span>Jira</span>
                </div>
            </div>
        </div>
    );
}
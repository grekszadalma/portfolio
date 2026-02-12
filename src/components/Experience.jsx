import "../css/index.css";

export default function Experience() {

    return (
        <div >
            <h2 className="section-title">Work Experience</h2>
            
            <div className="experience-item">
            <h3>Software Engineering Apprentice</h3>
            <p className="company">Siemens DISW (Supplyframe) • Grenoble</p>
            <p className="date">September 2024 – August 2025</p>

            <div className="project">
                <h4>BOMAi Project</h4>
                <p className="tech">Rust · JavaScript · Docker · AWS · Agile</p>
                <ul>
                    <li>
                        Led a full-stack project to develop an automated tool for extracting data from Bills of Materials (Excel, PDF).
                    </li>
                    <li>
                        Implemented a Rust-based backend and a JavaScript frontend.
                    </li>
                    <li>
                        Containerized development and QA environments using Docker and deployed the application on AWS.
                    </li>
                    <li>
                        Worked in an agile team with two Data Scientists.
                    </li>
                </ul>
            </div>

            <div className="project">
                <h4>Backend API Optimization</h4>
                <p className="tech">Java · REST APIs</p>
                <ul>
                    <li>
                        Improved a backend web service used daily by Supplyframe clients.
                    </li>
                    <li>
                        Focused on performance, reliability, and maintainability.
                    </li>
                </ul>
            </div>
        </div>


            <div className="experience-item">
                <h3>Software Engineering Apprentice</h3>
                <p className="company">Grenoble Alpes Métropole • Grenoble</p>
                <p className="date">October 2023 – August 2024</p>

                <div className="project">
                    <h4>Road Maintenance Platform Integration</h4>
                    <p className="tech">Python · REST APIs · Bash</p>
                    <ul>
                        <li>
                            Designed and developed a backend service to connect and synchronize two platforms used by road maintenance agents.
                        </li>
                        <li>
                            Automated data processing and workflows using Bash scripts.
                        </li>
                        <li>
                            Worked closely with the project manager and participated in coordination meetings with field agents.
                        </li>
                    </ul>
                </div>

                <div className="project">
                    <h4>Security Monitoring & Awareness</h4>
                    <p className="tech">Splunk · Cybersecurity</p>
                    <ul>
                        <li>
                            Created and maintained Splunk dashboards to monitor firewall and antivirus activity in real time.
                        </li>
                        <li>
                            Analyzed security logs to detect anomalies and support incident response.
                        </li>
                        <li>
                            Conducted internal phishing simulation campaigns to raise cybersecurity awareness.
                        </li>
                    </ul>
                </div>
            </div>


            <div className="experience-item">
                <h3>Computer Networking Intern</h3>
                <p className="company">Siemens Luxembourg • Contern, Luxembourg</p>
                <p className="date">April 2023 - July 2023</p>
                <ul>
                    <li>
                        Wrote PowerShell scripts to automate the display of system information retrieved from the Windows Registry on client machines.
                    </li>
                    <li>
                        Implemented data flows using Node-RED to collect and forward server information to Zabbix, improving monitoring and analysis.
                    </li>
                    <li>
                        Managed virtual machines using VMware ESXi.
                    </li>
                </ul>

            </div>

            <div className="experience-item">
                <h3>Programming teacher</h3>
                <p className="company">Logiscool Ltd. • Budapest, Hungary</p>
                <p className="date">September 2020 - August 2022</p>
                <ul>
                    <li>
                        Taught programming classes for children and teenagers using Scratch, Python, and JavaScript.
                    </li>
                    <li>
                        Followed and delivered the Logiscool curriculum while adapting exercises to students’ ages, skill levels, and interests.
                    </li>
                    <li>Explained complex programming concepts using simple, age-appropriate language and real-world examples.</li>
                    <li>Introduced basic programming concepts such as loops, conditions, variables, and algorithms through hands-on practice.</li>
                   <li>Developed strong communication and pedagogical skills through interaction with children and teenagers.</li>
                    <li>
                        Supported students in the development of individual and group projects, fostering creativity, logical thinking, and autonomy.
                    </li>
                    
                    <li>
                        Created a positive and motivating learning environment that encouraged curiosity and confidence in technology.
                    </li>
                </ul>

            </div>
        </div>
    )
}
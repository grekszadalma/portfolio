import "../css/index.css";

export default function Experience() {

    return (
        <div >
            <h2 className="section-title">Work Experience</h2>
            
            <div className="experience-item">
            <h3 >Software Engineer Intern</h3>
            <p className="company">Siemens DISW (Supplyframe) • Grenoble</p>
            <p className="date">September 2024 – August 2025</p>

            <div className="project">
  <h4 className="experience-title">BOMAi Project</h4>
  
  <p className="tech">Rust · JavaScript · PostgreSQL · HTML · CSS · Jira</p>

  <ul>
    <li>
        Developed a web application to extract data from Bills of Materials (BOMs) and automate BOM processing for Supplyframe’s EMS clients, leveraging machine learning models.
    </li>

    <li>
      Designed the overall solution architecture and data models.
    </li>
    <li>
      Implemented the database using PostgreSQL.
    </li>
    <li>
      Built the backend using Rust and the frontend using HTML, CSS, and JavaScript.
    </li>
    <li>
        Acted as the Product Owner for the project, collaborating daily with the Product Manager in French and presenting progress updates in English to the CTO and other stakeholders on a bi-monthly basis.
    </li>

    <li>
      Wrote user stories and technical specifications in Jira.
    </li>
    <li>
      Planned and participated in two-week Agile sprints.
    </li>
    <li>
      Collaborated closely with two Data Scientists.
    </li>
    
  </ul>
</div>


            <div className="project">
            <h4 className="experience-title">Webquote Service Optimization</h4>
            <p className="tech">Java · REST APIs</p>
            <ul>
                <li>
                    Optimized Webquote, a critical module of Supplyframe's Buymanager product that retrieves he service retrieves electronic component prices from suppliers (e.g. Farnell, RS, Digikey) via external API sused daily by 10+ clients
                </li>
                <li>
                    Analyzed and refactored Java codebase to resolve performance bottlenecks causing slow or missing pricing data
                </li>
                
                <li>
                    Migrated HTTP requests from HttpClient to OkHttp, significantly improving response times
                </li>
                <li>
                    Implemented timeout mechanisms in threads to prevent blocking operations
                </li>
                <li>
                    Presented daily progress updates in Agile team standups
                </li>
                </ul>
            </div>
        </div>


            <div className="experience-item">
                <h3>Software Engineer and Systemes Intern</h3>
                <p className="company">Grenoble Alpes Métropole • Grenoble</p>
                <p className="date">October 2023 – August 2024</p>

                <div className="project">
                    <h4 className="experience-title">Road Maintenance Platform Integration</h4>
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
                    <h4 className="experience-title">Security Monitoring & Awareness</h4>
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
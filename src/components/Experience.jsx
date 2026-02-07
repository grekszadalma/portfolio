import "../css/index.css";

export default function Experience() {

    return (
        <div >
            <h2 className="section-title">Work Experience</h2>
            
            <div className="experience-item">
                <h3>Software Engineering Apprentice</h3>
                <p className="company">Siemens DISW (Supplyframe) • Grenoble</p>
                <p className="date">September 2024 - August 2025</p>
                <ul>
                    <li>End-of-studies project: Full-stack developer for automated BOM data extraction tool (Excel, PDF)</li>
                    <li>Backend in Rust, frontend in JavaScript, Docker containerization, AWS deployment</li>
                    <li>Agile team collaboration with two Data Scientists</li>
                    <li>Backend web service optimization used daily by Supplyframe clients</li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Software Engineering Apprentice</h3>
                <p className="company">Grenoble Alpes Métropole</p>
                <p className="date">October 2023 - August 2024</p>
                <ul>
                    <li>"Patrouillage" project: Backend developer for incident/intervention database integration</li>
                    <li>Python/Bash APIs improving workflow for 2,000 street maintenance agents</li>
                </ul>
            </div>
        </div>
    )
}
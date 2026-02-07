import "../css/index.css";

export default function Education() {

    return (
        <div>
            <h2 className="section-title">Education</h2>
            
            <div className="education-item">
                <h3>Master's in Computer Networks Engineering</h3>
                <p className="school">Grenoble INP - Ensimag</p>
                <p className="date">September 2023 - August 2025</p>
            </div>

            <div className="education-item">
                <h3>Professional Bachelor's - Telecom, Mobility, Networks</h3>
                <p className="school">UGA - IUT1</p>
                <p className="date">September 2022 - August 2023</p>
            </div>

            <div className="education-item">
                <h3>Bachelor's in Computer Science</h3>
                <p className="school">Eötvös Loránd University, Budapest, Hungary</p>
                <p className="date">2019 - 2022</p>
            </div>
        </div>
    )
}
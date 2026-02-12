import "../css/index.css";

export default function Education() {
    return (
        <div>
            <h2 className="section-title">Education</h2>
            
            <div className="education-item">
                <h3>Master RIE</h3>
                <p className="school">Grenoble INP – Ensimag, Grenoble, France</p>
                <p className="date">September 2023 – August 2025</p>
                <p>
                    Master’s degree in advanced Computer Networks, Programming, and Cybersecurity. 
                    Completed as an apprenticeship. Courses fully taught in French.
                </p>
            </div>

            <div className="education-item">
                <h3>Professional Bachelor’s (CNMS)</h3>
                <p className="school">Université Grenoble Alpes – IUT1, Grenoble, France</p>
                <p className="date">September 2022 – August 2023</p>
                <p>
                    Professional Bachelor’s degree in Computer Networks, Mobility, Telecommunications, and Cybersecurity.
                    Courses fully taught in English.
                </p>
            </div>

            <div className="education-item">
                <h3>Bachelor’s in Computer Science</h3>
                <p className="school">Eötvös Loránd University, Budapest, Hungary</p>
                <p className="date">2019 – 2022</p>
                <p>
                    Bachelor’s degree in Applied Mathematics and Programming.
                    Courses taught in Hungarian and English.
                </p>
            </div>
        </div>
    );
}

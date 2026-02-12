import "../css/index.css";

export default function Interests() {
    return (
        <div>
            <h2 className="section-title">Interests</h2>
            
            <div className="interests-item">
                <h3>Weightlifting</h3>
                <p>
                    I started weightlifting at the age of 17 and quickly fell in love with the sport. After a long on-and-off relationship with training, 
                    I have been taking it more seriously since 2026. I train four times a week.
                </p>
            </div>

            <div className="interests-item">
                <h3>Swimming</h3>
                <p>
                    I started swimming at a very young age in kindergarten then abandoned it for a long time. I returned to swimming in 2023, and my current goal is to participate
                    in the Balatonátúszás open-water swimming event in Hungary in 2027.
                </p>
            </div>

            <div className="interests-item">
                <h3>Skiing</h3>
                <p>
                    I started skiing at the age of 12 and have skied almost every year since then.
                    I have visited many ski resorts in countries such as Serbia, Romania, Slovakia,
                    Austria, and France. My favorite ski resort is Les Deux Alpes in France.
                </p>
            </div>
        </div>
    );
}

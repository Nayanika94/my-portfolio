import "./Skills.css";
import Skill from "../../img/skill.png";

const Skills = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Skill}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Skills</h1>
                <div className="a-award">
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Languages</h4>
                        <ul className="a-award-desc">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                        </ul>
                    </div>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Web</h4>
                        <ul className="a-award-desc">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>AJAX</li>
                            <li>JQuery</li>
                            <li>XML</li>
                        </ul>
                    </div>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Database</h4>
                        <ul className="a-award-desc">
                            <li>PL/SQL</li>
                            <li>MySQL</li>
                            <li>NoSQL</li>
                            <li>JDBC</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
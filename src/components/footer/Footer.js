import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()}
                    </span>
                </div>
                <a
                    href="https://github.com/Nayanika94"
                    target="_blank"
                    rel="noreferrer"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="http://linkedin.com/in/nayanika-saha"
                    target="_blank"
                    rel="noreferrer"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="mailto:nayanika.jl@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>

            </div>
        </footer>
    );
};

export default Footer;
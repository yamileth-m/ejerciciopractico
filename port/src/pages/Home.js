import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import {faFacebook , faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' ;

function Home () {
    retrun (
        <section className="home">
            <div>
                <h1>Soy Yamileth Rodriguez</h1>
                <p>Soy un <strong>estudiante en software de código abierto</strong></p>
                <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="nooper noreferrer">
                <FontAwesomeIcon icon={ faFacebook } size="2x" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="nooper noreferrer">
                <FontAwesomeIcon icon={ faLinkedin } size="2x" />
                </a>
                <a href="https://github.com" target="_blank" rel="nooper noreferrer">
                <FontAwesomeIcon icon={ faGithub } size="2x" />
                </a>
                </div>
            </div>
        </section>
    );
}

export default Home;

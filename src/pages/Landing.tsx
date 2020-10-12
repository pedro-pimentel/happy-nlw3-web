import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoimg from '../images/Logo.svg';

function Landing(){
    return(
        <div id="pages-landing">
            <div className="content-wrapper">
                <img src={logoimg} alt="happy" />
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
                <div className="location">
                    <strong>Santarém</strong>
                    <span>Pará</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0 ,0 ,0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;
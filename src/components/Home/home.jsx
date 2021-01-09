import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import hero from '../../img/nio-day-2021-countdown-desktop.png'
import WhiteLogo from '../../img/logo-white.svg';
import './home.scss'

class home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="hero-1">
    
                    {/* <img className="hero-1-img" src={hero}/> */}
                    <img className="hero-logo" src={WhiteLogo} width="100px" height="100px"/>
                </section>

                <section className="hero-2">
                
                </section>
            </div>
        );
    }
}

export default home;

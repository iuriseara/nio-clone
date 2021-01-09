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
                    <div className='hero1-container'>
                        <img className="hero-logo" src={WhiteLogo}/>
                        <p className='hero-1-text'>READY FOR TOMORROW</p>
                       
                       <div className='hero-1-text-wrapper'>
                            <p className='hero-1-date'>2021.01.09 18:30 GMT + 8</p>
                            <p className='hero-1-location'>Chengdu China</p>
                            <button className='live-stream-btn'>Watch Replay</button>
                       </div>

                    </div>
                </section>

                <section className="hero-2">

                </section>
            </div>
        );
    }
}

export default home;

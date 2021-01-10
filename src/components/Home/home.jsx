import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import hero from '../../img/nio-day-2021-countdown-desktop.png'
import WhiteLogo from '../../img/logo-white.svg';
import EC6 from '../../img/EC6-Logo-2020.png'
import ES6 from '../../img/ES6-Logo.png'
import ES8 from '../../img/es8-logo-20200825-left.png'
import NioHouseLogo from '../../img/white-niohouse-logo.png'
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
                    <img className="ec6-logo" src={EC6}/>
                    <button className='learn-more-btn'>Learn More</button>
                </section>

                <section className="hero-3">
                    <img className="es6-logo" src={ES6}/>
                    <button className='learn-more-btn'>Learn More</button>
                </section>

                <section className="hero-4">
                    <img className="es8-logo" src={ES8}/>
                    <button className='learn-more-btn'>Learn More</button>
                </section>

                <section className="hero-5">
                    <div className='hero-5-text-wrapper'>
                        <img className="nio-hero-logo" src={WhiteLogo}/>
                        <h4 className='hero-5-title'>NIO BaaS</h4>
                        <p className='hero-5-text'>Battery as a Service</p>
                        <button className='learn-more-btn' id='hero5-learn-btn'>Learn More</button>
                    </div>
                </section>

                <section className="hero-6">
                    <div className='hero6-text-wrapper'>
                        <img className="nio-hero6-logo" src={WhiteLogo}/>
                        <p className='hero-6-title'>NIO 100 kWh Battery</p>
                        <h4 className='hero6-text'>Launch Event</h4>
                    </div>

                    <div className='hero6-bottom-wrapper'>
                        <p className='hero6-date'>2020.11.06 13:30 GMT+8</p>
                        <button className='press-release-btn'>Press Release</button>
                    </div>
                </section>





                <section className="hero-7">
                    <img className="nio-house-logo" src={NioHouseLogo}/>
                    <p className='hero7-text'>A space of abundant joy and possibilities</p>
                    <button className='learn-more-btn' id='hero7-btn'>Learn More</button>
                </section>


            </div>
        );
    }
}

export default home;

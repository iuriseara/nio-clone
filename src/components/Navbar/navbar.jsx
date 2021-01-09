import React, { Component } from 'react';
import './navbar.scss';
import DesktopLogo from '../../img/menu-logo.svg'
import MobileLogo from '../../img/logo-black.svg'
import NavIcon from '../../img/menu-icon.svg'

class navbar extends Component {

    state = {
        open: false,
        deviceWidth: window.innerWidth,
        display: 'none'
    }

    menuToggle = () => {
        if (this.state.deviceWidth <= 991) {
            this.setState({
                open: true,
                display: 'block'
            })
        }
        if (this.state.open === true) {
            this.setState({
                open: false,
                display: 'none'
            })
        }
    
    }


    render() {

        console.log(this.state.deviceWidth)
        return (
            <div className="navbar">     
                
                <div className="nav-content">
                        <img className="menu-logo-mobile" src={MobileLogo} width="30px" height="30px"/>
                        <img className="menu-logo-desktop" src={DesktopLogo} width="90px" height="50px"/>
                    <ul>
                        <span className="nav-container-mobile" style={{display: this.state.display}}>
                            <li className="nav-item"><a href="#">EC6</a></li>
                            <li className="nav-item"><a href="#">ES8</a></li>
                            <li className="nav-item"><a href="#">ES6</a></li>
                            <li className="nav-item"><a href="#">Services</a></li>
                            <li className="nav-item"><a href="#">NIO Life</a></li>
                            <li className="nav-item"><a href="#">About</a></li>
                            {/* <li className="nav-item"><img src={}</li> */}
                        </span>
                        
                        <span className="nav-container-desktop">
                            <li className="nav-item"><a href="#">EC6</a></li>
                            <li className="nav-item"><a href="#">ES8</a></li>
                            <li className="nav-item"><a href="#">ES6</a></li>
                            <li className="nav-item"><a href="#">Services</a></li>
                            <li className="nav-item"><a href="#">NIO Life</a></li>
                            <li className="nav-item"><a href="#">About</a></li>
                        </span>


                    </ul>

                    <img className="mobile-menu-icon" src={NavIcon} width="30px" height="30px" onClick={this.menuToggle}/>
                </div>
            </div>
        );
    }
}

export default navbar;


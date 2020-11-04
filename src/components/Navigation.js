import React from 'react';
import '../styles/Navigation.css';
import logo from '../img/logo.png';


const Navigation = () => {

    return(
        <div className="navigationContainer">
            <img id="logo" src={logo} alt=""/>
            <div className="linkContainer">
                <p className="navLink" id="odessa">ODESSA SAFE ZONE</p>
                <p className="navLink" id="kiev">KIEV SAFE ZONE</p>
                <p className="navLink" id="lviv">LVIV SAFE ZONE</p>
            </div>
        </div>
    )
}

export default Navigation;

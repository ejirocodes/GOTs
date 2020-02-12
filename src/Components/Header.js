import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../Assets/Components/Logo_HBO@2x.png';

class Header extends Component {
    render() {
        return (
            <header className="Header-main">
                <nav className="Header-nav"> 
                    <NavLink exact to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink exact to='/seasons'>Seasons</NavLink>
                        </li>
                        <li>
                        <NavLink exact to='/characters'>Characters</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/houses'>Houses</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/lore'>Lore</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/gallery'>Gallery</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header

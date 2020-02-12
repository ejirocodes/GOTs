import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../Assets/Components/Logo_HBO@2x.png';
import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <>
               <nav className="Nav-main"> 
                    <NavLink className="Nav-logo" exact to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <ul className="Navlink-container">
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
            </>
        )
    }
}

export default Navbar

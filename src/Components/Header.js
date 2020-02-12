import React, { Component } from 'react';
import './Navbar'
import './Header.css'
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <header className="Header-main">
                <Navbar />
            </header>
        )
    }
}

export default Header

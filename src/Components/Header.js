import React, { Component } from 'react';
import './Navbar'
import './Header.css'
import Navbar from './Navbar';
import Hero from './Hero';

class Header extends Component {
    render() {
        return (
            <header className="Header-main">
                <Navbar />
                <Hero />
            </header>
        )
    }
}

export default Header

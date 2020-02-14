import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import GOTImg from '../Assets/elements/Game_of_Thrones_logo@2x.png';
import './NotFound404.css';

class NotFound404 extends Component {
    render() {
        return (
            <section className="Not-Found">
                <div className="got-img">
                    <img src={GOTImg} alt="Game of Thrones Logo"/>
                </div>
                <div className="Not-Found__message">
                    <h2>The long night is coming, and the dead come with it.</h2>
                    <NavLink to="/">return home</NavLink>
                </div>
            </section>
        )
    }
}

export default NotFound404;

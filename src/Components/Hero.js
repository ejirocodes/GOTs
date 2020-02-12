import React, { Component } from 'react';
import './Hero.css';

export class Hero extends Component {
    render() {
        return (
            <div className="Hero-main">
                <div className="Hero">
                    <h1>Game of <br /> Thrones</h1>
                    <h2>
                        "There is only one war that matters.
                        The Great War. And it is here." ~ Jon Snow
                    </h2>
                    <button className="cta-btn">
                        Watch Trailer
                    </button>
                </div>
            </div>
        )
    }
}

export default Hero


import React, { Component } from 'react';
import './Hero.css';
import PlayIcon from '../Assets/elements/play_icon.png'
import FacebookIcon from '../Assets/elements/facebook@2x.png'
import InstaIcon from '../Assets/elements/insta@2x.png'
import NetflixIcon from '../Assets/elements/netflix@2x.png'
import YoutubeIcon from '../Assets/elements/Youtube@2x.png'

export class Hero extends Component {
    render() {
        return (
            <div className="Hero-main">
                <div className="Hero-left">
                    <h1>Game of <br /> Thrones</h1>
                    <h2>
                        "There is only one war that matters. <br />
                        The Great War. And it is here." ~ Jon Snow
                    </h2>
                    <a href="https://www.youtube.com/watch?v=rlR4PJn8b8I" target="_blank" rel="noopener noreferrer" className="cta-btn">
                        <span className="play-icon" role="img">
                            <img src={PlayIcon} alt="play icon" /> 
                        </span> <p>Watch Trailer</p>
                    </a>
                </div>
                <div className="Hero-right">
                    <a href="http://" title="Game of Thrones on Facebook">
                        <img src={FacebookIcon} alt="Facebook page" />
                    </a>
                     <a href="http://" title="Game of Thrones on Instagram">
                        <img src={InstaIcon} alt="Instagram page" />
                    </a>
                     <a href="http://" title="Game of Thrones on Youtube">
                        <img src={YoutubeIcon} alt="Youtube channel" />
                    </a>
                     <a href="http://" title="Game of Thrones on Netflix">
                        <img className="netflix-img" src={NetflixIcon} alt="Stream on netflix" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Hero


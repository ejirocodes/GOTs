import React from 'react';
import LearnMoreImg from '../Assets/images/night_king_image.png'
import './LearnMore.css'



const LearnMore = () => {
    return (
        <section className="LearnMore-container">
            <div className="learn-more-img">
                <img src={LearnMoreImg} alt=""/>
            </div>
            <div className="learn-more-text">
                <h2>Learn <br />
                    More <br />
                    About <br />
                    The Show
                </h2>
                <a className="learn-more-btn"  href="https://www.hbo.com/game-of-thrones"  rel="noopener noreferrer" target="_blank">Learn More</a>
            </div>
        </section>
   ) 
}

export default LearnMore;

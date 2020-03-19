import React, { Component } from 'react';
import PlayIcon from '../Assets/elements/play_icon.png';

export class TrailerButton extends Component {
    render() {
        return (
          <React.Fragment>
            <a
              href="https://www.youtube.com/watch?v=rlR4PJn8b8I"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <span className="play-icon" role="img">
                <img src={PlayIcon} alt="play icon" />
              </span>{' '}
              <p>Watch Trailer</p>
            </a>
          </React.Fragment>
        );
    }
}

export default TrailerButton


import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export class Footer extends Component {
  render() {
    let footerStyle = {
      padding: '1.1rem .5rem',
      backgroundColor: '#000',
      fontSize: '1rem'
    };
    let footerTxt = {
      fontWeight: '400',
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1.5rem'
    };
    let a = {
      textDecoration: 'none',
      color: 'var(--btn-color-main)',
      marginLeft: '.5rem'
    };
    let iconStyle = {
      color: 'var(--btn-color-main)',
      margin: '0 3px',
      animation: 'pound 0.35s infinite alternate',
      WebkitAnimation: 'pound 0.35s infinite alternate'
    };
    return (
      <footer style={footerStyle} className="d-flex align-items-center justify-content-center">
        <small style={footerTxt}>
          Made with{' '}
          <span role="img" aria-label="green heart emoji">
            {' '}
            <FontAwesomeIcon style={iconStyle} icon={faHeart} />{' '}
          </span>{' '}
          by
          <a
            style={a}
            target="_blank"
            rel="noopener noreferrer"
            href="http://twitter.com/EjiroCodes"
          >
            Ejiro Asiuwhu
          </a>
        </small>
      </footer>
    );
  }
}

export default Footer;

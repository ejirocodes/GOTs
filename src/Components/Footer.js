import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export class Footer extends Component {
  render() {
    let footerStyle = {
      padding: '2.5rem .5rem',
      backgroundColor: '#000',
      fontSize: '1rem'
    };
    let h1Style = {
      fontWeight: '400',
      fontFamily: 'Open Sans, sans-serif'
    };
    let a = {
      textDecoration: 'none',
      color: '#16C60C'
    };
    let heartStyle = {
      color: '#16C60C',
      margin: '0 3px',
      fontSize: '10px',
      animation: 'pound 0.35s infinite alternate',
      '-webkit-animation': 'pound 0.35s infinite alternate'
    };
    return (
      <footer style={footerStyle}>
        <small style={h1Style}>
          Made with{' '}
          <span role="img" aria-label="green heart emoji">
            {' '}
            <FontAwesomeIcon icon={faCoffee} />{' '}
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

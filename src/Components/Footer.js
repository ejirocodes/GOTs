import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    const footerStyle = {
      padding: '2.5rem .5rem',
      backgroundColor: '#000',
      fontSize: '1rem'
    };
    const h1Style = {
      fontWeight: '400',
      fontFamily: 'League-Spartan'
    };
    const a = {
      textDecoration: 'none',
      color: '#16C60C'
    };
    return (
      <footer style={footerStyle}>
        <h1 style={h1Style}>
          Made with{' '}
          <span role="img" aria-label="green heart emoji">
            💚
          </span>
          by{' '}
          <a style={a} href="http://twitter/EjiroCodes">
            Ejiro Asiuwhu
          </a>
        </h1>
      </footer>
    );
  }
}

export default Footer;

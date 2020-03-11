import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import backIcon from '../Assets/elements/back_icon.png';
import './Characters.css';

class Characters extends Component {
  render() {
    return (
      <>
        <section className="Characters">
          <div className="Characters__bg--left"></div>
          <div className="back-btn">
            <NavLink to="/">
              <p>BACK</p> <img src={backIcon} alt="" />
            </NavLink>
          </div>
        </section>
      </>
    );
  }
}

export default Characters;

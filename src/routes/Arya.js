import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Arya.css';
import backIcon from '../Assets/elements/back_icon.png';

export class Arya extends Component {
  render() {
    return (
      <section className="Arya">
        <div className="back-btn">
          <NavLink to="/">
            <p>BACK</p> <img src={backIcon} alt="" />
          </NavLink>
        </div>
        <div className="Arya-right">
          <h2>" STICK'M WITH <br/> THE POITY END "</h2>
        </div>
      </section>
    );
  }
}

export default Arya;

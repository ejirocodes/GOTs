import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Arya.css';
import backIcon from '../Assets/elements/back_icon.png';

export class Arya extends Component {
  render() {
    return (
      <section className="Arya">
        <div className="back-btn">
          <NavLink to="/characters">
            <p>BACK</p> <img src={backIcon} alt="" />
          </NavLink>
        </div>
        <div className="Arya-right">
          <div className="Arya-right-heading">
            <h2>
              " STICK'M WITH <br /> THE POITY END "
            </h2>
            <h3>~ Arya Stark</h3>
          </div>
          <p className="first-bold">
            <span className="first__letter--bold">A</span>
            rya Stark is the youngest daughter and third child of Lady Catelyn
            and Lord Ned Stark.
          </p>
          <p>
            Arya was born and raised at Winterfell. She has an older sister,
            Sansa, an older brother Robb, two younger brothers Bran and Rickon
            Stark, and a "bastard half-brother" Jon Snow.
          </p>
          <p>
            Arya rejects the notion that she must become a lady and marry for
            influence and power. Instead, she believes that she can forge her
            own destiny. She is fascinated by warfare and training in the use of
            arms, and is bored by embroidery and other "lady-like" pursuits. She
            takes after her father and has a quarrelsome relationship with her
            sister Sansa, due to their contrasting interests and personalities.
            She is close to her "half-brother" Jon, who is also something of an
            outsider.
          </p>
        </div>
      </section>
    );
  }
}

export default Arya;

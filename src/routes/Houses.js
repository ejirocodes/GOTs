import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Houses.css';
import card1 from '../Assets/images/Targaryan_Post.png';
import card2 from '../Assets/images/Starrks.png';
import card3 from '../Assets/images/boratheons.png';
import card4 from '../Assets/images/lannasters.png';
import backIcon from '../Assets/elements/back_icon.png';
import Footer from '../Components/Footer';
export class Houses extends Component {
  render() {
    return (
      <>
        <section className="Houses">
          <div className="back-btn" style={{float: 'none', marginBottom: '7rem'}}>
            <NavLink to="">
              <p>BACK</p> <img src={backIcon} alt="" />{' '}
            </NavLink>
          </div>
          <div className="Houses__card-container">
            <NavLink to="/targaryan">
              <figure>
                <img src={card1} alt="Targaryan Post" />
              </figure>
            </NavLink>
            <NavLink to="/starrks">
              <figure>
                <img src={card2} alt="Starrks" />
              </figure>
            </NavLink>
            <NavLink to="/lannasters">
              <figure>
                <img src={card4} alt="Lannasters" />
              </figure>
            </NavLink>
            <NavLink to="/boratheons">
              <figure>
                <img src={card3} alt="Boratheons" />
              </figure>
            </NavLink>
          </div>
          <h3 className="footer-heading">
            <span>
              Game of
              <br />
              Thrones
            </span>
          </h3>
        </section>
        <Footer />
      </>
    );
  }
}

export default Houses;

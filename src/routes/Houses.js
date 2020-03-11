import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import './Houses.css';
import card1 from '../Assets/images/Targaryan_Post.png';
import card2 from '../Assets/images/Starrks.png';
import card3 from '../Assets/images/boratheons.png';
import card4 from '../Assets/images/lannasters.png';
export class Houses extends Component {
  render() {
    const imgContainer = {};
    return (
      <>
        <Navbar />
        <section className="Houses">
          <div className="Houses__card-container ">
            <img src={card1} alt="Targaryan Post" />
            <img src={card2} alt="Starrks" />
            <img src={card3} alt="Boratheons" />
            <img src={card4} alt="Lannasters" />
          </div>
        </section>
      </>
    );
  }
}

export default Houses;

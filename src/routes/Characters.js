import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import backIcon from '../Assets/elements/back_icon.png';
import './Characters.css';

class Characters extends Component {
  render() {
    const cahractersImages = [
      {
        title: 'Aemon',
        url: require('../Assets/images/GOT505_102414_HS_DSC_1022-696x442.png')
      },
      {
        title: 'Arya',
        url: require('../Assets/images/Arya_stark_s7.png')
      },
      {
        title: 'Aerys',
        url: require('../Assets/images/mad-king-aerys-targaryen.png')
      }
    ];
    return (
      <>
        <section className="Characters">
          <div className="Characters__bg--left">
            <div className="back-btn">
              <NavLink to="/">
                <p>BACK</p> <img src={backIcon} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="Characters-content">
            <h3 className="Characters-heading">Characters</h3>
            <div className="Characters-img">
              {cahractersImages.map(cahractersImage => (
                <img src={cahractersImage.url} alt={cahractersImage.title} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Characters;
